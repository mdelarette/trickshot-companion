import { useContext, ReactNode } from "react";

import packageInfo from "../../package.json";

import { LanguageContext } from '../features/translation/Context';

import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import Box from '@mui/material/Box';
import Breakpoint from './Breakpoint';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t, i18n } = useTranslation();

  const languageContext = useContext(LanguageContext);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    languageContext?.setUserLanguage(lng);
  };

  const supportedLngs = (i18n.options.supportedLngs || []) as string[];

  return (
    <>
      <AppBar>
        <Toolbar>
          <TextField
            select
            value={i18n.resolvedLanguage}
            onChange={e => { changeLanguage(e.target.value); }}
            label={t('language_selection')}
            sx={{
              minWidth: { xs: 120, sm: 200 },
              "& .MuiInputLabel-root": { color: 'white' },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: 'rgba(255, 255, 255, 0.5)' },
                "&:hover fieldset": { borderColor: 'white' },
                "&.Mui-focused fieldset": { borderColor: 'white' },
                color: 'white'
              },
              "& .MuiSelect-icon": { color: 'white' }
            }}
            size="small"
            InputLabelProps={{
              shrink: true,
              sx: { color: 'white !important' }
            }}
          >
            {supportedLngs.filter(lng => lng !== 'cimode').map((language, index) => (
              <MenuItem key={index} value={language}>
                {language}
              </MenuItem>
            ))}
          </TextField>

          <Typography sx={{ flexGrow: 1, textAlign: 'center' }} variant="h6">
            {t('title')}
          </Typography>

          <Typography variant="h6">
            <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}>{packageInfo.name} - </Box>{packageInfo.version}  <Breakpoint />
          </Typography>
        </Toolbar>
      </AppBar>

      <Stack sx={{ mt: 8, p: { xs: 1, sm: 2 } }}>
        {children}
      </Stack>
    </>
  );
};

export default Layout;
