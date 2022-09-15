import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Drawer, Grid } from "@mui/material";
import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import { CLIENT_MANAGE, TEST_MANAGE } from "../enums/menuList";
import { useRecoilState } from "recoil";
import { isNavOpen } from "../App";

const useStyles = makeStyles({
  drawer: {
    position: "relative",
    width: 200,
    "& .MuiBackdrop-root": {
      display: "none",
    },
    "& .MuiDrawer-paper": {
      width: 200,
      position: "absolute",
      height: (props) => props.height,
    },
  },
});

export default function Nav() {
  const classes = useStyles({ height: "100vh" });
  const [isOpen, setIsOpen] = useRecoilState(isNavOpen);

  const list = () => {
    return (
      <>
        <Box sx={{ width: 200, background: "white" }}>
          <List>
            {CLIENT_MANAGE.map((item) => (
              <ListItem disablePadding key={item.key}>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.value} />
                </ListItemButton>
              </ListItem>
              //   </Box>
            ))}
          </List>
          <Divider />

          <List>
            {TEST_MANAGE.map((item) => (
              <ListItem disablePadding key={item.key}>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.value} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </>
    );
  };

  return (
    <>
      {isOpen && (
        <>
          <Drawer
            anchor={"left"}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className={classes.drawer}
            variant="persistent"
          >
            {list()}
          </Drawer>
        </>
      )}
    </>
  );
}
