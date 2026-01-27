import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import PrintIcon from '@mui/icons-material/Print';

import ArenaCard from '../features/game/ArenaCard';
import PlayerCard from '../features/game/PlayerCard';
import { GameData, Arena, Attribute } from '../types/data';

const Export = () => {
  const { t } = useTranslation();
  const [gameData, setGameData] = useState<GameData | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data: GameData) => {
        setGameData(data);
      });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (!gameData) {
    return <Typography>Loading...</Typography>;
  }

  const arenas: Arena[] = gameData.Arenas;
  const attributes: Attribute[] = gameData.Attributes;

  // Group attributes by position
  const centerAttributes = attributes.filter((a) => a.Position === 'center');
  const wingerAttributes = attributes.filter((a) => a.Position === 'winger');
  const defensemanAttributes = attributes.filter((a) => a.Position === 'defenseman');
  const goalieAttributes = attributes.filter((a) => a.Position === 'goalie');

  return (
    <Box sx={{ pb: 8 }}>
      {/* Print button - hidden when printing */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          mb: 2,
          justifyContent: 'center',
          '@media print': { display: 'none' }
        }}
      >
        <Button
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
        >
          {t('print')}
        </Button>
      </Stack>

      {/* Screen display with sections */}
      <Box
        sx={{
          '@media print': { display: 'none' }
        }}
      >
        {/* Arena Cards Section */}
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontFamily: 'Anta, sans-serif',
            textAlign: 'center'
          }}
        >
          {t('arena_cards')} ({arenas.length})
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            mb: 4
          }}
        >
          {arenas.map((arena) => (
            <Box key={arena.Name}>
              <ArenaCard arena={arena} />
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Player Cards Section */}
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontFamily: 'Anta, sans-serif',
            textAlign: 'center'
          }}
        >
          {t('player_cards')} ({attributes.length})
        </Typography>

        {/* Centers */}
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            fontFamily: 'Anta, sans-serif',
            color: 'blueviolet'
          }}
        >
          {t('center')} ({centerAttributes.length})
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            mb: 3
          }}
        >
          {centerAttributes.map((attr) => (
            <Box key={attr.Name}>
              <PlayerCard player={attr} />
            </Box>
          ))}
        </Box>

        {/* Wingers */}
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            fontFamily: 'Anta, sans-serif',
            color: 'blueviolet'
          }}
        >
          {t('winger')} ({wingerAttributes.length})
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            mb: 3
          }}
        >
          {wingerAttributes.map((attr) => (
            <Box key={attr.Name}>
              <PlayerCard player={attr} />
            </Box>
          ))}
        </Box>

        {/* Defensemen */}
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            fontFamily: 'Anta, sans-serif',
            color: 'blueviolet'
          }}
        >
          {t('defenseman')} ({defensemanAttributes.length})
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            mb: 3
          }}
        >
          {defensemanAttributes.map((attr) => (
            <Box key={attr.Name}>
              <PlayerCard player={attr} />
            </Box>
          ))}
        </Box>

        {/* Goalies */}
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            fontFamily: 'Anta, sans-serif',
            color: 'blueviolet'
          }}
        >
          {t('goalie')} ({goalieAttributes.length})
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            mb: 3
          }}
        >
          {goalieAttributes.map((attr) => (
            <Box key={attr.Name}>
              <PlayerCard player={attr} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Print: single continuous flow */}
      <Box
        ref={printRef}
        sx={{
          display: 'none',
          '@media print': {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0.5,
            justifyContent: 'center'
          }
        }}
      >
        {arenas.map((arena) => (
          <Box key={`print-arena-${arena.Name}`} sx={{ breakInside: 'avoid' }}>
            <ArenaCard arena={arena} />
          </Box>
        ))}
        {attributes.map((attr) => (
          <Box key={`print-player-${attr.Name}`} sx={{ breakInside: 'avoid' }}>
            <PlayerCard player={attr} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Export;
