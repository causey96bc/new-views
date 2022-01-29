import React, { useState, useEffect } from 'react';
import SideBar from "./SideBar";
import { fetchOptions } from "../utils/http";
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ListItemText } from '@material-ui/core';
import { makeStyles } from '@mui/styles';

const fetchUsers = async () => {
    const base_url = `https://random-data-api.com/api/users/random_user?size=20`;
    const data = await fetch(base_url, fetchOptions());
    return data.json();
};
const destructUsers = (user) => {
    const dUsersNames = user.map((u) => {
        const { first_name, last_name } = u;
        return first_name + " " + last_name;

    });
    return dUsersNames;
};

const TwitterPosts = () => {
    const [users, setUsers] = useState();
    const useStyles = makeStyles({
        userList: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            display: "flex",
            justifyContent: "center"
        },
    });
    const classes = useStyles();
    useEffect(() => {
        fetchUsers().then((user) => {
            try {
                const displayUsers = destructUsers(user);
                return setUsers(displayUsers);
            } catch (e) {
                console.error("error message", e);
            }
        });
    }, []);


    return (
        <>
            <SideBar />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Text only
                    </Typography>
                    {users ? users.map((fName) => (
                        <List className={classes.userList}>
                            <ListItemText primary={fName}></ListItemText>
                        </List>
                    )) : <p>No users present</p>}
                </Grid>
            </Grid>;
        </>
    );
};
export default TwitterPosts;
