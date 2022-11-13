import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const BASE_API_URL = `https://reqres.in/api`;

function AddUserDialog({ open, onClose, users, setUsers }) {

  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add article</DialogTitle>
      <DialogContent
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          padding: "8px 20px"
        }}
      >
        <TextField
          name="name"
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          name="year"
          label="Year"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddUserDialog;
