import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  CircularProgress,
} from "@mui/material";
import { ArrowDropUp } from "@mui/icons-material";

const NetProfitCard = () => {
  const netProfit = 6759.25; // Net profit value
  const percentageChange = 3; // Percentage change
  const goalCompletion = 70; // Goal percentage for circular progress

  return (
    <Card
      sx={{
        backgroundColor: "#1C1C1E",
        color: "#FFFFFF",
        borderRadius: 2,
        maxWidth: "450px",
        boxShadow: 3,
        marginTop:" 15px",
        maxHeight: "173px"
      }}
    >
      <CardContent >
        {/* Header */}
        <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
          Net Profit
        </Typography>

        {/* Profit Value and Change */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h5" fontWeight="bold">
            ₹{netProfit.toFixed(2)}
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <ArrowDropUp sx={{ color: "green", fontSize: 18 }} />
              <Typography color="green" variant="body2">
                {percentageChange}%
              </Typography>
            </Box>
          </Box>

          {/* Circular Progress Bar */}
          <Box position="relative" display="inline-flex">
            <CircularProgress
              variant="determinate"
              value={goalCompletion}
              size={80}
              thickness={5}
              sx={{ color: "#4B8BFF" }}
            />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="body2" color="#FFFFFF">
                {goalCompletion}%
              </Typography>
            </Box>
          </Box>
        </Stack>

        {/* Footer Note */}
        <Typography variant="caption" sx={{ mb: -16, opacity: 0.6 }}>
          The values here have been rounded off.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NetProfitCard;
