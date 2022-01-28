import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

import React, { useState } from 'react';

const SideBar = () => {
    const [toggle, setToggle] = useState(false);
    const setDrawerToggle = () => {
        if (toggle === false) {
            setToggle(true);
        } else {
            setToggle(false);
        }
    };
    return (
        <div className="twitterSidebar">
            <Button variant={"outlined"} onClick={() => setDrawerToggle()}>
                tweet
            </Button>
            <Drawer open={toggle} anchor={"left"}>
                <List>
                    {['Inbox', 'New Tweet', 'Explore', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <ListItem button>
                    <ListItemIcon>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Delete"} />
                </ListItem>
                <ListItem button onClick={() => setDrawerToggle()}>
                    <ListItemIcon>
                        <CloseIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Close"} />
                </ListItem>
            </Drawer>
        </div>
    );
};
export default SideBar;