


// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  Paper,
  ListItemIcon,
  Divider,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import classeses from '../css/FoundationStyles.module.css';
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useStyles from './HeaderStyles'
import Work from "../pages/Work";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

// IMPORTING ICONS
import MenuIcon from '@material-ui/icons/Menu';
import { AiOutlineHome ,AiOutlineFundProjectionScreen , } from "react-icons/ai";
import { RiMedalLine } from "react-icons/ri";
import { GrContactInfo } from "react-icons/gr";

// LOCAL-STYLING


function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (

    <div className={classes.root}>
      {/* <Router> */}
      <HideOnScroll {...props}>

          <AppBar className={classes.appBar} color="inherit">
            <Toolbar>
  
              <Typography variant="h4" component="p" color='inherit' className={classes.title} component={Link} to='/'>
              <i className="fab fa-atlassian"></i>
                Trigram
              </Typography>
              {isMobile ? (
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                  >
                    <MenuIcon />
                  </IconButton>

                  <Drawer
                    className={classes.drawer}
                    variant="temporary"
                    anchor="right"
                    open={open}
                    onClose={toggleDrawer}
                    transitionDuration={500}
                  >
                    {/* <div className={classes.toolbar} /> */}
                    <Divider />
                    <div className={classes.drawerWidth}>
                    <List className={classes.list} color="secondary">
                      <ListItem button onClick={toggleDrawer} component={Link} to='/'>
                      <ListItemIcon>
                      <i class="fas fa-home"></i>
                      </ListItemIcon>
                        <ListItemText primary="Home" />
                      </ListItem>
                      <ListItem button onClick={toggleDrawer} component={Link} to='/Project'>
                      <ListItemIcon>
                      <i class="fas fa-project-diagram"></i>
                        </ListItemIcon>
                        <ListItemText primary="Projects" />
                      </ListItem>
                      <ListItem button onClick={toggleDrawer} component={Link} to='/Work'>
                      <ListItemIcon>
                      <i class="fas fa-briefcase"></i>
                        </ListItemIcon>
                        <ListItemText primary="Work" />
                      </ListItem>
                      <ListItem button onClick={toggleDrawer} component={Link} to='/About'>
                      <ListItemIcon>
                      <i class="fas fa-window-restore"></i>
                        </ListItemIcon>
                        <ListItemText primary="About" />
                      </ListItem>
                      <ListItem button onClick={toggleDrawer} component={Link} to='/Contact'>
                      <ListItemIcon>
                      <i class="fas fa-address-book"></i>
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                      </ListItem>
                    </List>
                    </div>
                    <Divider />
                  </Drawer>
                </>
              ) : (
                <div style={{ marginRight: "2rem" }}>
                 <ul className={classeses.nav_list }>
        <li className={classeses.list}>
          <div className={classeses.nav_list_item}>
            <Link to='/'>home</Link>
            </div>
          </li>
          <li className={classeses.list}>
          <div className={classeses.nav_list_item}>
            <Link to='/About'>about</Link>
            </div>
          </li>
          <li className={classeses.list}>
          <div className={classeses.nav_list_item}>
            <Link to='/Project'>project</Link>
            </div>
          </li>
          <li className={classeses.list}>
          <div className={classeses.nav_list_item}>
            <Link to='/Work'>Work</Link>
            </div>
          </li>
          <li className={classeses.list}>
          <div className={classeses.nav_list_item}>
            <Link to='/Contact'>contact</Link>
            </div>
          </li>
        </ul>
                </div>
              )}
            </Toolbar>
          </AppBar>
      </HideOnScroll>


       {/* <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/Work" component={Work} />
         <Route path="/About" component={About} />
         <Route path="/Project" component={Projects} />
         <Route path="/Contact" component={Contact} />
       </Switch> */}
      {/* </Router> */}
    </div>
  );
};

export default Header;

