import React, {useState, useEffect} from "react";

import { useTranslation } from 'react-i18next';

import { styled } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import ArenaView from "../features/game/ArenaView";

const NotPrintable = styled('div')({
    '@media print': {
      display: 'none',
    },
  });


const Arenas = ({}) =>
{
    const { t, i18n } = useTranslation();

    const [arenas, setArenas] = useState([]);
    const [attributes, setAttributes] = useState([]);
    
    const [arenaRank, setArenaRank] = useState('');
    const [arena, setArena] = useState(null);

    useEffect(() => {
        const getAPI = (data) => {
            fetch(data, {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("Arenas", data.Arenas);
                console.log("Attributes", data.Attributes);
                setArenas(data.Arenas);
                setAttributes(data.Attributes);
              });
          };

        getAPI("./data.json");
      }, []);


      // Newly selected arena
      useEffect(() => {

        if(arenaRank === ''){
            return;
        }

        let _arena = arenas[arenaRank];

        _arena.center = attributes.find(attribute => attribute.Name === _arena.Attribute_Center);
        _arena.winger = attributes.find(attribute => attribute.Name === _arena.Attribute_Winger);
        _arena.defenseman = attributes.find(attribute => attribute.Name === _arena.Attribute_Defenseman);
        _arena.goalie = attributes.find(attribute => attribute.Name === _arena.Attribute_Goalie);

        // console.log("Newly selected arena", _arena);

        setArena(_arena);

      }, [arenaRank]);


    if(!arenas){
        return(<>loading</>);
    }  


    return (

        <>

            <NotPrintable>
                <TextField
                    select
                    value={arenaRank}
                    onChange={e => setArenaRank(e.target.value)}
                    label={t('arena_selection')}
                    sx={{marginBottom: 1, minWidth:'200px'}}
                >
                    {arenas.map((arena, index) => (
                        <MenuItem key={index} value={index}>
                            {arena.Name}
                        </MenuItem>
                    ))}
                </TextField>
            </NotPrintable>


            {arena && (
                <ArenaView arena={arena}/>
            )}

        </>

    );
};

export default Arenas;