import React, {useState, useEffect} from "react";


import Stack from '@mui/material/Stack';


import ArenaCard from "./ArenaCard";
import PlayerCard from "./PlayerCard";


const ArenaView = ({arena}) =>
{
    return (
        <>
        <Stack direction={'row'} spacing={8} flexWrap="wrap">
            <ArenaCard arena={arena} />
            <PlayerCard player={arena.center} />
            <PlayerCard player={arena.winger} />
            <PlayerCard player={arena.defenseman} />
            <PlayerCard player={arena.goalie} />
        </Stack>
        
        
    </>

    );
};

export default ArenaView;