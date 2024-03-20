import React, {useContext} from "react";

import packageInfo from "../../package.json";

import { LanguageContext } from '../features/translation/Context.js';

import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import Breakpoint from './Breakpoint'

const Layout = ({children}) =>
{
    const { t, i18n } = useTranslation();


    const {userLangage, setUserLanguage} = useContext(LanguageContext);

    console.log("{i18n.language}", i18n.language);
    console.log("{i18n.language}", i18n.languages);


    const changeLanguage = (lng) => {

        console.log("changeLanguage", lng);

        i18n.changeLanguage(lng);
      };

    return (
        <>
            <AppBar>
                <Toolbar>
                    
                <TextField
                    select
                    value={i18n.language}
                    onChange={e => {changeLanguage(e.target.value);}}
                    label={t('language_selection')}
                    sx={{marginBottom: 1, minWidth:'200px'}}
                    size="small"
                >
                    {i18n.languages.map((language, index) => (
                        <MenuItem key={index} value={language}>
                            {language}
                        </MenuItem>
                    ))}
                </TextField>


                    <Typography sx={{ flexGrow: 1 }} variant="h6">
                    {t('title')}
                    </Typography>
                    
                    <Typography variant="h6">
                            {`${packageInfo.name} - ${packageInfo.version}`}  <Breakpoint/>
                    </Typography>

                    

                </Toolbar>
            </AppBar>

            <Stack mt={5}>
                {children}
            </Stack>   

        </>

    );
};

export default Layout;