import {
    ListItem,
    ListItemText,
    Typography
  } from "@mui/material";
  import React from "react";
  
  function ListItemUser({ color, primaryText, secondaryText }) {
    return (
      <ListItem >
        <ListItemText 
          primary={<Typography color={color} variant="h6">{primaryText}</Typography>}
          secondary={<Typography variant="p">year: {secondaryText}</Typography>}
        />
      </ListItem>
    );
  }
  
  export default ListItemUser;
  
