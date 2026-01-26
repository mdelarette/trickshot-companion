import Grid from '@mui/material/Grid';

import ArenaCard from './ArenaCard';
import PlayerCard from './PlayerCard';
import { Arena } from '../../types/data';

type ArenaViewProps = {
  arena: Arena;
}

const ArenaView = ({ arena }: ArenaViewProps) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid size={{ xs: 12, md: 6, lg: 4, xl: 12 }}>
        <ArenaCard arena={arena} />
      </Grid>
      {arena.center && (
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <PlayerCard player={arena.center} />
        </Grid>
      )}
      {arena.winger && (
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <PlayerCard player={arena.winger} />
        </Grid>
      )}
      {arena.defenseman && (
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <PlayerCard player={arena.defenseman} />
        </Grid>
      )}
      {arena.goalie && (
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <PlayerCard player={arena.goalie} />
        </Grid>
      )}
    </Grid>
  );
};

export default ArenaView;
