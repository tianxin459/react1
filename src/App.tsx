import { AppBar, Box, Button, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar } from "@mui/material";
import { Fragment, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation, NavLink } from "react-router-dom";
import style from "./App.module.scss";
import MasterDataContainer from "./container/MasterDataContainer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from "@mui/icons-material/Menu";
import Counter from "./components/Counter/Counter";
import About from "./components/About/About";
import { UserList } from "./components/UserList/UserList";

const RouterConfig = [
  { path: "/", name: "Home", component: <MasterDataContainer></MasterDataContainer> },
  { path: "/counter", name: "Counter", component: <Counter></Counter> },
  {
    path: "/about",
    name: "About",
    component: (
      <Fragment>
        <About></About>
        <Counter></Counter>
        {/* <UserList></UserList> */}
      </Fragment>
    ),
  },
  {
    path: "/user",
    name: "User",
    component: <UserList></UserList>,
  },
  { path: "/masterdata", name: "MasterData", component: <MasterDataContainer></MasterDataContainer> },
];

let App = () => {
  const [sideNav, setSideNav] = useState<boolean>(false);

  const sideNavContent = () => (
    <div style={{ width: "auto" }} role="presentation" onClick={onClickHandler} onKeyDown={onClickHandler}>
      <List>
        {RouterConfig.map((config) => (
          <ListItem key={config.path} component={NavLink} to={config.path}>
            <ListItemText primary={config.path} />
          </ListItem>
        ))}
        {/* {["/", "/masterdata", "/counter", "/about"].map((path, index) => (
          <ListItem key={path} component={NavLink} to={path}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={path} />
          </ListItem>
        ))} */}
      </List>
    </div>
  );
  const onClickHandler = () => {
    console.log("click");
    setSideNav(!sideNav);
  };

  return (
    <div className={style.App}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => onClickHandler()}>
            <MenuIcon />
          </IconButton>
          <Button onClick={() => onClickHandler()}>SideNav</Button>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Routes>
          {RouterConfig.map((config) => (
            <Route key={config.path} path={config.path} element={config.component} />
          ))}
        </Routes>
        <SwipeableDrawer anchor={"left"} open={sideNav} onClose={onClickHandler} onOpen={onClickHandler}>
          {sideNavContent()}
        </SwipeableDrawer>
      </BrowserRouter>
    </div>
  );
};

export default App;
