import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
  Divider,
} from "@mui/material";

// Feedback data
const feedbackData = [
  {
    id: 1,
    name: "Ranjana",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    feedback:
      "PSI Borg transformed our operations with their smart IoT solutions. Their team's expertise and support exceeded expectations!",
  },
  {
    id: 2,
    name: "Dipali",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    feedback:
      "We loved how PSI Borg integrated IoT into our legacy systems effortlessly. Our productivity skyrocketed!",
  },
  {
    id: 3,
    name: "Rocky",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4,
    feedback:
      "PSI Borg delivered a cutting-edge IoT platform for us. Their solutions are both reliable and future-ready!",
  },
  {
    id: 4,
    name: "Rocky",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4,
    feedback:
      "PSI Borg delivered a cutting-edge IoT platform for us. Their solutions are both reliable and future-ready!",
  },
];

const FeedbackCard = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#1C1C1E",
        borderRadius: 2,
        color: "#fff",
        padding: "10px",
        maxWidth: "100%",
        margin: "10px auto",
        overflowY: "auto",
        height: "auto", // Adjust height dynamically
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          color: "#fff",
          textAlign: "center", // Center title for better presentation
          fontSize: { xs: "16px", sm: "18px" },
        }}
      >
        Customer's Feedback
      </Typography>
      {feedbackData.map((feedback, index) => (
        <Box key={feedback.id}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack for mobile, horizontal for desktop
              gap: 2,
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            {/* Avatar */}
            <Avatar
              src={feedback.avatar}
              alt={feedback.name}
              sx={{
                width: { xs: 60, sm: 50 },
                height: { xs: 60, sm: 50 },
              }}
            />

            {/* Feedback Content */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" }, // Center on mobile, left-align on desktop
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              {/* Name and Rating */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // Name and rating stacked on mobile, inline on desktop
                  alignItems: "center",
                  gap: { xs: 0.5, sm: 1 },
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: { xs: "14px", sm: "16px" },
                  }}
                >
                  {feedback.name}
                </Typography>
                <Rating value={feedback.rating} readOnly size="small" />
              </Box>

              {/* Feedback Text */}
              <Typography
                variant="body2"
                sx={{
                  color: "#ccc",
                  marginTop: 1,
                  fontSize: { xs: "12px", sm: "14px" },
                  maxWidth: { xs: "90%", sm: "100%" }, // Limit width for better readability
                }}
              >
                {feedback.feedback}
              </Typography>
            </Box>
          </CardContent>

          {/* Divider */}
          {index < feedbackData.length - 1 && (
            <Divider sx={{ backgroundColor: "#444" }} />
          )}
        </Box>
      ))}
    </Card>
  );
};

export default FeedbackCard;
