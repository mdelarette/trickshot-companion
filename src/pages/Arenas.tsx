import { useState, useEffect } from "react";

import { useTranslation } from 'react-i18next';

import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import ArenaView from "../features/game/ArenaView";
import { Arena, Attribute, GameData } from "../types/data";

const NotPrintable = styled('div')({
  '@media print': {
    display: 'none',
  },
});

interface ArenasProps {
  arenaRank: number | '';
  setArenaRank: (rank: number | '') => void;
}

const Arenas = ({ arenaRank, setArenaRank }: ArenasProps) => {
  const { t } = useTranslation();

  const [arenas, setArenas] = useState<Arena[]>([]);
  const [attributes, setAttributes] = useState<Attribute[]>([]);

  const [arena, setArena] = useState<Arena | null>(null);

  useEffect(() => {
    const getAPI = (url: string) => {
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data: GameData) => {
          setArenas(data.Arenas);
          setAttributes(data.Attributes);
        });
    };

    getAPI("./data.json");
  }, []);

  useEffect(() => {
    if (arenaRank === '' || !arenas[arenaRank]) {
      setArena(null);
      return;
    }

    const _arena = { ...arenas[arenaRank] };

    _arena.center = attributes.find(attribute => attribute.Name === _arena.Attribute_Center);
    _arena.winger = attributes.find(attribute => attribute.Name === _arena.Attribute_Winger);
    _arena.defenseman = attributes.find(attribute => attribute.Name === _arena.Attribute_Defenseman);
    _arena.goalie = attributes.find(attribute => attribute.Name === _arena.Attribute_Goalie);

    setArena(_arena);
  }, [arenaRank, arenas, attributes]);

  if (!arenas) {
    return (<>loading</>);
  }

  return (
    <>
      <NotPrintable>
        <Box sx={{
          maxWidth: { sm: 400 },
          margin: 'auto',
          position: 'sticky',
          top: 64,
          zIndex: 1,
          py: 1
        }}>
          <TextField
            select
            fullWidth
            value={arenaRank !== '' && arenas[arenaRank] ? arenaRank : ''}
            onChange={e => setArenaRank(e.target.value === '' ? '' : Number(e.target.value))}
            label={t('arena_selection')}
            sx={{ mb: 2 }}
          >
            <MenuItem value="">
              <em>{t('arena_selection')}</em>
            </MenuItem>
            {arenas.map((arena, index) => (
              <MenuItem key={index} value={index}>
                {arena.Name}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </NotPrintable>

      {arena && (
        <ArenaView arena={arena} />
      )}
    </>
  );
};

export default Arenas;
