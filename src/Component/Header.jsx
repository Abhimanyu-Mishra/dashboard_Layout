import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, InputBase, Avatar } from '@mui/material';
import { Notifications, Search, AccountCircle } from '@mui/icons-material';

const Header = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: `calc(100% - 86px)`, // Adjust for sidebar width
                ml: `240px`,
                backgroundColor: '#1F1F2E',
            }}
        >
            <Toolbar>
                {/* Search Bar */}
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#292938',
                        borderRadius: '8px',
                        padding: '0 10px',
                        maxWidth: 400,
                    }}
                >
                    <Search sx={{ color: '#fff' }} />
                    <InputBase
                        placeholder="Search..."
                        sx={{
                            ml: 1,
                            flex: 1,
                            color: '#fff',
                        }}
                    />
                </Box>

                {/* Icons */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton color="inherit">
                        <Notifications />
                    </IconButton>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <Avatar
                        alt="User"
                        src="/path/to/avatar.jpg"
                        sx={{ ml: 2, width: 32, height: 32 }}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
