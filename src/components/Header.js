import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = { Home: "/", About: "/about", Projects: "/projects" };

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ 
      textAlign: "center",
      
      }}>
      <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "center", flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <span style={{color:'#fce057' }}>const </span>
            <span style={{color:'#fd87e0' }}>webDev</span>
            <span style={{color:'#bebebf' }}> = </span>
            <span style={{color:'#f58f34' }}> "Jessie Zollinger"</span>
          </Typography>
      <Divider />
      <List>
        {Object.entries(navItems).map(([label, url]) => (
          <Link to={url}>
            <ListItem key={label} disablePadding>
              <ListItemButton sx={{ textAlign: "center", color: '#f2f1f3' }}>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ 
      display: "flex"
      }}>
      <AppBar component="nav" sx={{
        background: "#252335"
      }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "left", flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <span style={{color:'#fce057' }}>const </span>
            <span style={{color:'#fd87e0' }}>webDev</span>
            <span style={{color:'#bebebf' }}> = </span>
            <span style={{color:'#f58f34' }}> "Jessie Zollinger"</span>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {Object.entries(navItems).map(([label, url]) => (
              <Link to={url}>
                <Button key={label} sx={{ color: "#bebebf" }}>
                  {label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#2a283d",
              color: '#bebebf'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
// import { AppBar, Toolbar, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

// function Header(props) {
//   //inline style for the nav tag
//   // const navStyle = {
//   //   display: "flex",
//   //   justifyContent: "space-around",
//   //   border: "3px solid black",
//   //   padding: "8px",
//   //   width: "90%",
//   //   margin: "auto",
//   // };

//   return (
//     <AppBar>
//       <Toolbar>
//         <Typography variant="h1">My Portfolio Page</Typography>
//         <nav style={navStyle}>
//           <Link to="/">
//             <div>HOME</div>
//           </Link>
//           <Link to="/about">
//             <div>ABOUT</div>
//           </Link>
//           <Link to="/projects">
//             <div>PROJECTS</div>
//           </Link>
//         </nav>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;
