import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import img from '../assets/logo.png';

export default function NavBar() {
    return (
        <>
            <AppBar position="fixed" sx={{
                backgroundColor: 'rgba(255, 255, 255)',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                //   padding: { xs: '10px', sm: '15px 30px' }
            }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={img} alt="logo" style={{ width: '80px', height: 'auto' }} />
                        <Typography
                            variant="h6"
                            sx={{
                                marginLeft: 2,
                                color: '#333',
                                fontWeight: 'bold',
                                display: { xs: 'none', sm: 'block' }
                            }}>
                            SootheSphere
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <Button sx={{ color: '#333' }}>Menu</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
}
