import React, {useState, useEffect, useContext} from "react";

import { LanguageContext } from '../translation/Context.js';

import Typography from '@mui/material/Typography';


import Box from '@mui/material/Box';

// 2.5”x3.5”, or 63.5×88.9mm
// https://www.w3.org/Style/Examples/007/units.en.html
// 1'' ~ 72pt

const ArenaCard = ({arena}) =>
{
    const userLangage = useContext(LanguageContext);

    console.log('ArenaCard', userLangage);

    return (

        <>

            <Box             
                height={2.5*72*1.2 }
                width={3.5*72*1.2}
                padding={'8px'}
                sx={{
                    borderRadius: 3,
                    backgroundColor:'white'
                }}
            >
                <Box             
                    height={'100%'}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'flex-start'}
                    sx={{
                        backgroundColor:'antiquewhite'
                    }}
                >

                    <Typography
                        component={'p'}
                        padding={'0 4px 0 4px'}
                        sx={{
                            backgroundColor:'black',
                            color:'white',
                            fontWeight:'bold',
                            fontFamily: 'Anta, sans-serif'
                        }}
                    >
                        {arena.Name}
                    </Typography>


                    <Typography
                        component={'p'}
                        marginLeft={'8px'}
                        padding={'0 2px 0 2px'}
                        sx={{
                            backgroundColor:'black',
                            color:'white',
                            fontFamily: 'Anta, sans-serif',
                            fontSize:'12px'
                        }}
                    >
                        {`${arena.Attribute_Center} / ${arena.Attribute_Winger} / ${arena.Attribute_Defenseman} / ${arena.Attribute_Goalie}`}
                    </Typography>

                    <Box             
                        margin={'0 8px 8px 8px'}
                        padding={'2px'}
                        display={'flex'}
                        alignItems={'center'}
                        sx={{
                            height:'100%',
                            borderRadius: 3,
                            backgroundColor:'white'
                        }}
                    >
                        <Typography
                            component={'p'}
                            sx={{
                                fontFamily: 'Anta, sans-serif'
                            }}
                        >
                            {arena.Modifier}
                        </Typography>                    
                    </Box>
                    
                    
                </Box>
                
                
                
            </Box>

        </>

    );
};

export default ArenaCard;