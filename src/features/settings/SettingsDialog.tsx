import { useContext } from "react";
import { useTranslation } from 'react-i18next';

import { LanguageContext } from '../translation/Context';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

type SettingsDialogProps = {
  open: boolean;
  onClose: () => void;
}

const SettingsDialog = ({ open, onClose }: SettingsDialogProps) => {
  const { t, i18n } = useTranslation();
  const languageContext = useContext(LanguageContext);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    languageContext?.setUserLanguage(lng);
  };

  const supportedLngs = (i18n.options.supportedLngs || []) as string[];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {t('settings')}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <TextField
          select
          fullWidth
          value={i18n.resolvedLanguage}
          onChange={e => { changeLanguage(e.target.value); }}
          label={t('language_selection')}
          size="small"
        >
          {supportedLngs.filter(lng => lng !== 'cimode').map((language, index) => (
            <MenuItem key={index} value={language}>
              {language}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('close')}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingsDialog;
