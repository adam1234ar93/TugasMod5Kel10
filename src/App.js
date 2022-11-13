import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button, IconButton, List, Paper, Typography } from "@mui/material";
import ListItemUser from "./components/ListItemUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { AddCircle } from "@mui/icons-material";
import AddUserDialog from "./components/AddUserDialog";

const BASE_API_URL = `https://reqres.in/api`;

function App() {
  const [users, setUsers] = useState([]);
  const [newUsers, setNewUsers] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [page, setPage] = useState(1);

  console.log(users);

  useEffect(() => {
    async function getUsers() {
      await axios
        .get(`${BASE_API_URL}/articles`, {
          params: {
            page: page
          }
        })
        .then((res) => {
          const responseData = res.data.data;
          setUsers(responseData);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }

    getUsers();
  }, [page]);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleDeleteUser = (userId, idx) => {
    async function delUser() {
      await axios
        .delete(`${BASE_API_URL}/articles/${userId}`)
        .then((res) => {
          console.log(userId);
          console.log(idx);
          let arr = users;
          if (idx !== -1) {
            arr.splice(idx, 1);
          }
          setUsers([...arr]);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }

    delUser();
  };

  return (
    <div className="App">
      <div className="list-container">
        <div className="list-title-wrapper">
          <Typography variant="h4">List Article</Typography>
          <IconButton onClick={openDialog}>
            <AddCircle />
          </IconButton>
        </div>
        <Paper elevation={2} style={{ maxHeight: "700px", overflow: "auto" }}>
          <List>
            {users.map((d, idx) => (
              <ListItemUser
                key={d.id}
                color={d.color}
                primaryText={`${d.name}`}
                secondaryText={`${d.year}`}
                onDelete={() => handleDeleteUser(d.id, idx)}
              />
            ))}
            {newUsers.map((d) => (
              <ListItemUser
                key={d.id}
                image={d.avatar}
                primaryText={d.name}
                secondaryText={`${d.year}`}
              />
            ))}
          </List>
          <Button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
          >
            Prev
          </Button>
          <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
        </Paper>
      </div>
      {isDialogOpen && (
        <AddUserDialog
          open={isDialogOpen}
          onClose={closeDialog}
          users={newUsers}
          setUsers={setNewUsers}
        />
      )}
    </div>
  );
}

export default App;
