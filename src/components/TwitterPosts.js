import React, { useState, useEffect } from 'react';
import SideBar from "./SideBar";
import { fetchOptions } from "../utils/http";


const fetchUsers = async () => {
    const base_url = `https://random-data-api.com/api/users/random_user?size=20`;
    const data = await fetch(base_url, fetchOptions());
    return data.json();
};

const destructUsers = (user) => {
    const dUsersNames = user.map((u) => {
        const { first_name, last_name } = u;
        // console.log("my user", id, first_name);
        return first_name + " " + last_name;

    });
    console.log("duser", dUsersNames);
    return dUsersNames;
};

const TwitterPosts = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        // console.log("setting users");
        fetchUsers().then((user) => {
            const displayUsers = destructUsers(user);
            setUsers(displayUsers);
            console.log("results", users);

        });
    }, []);


    return (
        <>
            <h3>heres twitter</h3>
            <SideBar />
            {users.map((fName) => (<div>{fName}</div>))}
        </>
    );

};
export default TwitterPosts;