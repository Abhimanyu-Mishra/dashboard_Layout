import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  Chip,
} from "@mui/material";

// Data for the table
const rows = [
  { 
    id: 1, 
    customer: "Akanksha", 
    avatar: "https://i.pravatar.cc/150?img=1", 
    orderNo: "0000001", 
    amount: "₹111", 
    status: "Delivered" 
  },
  { 
    id: 2, 
    customer: "Rohan", 
    avatar: "https://i.pravatar.cc/150?img=2", 
    orderNo: "0000002", 
    amount: "₹12121", 
    status: "Delivered" 
  },
  { 
    id: 3, 
    customer: "Mayank", 
    avatar: "https://i.pravatar.cc/150?img=3", 
    orderNo: "0000003", 
    amount: "₹123", 
    status: "Cancelled" 
  },
  { 
    id: 4, 
    customer: "Abhimanyu", 
    avatar: "https://i.pravatar.cc/150?img=4", 
    orderNo: "0000004", 
    amount: "₹100", 
    status: "Pending" 
  },
  { 
    id: 5, 
    customer: "Rachna", 
    avatar: "https://i.pravatar.cc/150?img=5", 
    orderNo: "0000005", 
    amount: "₹900", 
    status: "Delivered" 
  },
  { 
    id: 6, 
    customer: "Sanjana", 
    avatar: "https://i.pravatar.cc/150?img=6", 
    orderNo: "0000006", 
    amount: "₹111", 
    status: "Delivered" 
  },
  { 
    id: 7, 
    customer: "Sanjana", 
    avatar: "https://i.pravatar.cc/150?img=6", 
    orderNo: "0000006", 
    amount: "₹111", 
    status: "Delivered" 
  },
 
];

const statusColors = {
  Delivered: "success",
  Cancelled: "error",
  Pending: "warning",
};

const RecentOrders = () => {
  return (
    <Paper
      sx={{
        backgroundColor: "#1C1C1E",
        color: "#fff",
        borderRadius: 2,
        padding: 2,
        width: "100%",
        overflow: "hidden",
      }}
      elevation={3}
    >
      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
        Recent Orders
      </Typography>
      <TableContainer>
        <Table>
          {/* Table Header */}
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#aaa" }}>Customer</TableCell>
              <TableCell sx={{ color: "#aaa" }}>Order No.</TableCell>
              <TableCell sx={{ color: "#aaa" }}>Amount</TableCell>
              <TableCell sx={{ color: "#aaa" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          {/* Table Body */}
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                {/* Customer with Avatar */}
                <TableCell>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar src={row.avatar} alt={row.customer} sx={{ marginRight: 1 }} />
                    <Typography sx={{ color: "#fff" }}>{row.customer}</Typography>
                  </div>
                </TableCell>
                {/* Order Number */}
                <TableCell sx={{ color: "#fff" }}>{row.orderNo}</TableCell>
                {/* Amount */}
                <TableCell sx={{ color: "#fff" }}>{row.amount}</TableCell>
                {/* Status with Chip */}
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusColors[row.status] || "default"}
                    variant="filled"
                    sx={{
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RecentOrders;
