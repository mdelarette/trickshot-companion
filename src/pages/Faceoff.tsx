import { useState } from "react";
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import FlipIcon from '@mui/icons-material/Flip';

const BASE = import.meta.env.BASE_URL;

const CARDS = [
  { id: 1, image: `${BASE}cards/carte_1.png` },
  { id: 2, image: `${BASE}cards/carte_2.png` },
  { id: 3, image: `${BASE}cards/carte_3.png` },
  { id: 4, image: `${BASE}cards/carte_4.png` },
  { id: 5, image: `${BASE}cards/carte_5.png` },
];

const CARD_BACK = `${BASE}cards/card_back.png`;

const Faceoff = () => {
  const { t } = useTranslation();
  const [drawnCard, setDrawnCard] = useState<typeof CARDS[0] | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [mirrored, setMirrored] = useState(false);

  const drawCard = () => {
    setIsDrawing(true);
    setRotation(0);
    setMirrored(false);

    // Animation de tirage (shuffle visuel)
    let count = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * CARDS.length);
      setDrawnCard(CARDS[randomIndex]);
      count++;

      if (count >= 10) {
        clearInterval(interval);
        setIsDrawing(false);
        // Tirage final
        const finalIndex = Math.floor(Math.random() * CARDS.length);
        setDrawnCard(CARDS[finalIndex]);
      }
    }, 100);
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 180) % 360);
  };

  const handleMirror = () => {
    setMirrored((prev) => !prev);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      p: 2
    }}>
      <Typography variant="h5" component="h1" sx={{ textAlign: 'center' }}>
        {t('faceoff')}
      </Typography>

      {/* Bouton tirer une carte avec image du dos */}
      <ButtonBase
        onClick={drawCard}
        disabled={isDrawing}
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          transition: 'transform 0.2s ease',
          transform: isDrawing ? 'scale(0.95)' : 'scale(1)',
          '&:hover': {
            transform: 'scale(1.02)',
          },
          '&:disabled': {
            opacity: 0.7,
          },
          boxShadow: 3,
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <img
            src={CARD_BACK}
            alt={t('draw_card')}
            style={{
              width: '200px',
              height: 'auto',
              display: 'block',
            }}
          />
          <Box sx={{
            position: 'absolute',
            bottom: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            bgcolor: 'rgba(0,0,0,0.7)',
            color: 'white',
            px: 2,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.9rem',
            fontWeight: 'bold',
          }}>
            {t('draw_card')}
          </Box>
        </Box>
      </ButtonBase>

      {/* Carte tirée avec boutons de transformation */}
      {drawnCard && (
        <Box sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
        }}>
          <Box sx={{
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 3,
            transition: 'transform 0.3s ease',
            transform: isDrawing ? 'scale(1.05)' : 'scale(1)',
          }}>
            <img
              src={drawnCard.image}
              alt={`Card ${drawnCard.id}`}
              style={{
                width: '280px',
                height: 'auto',
                display: 'block',
                transform: `rotate(${rotation}deg) scaleX(${mirrored ? -1 : 1})`,
                transition: 'transform 0.3s ease',
              }}
            />
          </Box>

          {/* Boutons rotation et miroir */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}>
            <IconButton
              onClick={handleRotate}
              size="small"
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
              title={t('rotate')}
            >
              <RotateLeftIcon />
            </IconButton>
            <IconButton
              onClick={handleMirror}
              size="small"
              sx={{
                bgcolor: mirrored ? 'secondary.main' : 'primary.main',
                color: 'white',
                '&:hover': { bgcolor: mirrored ? 'secondary.dark' : 'primary.dark' },
              }}
              title={t('mirror')}
            >
              <FlipIcon />
            </IconButton>
          </Box>
        </Box>
      )}

      {!drawnCard && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {t('no_card_drawn')}
        </Typography>
      )}
    </Box>
  );
};

export default Faceoff;
