import React from 'react';
import { Box, Typography } from '@mui/material';
import backgroundImg from './download.svg'

const WelcomeScreen = () => {
    return (
        <Box textAlign="center" p={1}>
            <Box component="figure">
                <Box
                    component="img"
                    width={{ sm: 0.9 }}
                    src={backgroundImg}
                />
            </Box>
            <Box mt={3}>
                <Typography variant="h5">
                    Add Task to get started...
                </Typography>
            </Box>
        </Box>
    );
};

export default WelcomeScreen;