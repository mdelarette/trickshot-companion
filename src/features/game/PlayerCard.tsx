import { useContext } from 'react';

import { LanguageContext } from '../translation/Context';

import { useTranslation } from 'react-i18next';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Jauge from './Jauge';
import { Attribute, getLocalizedText } from '../../types/data';

type PlayerCardProps = {
  player: Attribute;
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  const languageContext = useContext(LanguageContext);
  const userLangage = languageContext?.userLangage ?? 'en';

  const { t } = useTranslation();

  const positionText = t(player.Position);
  const positionFontSize = (userLangage === 'en' && positionText.length > 8) ? '36px' : '48px';

  return (
    <Box
      height={2.5 * 72 * 1.2}
      width={3.5 * 72 * 1.2}
      padding={'8px'}
      sx={{
        borderRadius: 3,
        backgroundColor: 'white',
        '@media print': {
          border: '1px solid black',
          borderRadius: 0,
          backgroundColor: 'transparent',
          padding: '2px'
        }
      }}
    >
      <Box
        height={'100%'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        sx={{
          backgroundColor: 'aliceblue'
        }}
      >
        <Typography
          sx={{
            marginLeft: '40px',
            marginTop: '-16px',
            fontFamily: 'Anta, sans-serif',
            fontStyle: 'italic',
            textShadow: '2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff',
            fontSize: positionFontSize,
            color: 'blueviolet'
          }}
        >
          {positionText}
        </Typography>

        <Typography
          sx={{
            marginLeft: '100px',
            marginTop: '-16px',
            fontFamily: 'Anta, sans-serif',
          }}
        >
          {`"${player.Name}"`}
        </Typography>

        <Stack
          display={'flex'}
          direction={'row'}
          spacing={'10px'}
          justifyContent={'flex-end'}
          width={'95%'}
        >
          <Typography>{t('size')}</Typography>
          <Jauge value={player.Size} />
        </Stack>
        <Stack
          display={'flex'}
          direction={'row'}
          spacing={'10px'}
          justifyContent={'flex-end'}
          width={'95%'}
        >
          <Typography>{t('speed')}</Typography>
          <Jauge value={player.Speed} />
        </Stack>

        <Box
          margin={'0 8px 8px 8px'}
          padding={'2px'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{
            flex: 'grow',
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
            {getLocalizedText(player.Text, userLangage)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PlayerCard;
