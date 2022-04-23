import { Box, Button, Divider, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from "@mui/material";
import { Fragment, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation, NavLink } from "react-router-dom";
import style from "./App.module.scss";
import MasterDataContainer from "./container/MasterDataContainer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const About = () => {
  // 使用 hook
  const location = useLocation();
  const { pathname } = location;

  return (
    <Fragment>
      <div>router {pathname}</div>
    </Fragment>
  );
};

let App = () => {
  const [sideNav, setSideNav] = useState<boolean>(false);

  const sideNavContent = () => (
    <div style={{ width: "auto" }} role="presentation" onClick={onClickHandler} onKeyDown={onClickHandler}>
      <List>
        {["/", "/masterdata", "/about"].map((path, index) => (
          <ListItem key={path} component={NavLink} to={path}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={path} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const onClickHandler = () => {
    console.log("click");
    setSideNav(!sideNav);
  };

  return (
    <div className={style.App}>
      <Button onClick={() => onClickHandler()}>SideNav</Button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterDataContainer />} />
          <Route path="/masterdata" element={<MasterDataContainer />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <SwipeableDrawer anchor={"left"} open={sideNav} onClose={onClickHandler} onOpen={onClickHandler}>
          {sideNavContent()}
        </SwipeableDrawer>
      </BrowserRouter>
    </div>
  );
};

export default App;
