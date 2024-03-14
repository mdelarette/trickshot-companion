import React, {useState, useEffect} from "react";


import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Breakpoint from './Breakpoint'

const Layout = ({children}) =>
{
    const { t, i18n } = useTranslation();

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Breakpoint/>

                    {t('title')}

                </Toolbar>
            </AppBar>

            <Stack mt={5}>
                {children}
            </Stack>   

        </>

    );
};

export default Layout;