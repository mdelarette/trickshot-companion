import React, {useState, useEffect} from "react";


import Typography from '@mui/material/Typography';


import Box from '@mui/material/Box';



const PlayerCard = ({player}) =>
{
    return (

        <>

            <Box             
                height={180}
                width={252}
                display="inline-block"
                sx={{
                    borderRadius: 3,
                    backgroundColor:'whitesmoke'
                }}
            >

                <Typography>{player.Name}</Typography>
                <Typography>{player.Position}</Typography>
                <Typography>{player.Size}</Typography>
                <Typography>{player.Speed}</Typography>
                <Typography>{player.Text}</Typography>
                <Typography>{player.Position}</Typography>
                
                
                
            </Box>


            {player.Text_fr_FR}


        
        </>

    );
};

export default PlayerCard;