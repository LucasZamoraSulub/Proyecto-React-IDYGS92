import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StarIcon from "@mui/icons-material/Star";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import useMediaQuery from "@mui/material/useMediaQuery";
import Populares from "./Populares"
import Novedades from "./Novedades";
import Ofertas from "./Ofertas";
import Categorias from './Categorias';
import logo from "../../img//Header/icon_genshin.png";
import Avatar from "../../img//Header/icon_perfil.jpg";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#1D1D22", 
  color: "#FFFFFF", 
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: "#1D1D22", // Change background color
  color: "#FFFFFF", // Optionally change text color
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#1D1D22", // Change background color
  color: "#FFFFFF", // Optionally change text color
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 3,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: isSmallScreen ? "30px" : "40px",
              marginRight: "10px",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            fontFamily="Istok Web"
            sx={{ fontSize: isSmallScreen ? "20px" : "24px" }}
          >
            GameNexus
          </Typography>
          <div style={{ flexGrow: 1 }} />{" "}
          {/* Esto empujará los íconos hacia la derecha */}
          <IconButton color="inherit">
            <FavoriteIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <img
              src={Avatar}
              alt="Profile"
              style={{
                width: isSmallScreen ? "30px" : "40px",
                height: isSmallScreen ? "30px" : "40px",
                borderRadius: "50%",
                marginLeft: "5px",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: "#FFFFFF" }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: "Dashboard", icon: <DashboardIcon /> },
            { text: "Populares", icon: <StarIcon /> },
            { text: "Novedades", icon: <NewReleasesIcon /> },
            { text: "Ofertas", icon: <LocalOfferIcon /> },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#FFFFFF", 
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // p: 3,
          // maxWidth: open ? `calc(100vw - ${drawerWidth}px)` : "100vw",
          // maxWidth: `calc(95vw - ${drawerWidth}px)`,
          margin: "0 auto",
          // transition: "max-width 0.3s ease-in-out",
          overflowX: "hidden",
        }}
        // <Box
        // component="main"
        // sx={{
        //   flexGrow: 1,
        //   p: 3,
        //   maxWidth: `calc(100vw - ${drawerWidth}px)`,
        //   margin: "0 auto",
        //   overflowX: "hidden", // Para ocultar la barra de desplazamiento horizontal
        // }}
      >
        <DrawerHeader />
        <Populares />
        <Novedades/>
        <Ofertas/>
        <Categorias/>
      </Box>
    </Box>
  );
}
