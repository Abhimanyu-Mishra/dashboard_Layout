import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

const Dashboard = () => {
    return (
        <Box sx={{ backgroundColor: '#1F1F2E', color: 'white', minHeight: '100vh', p: 2 }}>
            {/* Header */}
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5">Dashboard</Typography>
                <Box>
                    {/* Add profile and notifications icons */}
                </Box>
            </Box>

            <Grid container spacing={3}>
                {/* Stats Section */}
                <Grid item xs={12} md={6} lg={3}>
                    <Paper sx={{ p: 2, backgroundColor: '#292938' }}>
                        <Typography>Total Orders</Typography>
                        <Typography variant="h4">75</Typography>
                    </Paper>
                </Grid>

                {/* Repeat similar cards for Total Delivered, Cancelled, and Revenue */}
                {/* Use breakpoints for responsiveness */}
            </Grid>

            {/* Activity Chart */}
            <Box sx={{ mt: 4 }}>
                <Paper sx={{ p: 2, backgroundColor: '#292938' }}>
                    <Typography variant="h6">Activity</Typography>
                    {/* Add Chart.js or Recharts here */}
                </Paper>
            </Box>

            {/* Recent Orders and Feedback Section */}
            <Grid container spacing={3} sx={{ mt: 3 }}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2, backgroundColor: '#292938' }}>
                        <Typography variant="h6">Recent Orders</Typography>
                        {/* Add table for recent orders */}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, backgroundColor: '#292938' }}>
                        <Typography variant="h6">Customer Feedback</Typography>
                        {/* Add customer feedback content */}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
