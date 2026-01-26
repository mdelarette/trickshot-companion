import { useContext } from 'react';

import { LanguageContext } from '../translation/Context';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Arena, getLocalizedText } from '../../types/data';

type ArenaCardProps = {
  arena: Arena;
}

const ArenaCard = ({ arena }: ArenaCardProps) => {
  const languageContext = useContext(LanguageContext);
  const userLangage = languageContext?.userLangage ?? 'en';

  return (
    <Box
      height={2.5 * 72 * 1.2}
      width={3.5 * 72 * 1.2}
      padding={'8px'}
      sx={{
        borderRadius: 3,
        backgroundColor: 'white'
      }}
    >
      <Box
        height={'100%'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        sx={{
          backgroundColor: 'antiquewhite'
        }}
      >
        <Typography
          component={'p'}
          padding={'0 4px 0 4px'}
          sx={{
            backgroundColor: 'black',
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Anta, sans-serif'
          }}
        >
          {arena.Name}
        </Typography>

        <Typography
          component={'p'}
          marginLeft={'8px'}
          padding={'0 2px 0 2px'}
          sx={{
            backgroundColor: 'black',
            color: 'white',
            fontFamily: 'Anta, sans-serif',
            fontSize: '12px'
          }}
        >
          {`${arena.Attribute_Center} / ${arena.Attribute_Winger} / ${arena.Attribute_Defenseman} / ${arena.Attribute_Goalie}`}
        </Typography>

        <Box
          margin={'0 8px 8px 8px'}
          padding={'2px'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{
            height: '100%',
            width: 3.5 * 72 * 1.2 - 20,
            borderRadius: 3,
            backgroundColor: 'white'
          }}
        >
          <Typography
            component={'p'}
            sx={{
              fontFamily: 'Anta, sans-serif'
            }}
          >
            {getLocalizedText(arena.Modifier, userLangage)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ArenaCard;
