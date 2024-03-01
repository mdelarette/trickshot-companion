import React from "react";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';





const Jauge = ({value}) =>
{

    let ranks = [1, 2, 3, 4];

    if(value === 5)
    {
        ranks.push(5);
    }

    return (

        <Stack
            height={20}
            width={200}
            display={'flex'}
            direction={'row'}
            spacing={value === 5 ? '10px' : '10px'}
        >
            {ranks.map(r => (

                <Box
                    key={r}
                    height={20}
                    width={value === 5 ? 31 : 40}
                    sx={{
                        backgroundColor: r<=value ? 'red' : 'white',
                        transform: 'skew(-20deg)',
                        border: 1
                    }}
                >
                </Box>
            ))}        
        </Stack>

    );
};

export default Jauge;