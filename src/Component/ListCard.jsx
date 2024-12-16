import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import { ChevronRight, Flag, MenuBook, Restaurant } from "@mui/icons-material";

const data = [
  { id: 1, label: "Goals", icon: <Flag sx={{ color: "#FF5733" }} /> },
  { id: 2, label: "Popular Dishes", icon: <Restaurant sx={{ color: "#334FFF" }} /> },
  { id: 3, label: "Menus", icon: <MenuBook sx={{ color: "#00C6FF" }} /> },
  { id: 1, label: "Goals", icon: <Flag sx={{ color: "#FF5733" }} /> },
  { id: 2, label: "Popular Dishes", icon: <Restaurant sx={{ color: "#334FFF" }} /> },
  { id: 3, label: "Menus", icon: <MenuBook sx={{ color: "#00C6FF" }} /> },
];

const ListCard = () => {
  return (
    <div
      style={{
        backgroundColor: "#1C1C1E",
        borderRadius: 8,
        maxWidth: "450px",
        padding: "10px",
      }}
    >
      <List>
        {data.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItem>
              {/* Icon */}
              <ListItemIcon>{item.icon}</ListItemIcon>

              {/* Text */}
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  style: { color: "#fff", fontSize: "16px" },
                }}
              />

              {/* Arrow */}
              <IconButton edge="end">
                <ChevronRight sx={{ color: "#aaa" }} />
              </IconButton>
            </ListItem>
            {/* Divider */}
            {index < data.length - 1 && (
              <Divider style={{ backgroundColor: "#444" }} />
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default ListCard;
