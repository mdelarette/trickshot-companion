import { useTranslation } from 'react-i18next';

import packageInfo from "../../../package.json";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

type AboutDialogProps = {
  open: boolean;
  onClose: () => void;
}

const AboutDialog = ({ open, onClose }: AboutDialogProps) => {
  const { t } = useTranslation();

  const links = {
    wolffDesigna: "https://wolffdesigna.com",
    bgg: "https://boardgamegeek.com/boardgame/359612/trick-shot-second-edition",
    myludo: "https://www.myludo.fr/#!/game/trick-shot-60775",
    github: "https://github.com/mdelarette/trickshot-companion"
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {t('about')}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2}>
          <Typography variant="h5" component="div" gutterBottom>
            Trickshot Companion
          </Typography>
          <Typography variant="body2" color="text.secondary">
            v{packageInfo.version}
          </Typography>

          <Typography variant="body1">
            {t('about_description')}
          </Typography>

          <Divider />

          <Typography variant="h6">
            {t('credits')}
          </Typography>

          <Stack spacing={1}>
            <Typography variant="body2">
              <strong>{t('game_designer')}:</strong> Artyom Nichipurov
            </Typography>

            <Typography variant="body2">
              <strong>{t('artist')}:</strong> Mathieu Beaulieu
            </Typography>

            <Typography variant="body2">
              <strong>{t('publisher')}:</strong>{' '}
              <Link href={links.wolffDesigna} target="_blank" rel="noopener noreferrer">
                Wolff Designa
              </Link>
            </Typography>

            <Typography variant="body2" sx={{ mt: 1 }}>
              <strong>{t('game_references')}:</strong>
            </Typography>
            <Stack component="ul" sx={{ m: 0, pl: 3 }} spacing={0.5}>
              <li>
                <Link href={links.bgg} target="_blank" rel="noopener noreferrer">
                  BoardGameGeek
                </Link>
              </li>
              <li>
                <Link href={links.myludo} target="_blank" rel="noopener noreferrer">
                  MyLudo
                </Link>
              </li>
            </Stack>
          </Stack>

          <Divider />

          <Typography variant="body2" color="text.secondary">
            {t('open_source_notice')}{' '}
            <Link href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('close')}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AboutDialog;
