import { ReactNode } from "react";

import packageInfo from "../../package.json";

import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Breakpoint from './Breakpoint';
import BottomToolbar from './BottomToolbar';

type LayoutProps = {
  children: ReactNode;
  currentPage: 'arenas' | 'faceoff';
  onNavigate: (page: 'arenas' | 'faceoff') => void;
}

const Layout = ({ children, currentPage, onNavigate }: LayoutProps) => {
  const { t } = useTranslation();

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1, textAlign: 'center' }} variant="h6">
            {t('title')}
          </Typography>

          <Typography variant="h6">
            <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}>{packageInfo.name} - </Box>{packageInfo.version}  <Breakpoint />
          </Typography>
        </Toolbar>
      </AppBar>

      <Stack sx={{ mt: 8, mb: 8, p: { xs: 1, sm: 2 } }}>
        {children}
      </Stack>

      <BottomToolbar currentPage={currentPage} onNavigate={onNavigate} />
    </>
  );
};

export default Layout;
