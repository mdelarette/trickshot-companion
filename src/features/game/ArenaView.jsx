import React from "react";

import Grid from '@mui/material/Grid';


import ArenaCard from "./ArenaCard";
import PlayerCard from "./PlayerCard";


const ArenaView = ({arena}) =>
{
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} lg={4} xl={12}>
                <ArenaCard arena={arena} />
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
                <PlayerCard player={arena.center} />
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
                <PlayerCard player={arena.winger} />
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
                <PlayerCard player={arena.defenseman} />
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
                <PlayerCard player={arena.goalie} />
            </Grid>
        </Grid>
    );
};

export default ArenaView;