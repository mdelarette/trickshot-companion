import React, {useState, useEffect} from "react";


import TextField from '@mui/material/TextField';


import ArenaCard from "./ArenaCard";
import PlayerCard from "./PlayerCard";


const ArenaView = ({arena}) =>
{
    return (
        <>

        
        <ArenaCard arena={arena} />

        <PlayerCard player={arena.center} />
        <PlayerCard player={arena.winger} />
        <PlayerCard player={arena.defenseman} />
        <PlayerCard player={arena.goalie} />
        
    </>

    );
};

export default ArenaView;