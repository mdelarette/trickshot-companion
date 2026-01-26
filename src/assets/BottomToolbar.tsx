import { useState } from "react";
import { useTranslation } from 'react-i18next';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

import SettingsIcon from '@mui/icons-material/Settings';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import IceSkatingIcon from '@mui/icons-material/IceSkating';

import SettingsDialog from '../features/settings/SettingsDialog';

type BottomToolbarProps = {
  currentPage: 'arenas' | 'faceoff';
  onNavigate: (page: 'arenas' | 'faceoff') => void;
}

const BottomToolbar = ({ currentPage, onNavigate }: BottomToolbarProps) => {
  const { t } = useTranslation();
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar sx={{ justifyContent: 'center', gap: 4 }}>
          <Tooltip title={t('arenas')}>
            <IconButton
              color={currentPage === 'arenas' ? 'inherit' : 'default'}
              onClick={() => onNavigate('arenas')}
              sx={{
                bgcolor: currentPage === 'arenas' ? 'rgba(255,255,255,0.2)' : 'transparent',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
              }}
            >
              <IceSkatingIcon sx={{ color: 'white' }} />
            </IconButton>
          </Tooltip>

          <Tooltip title={t('faceoff')}>
            <IconButton
              color={currentPage === 'faceoff' ? 'inherit' : 'default'}
              onClick={() => onNavigate('faceoff')}
              sx={{
                bgcolor: currentPage === 'faceoff' ? 'rgba(255,255,255,0.2)' : 'transparent',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
              }}
            >
              <SportsHockeyIcon sx={{ color: 'white' }} />
            </IconButton>
          </Tooltip>

          <Box sx={{ flexGrow: 1 }} />

          <Tooltip title={t('settings')}>
            <IconButton
              onClick={() => setSettingsOpen(true)}
              sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}
            >
              <SettingsIcon sx={{ color: 'white' }} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <SettingsDialog open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
};

export default BottomToolbar;
