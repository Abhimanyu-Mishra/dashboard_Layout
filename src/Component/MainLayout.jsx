import React from "react";
import RecentOrders from "./Recentorder";
import { Box } from "@mui/material";
import Card_tab from "./Card_tab";
import NetProfitCard from "./NetProfitCard";
import Chart from "./Chart";
import ListCard from "./ListCard";
import FeedbackCard from "./FeedbackCard";
import "../App.css";

const MainLayout = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", minHeight: "100vh", marginTop: "-62px", marginLeft: "57px",  padding:"15px"}}>
      {/* Header */}
      <Box sx={{ marginBottom: "0.6rem", marginLeft: "1.6rem"  }}>
        <h2 style={{ color: "white",  }}>Dashboard</h2>
      </Box>

      {/* Responsive Layout */}
      <div className="main_div_arrange">
        <Card_tab />
        <NetProfitCard />
      </div>
      <br/>

      <div className="main_div_arrange">
        <Chart />
        <ListCard />
      </div>
      <br/>


      <div className="main_div_arrange">
        <RecentOrders />
        <FeedbackCard />
      </div>
      <br/>
    </Box>
  );
};

export default MainLayout;
