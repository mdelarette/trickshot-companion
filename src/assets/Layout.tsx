import { ReactNode, useState } from "react";

import packageInfo from "../../package.json";

import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

import Breakpoint from './Breakpoint';
import BottomToolbar from './BottomToolbar';
import AboutDialog from '../features/about/AboutDialog';

type LayoutProps = {
  children: ReactNode;
  currentPage: 'arenas' | 'faceoff' | 'export';
  onNavigate: (page: 'arenas' | 'faceoff' | 'export') => void;
}

const Layout = ({ children, currentPage, onNavigate }: LayoutProps) => {
  const { t } = useTranslation();
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1, textAlign: 'center' }} variant="h6">
            {t('title')}
          </Typography>

          <Button
            color="inherit"
            onClick={() => setAboutOpen(true)}
            size="small"
          >
            v{packageInfo.version} <Breakpoint />
          </Button>
        </Toolbar>
      </AppBar>

      <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />

      <Stack sx={{ mt: 8, mb: 8, p: { xs: 1, sm: 2 } }}>
        {children}
      </Stack>

      <BottomToolbar currentPage={currentPage} onNavigate={onNavigate} />
    </>
  );
};

export default Layout;
