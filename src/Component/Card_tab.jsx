import React from "react";
import { Card, CardContent, Typography, Box, Stack } from "@mui/material";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";

// Icons
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CancelIcon from "@mui/icons-material/Cancel";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const data = [
  {
    id: 1,
    title: "Total Orders",
    value: 75,
    percentage: 3,
    icon: <ShoppingBasketIcon sx={{ fontSize: 40, color: "#4B5CFF" }} />,
    changeType: "up",
  },
  {
    id: 2,
    title: "Total Delivered",
    value: 70,
    percentage: -3,
    icon: <ShoppingBagIcon sx={{ fontSize: 40, color: "#1BC5A4" }} />,
    changeType: "down",
  },
  {
    id: 3,
    title: "Total Cancelled",
    value: 5,
    percentage: 3,
    icon: <CancelIcon sx={{ fontSize: 40, color: "#FF5C5C" }} />,
    changeType: "up",
  },
  {
    id: 4,
    title: "Total Revenue",
    value: "₹4321",
    percentage: -3,
    icon: <AttachMoneyIcon sx={{ fontSize: 40, color: "#E53E8E" }} />,
    changeType: "down",
  },
];

const DashboardCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 2,
        backgroundColor: "#121212",
      }}
    >
      {data.map((item) => (
        <Card
          key={item.id}
          sx={{
            width: 170,
            backgroundColor: "#1C1C1E",
            color: "#FFFFFF",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Stack direction="column" spacing={2} alignItems="start">
              <Box>{item.icon}</Box>
              <Box>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {item.title}
                </Typography>
                
              </Box>
            </Stack>

            <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <Typography variant="h5" fontWeight="bold">
            {item.value}
            </Typography>
            <div style={{display:"flex", alignItems:"center"}}>
              {item.changeType === "up" ? (
                <>
                  <ArrowDropUp sx={{ color: "green", fontSize: 28 }} />
                  <Typography color="green" variant="body2">
                    {item.percentage}%
                  </Typography>
                </>
              ) : (
                <>
                  <ArrowDropDown sx={{ color: "red", fontSize: 28 }} />
                  <Typography color="red" variant="body2">
                    {item.percentage}%
                  </Typography>
                </>
              )}
                </div>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default DashboardCards;
