import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  MenuItem,
  Select,
  Box,
} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "5", value: 4000 },
  { name: "7", value: 10000 },
  { name: "9", value: 3000 },
  { name: "11", value: 5000 },
  { name: "13", value: 6000 },
  { name: "15", value: 2000 },
  { name: "17", value: 7000 },
  { name: "19", value: 10000 },
  { name: "21", value: 15000 },
  { name: "23", value: 8000 },
  { name: "25", value: 10000 },
  { name: "27", value: 7000 },
];

const ActivityChart = () => {
  const [range, setRange] = useState("Weekly");

  return (
    <Card
      sx={{
        backgroundColor: "#1C1C1E",
        color: "#FFFFFF",
        borderRadius: 2,
        boxShadow: 3,
        padding: 2,
      }}
    >
      <CardContent>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Activity</Typography>
          <Select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            size="small"
            sx={{
              color: "#FFFFFF",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#555",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#888",
              },
              "& .MuiSvgIcon-root": { color: "#FFFFFF" },
            }}
          >
            <MenuItem value="Weekly">Weekly</MenuItem>
            <MenuItem value="Monthly">Monthly</MenuItem>
          </Select>
        </Box>

        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} margin={{ top: 10, right: 20, left: -20, bottom: 5 }}>
            <XAxis dataKey="name" tick={{ fill: "#FFFFFF" }} />
            <YAxis tick={{ fill: "#FFFFFF" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#333", color: "#FFF", borderRadius: "8px" }}
              cursor={{ fill: "rgba(75, 139, 255, 0.2)" }}
            />
            <Bar dataKey="value" fill="#4B8BFF" barSize={20} radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
