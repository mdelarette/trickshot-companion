import React, {useState, useEffect} from "react";


import Typography from '@mui/material/Typography';


import Box from '@mui/material/Box';

// 2.5”x3.5”, or 63.5×88.9mm
// https://www.w3.org/Style/Examples/007/units.en.html
// 1'' ~ 72pt

const ArenaCard = ({arena}) =>
{
    return (

        <>

            <Box             
                height={180}
                width={252}
                display="inline-block"
                sx={{
                    borderRadius: 3,
                    backgroundColor:'antiquewhite'
                }}
            >

                <Typography>{arena.Name}</Typography>
                <Typography>{arena.Modifier}</Typography>
                
                
                
            </Box>

        </>

    );
};

export default ArenaCard;