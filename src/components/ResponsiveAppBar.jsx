import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ThemeContext from "../ThemeContext";
import ResumePDF from "./ResumePDF";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const pages = ["Home", "Projects", "Resume", "Contact"];

const CustomizedButton = styled(Button)(({ theme, currentPage }) => ({
  "&:before": {
    content: '""',
    position: "absolute",
    width: currentPage ? "80%" : "0",
    height: "4px",
    bottom: "2px",
    left: "50%",
    transform: "translate(-50%)",
    backgroundColor: theme.palette.secondary.main,
    transformOrigin: "center",
    visibility: currentPage ? "visible" : "hidden",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover:before": {
    visibility: "visible",
    width: "80%",
  },
}));

function ResponsiveAppBar({ currentPage, buttonAnimation }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { mode, setMode } = React.useContext(ThemeContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleTheme = () => {
    if (buttonAnimation !== undefined) {
      buttonAnimation();
    }
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const icon = mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />;
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "primary.main", color: "#f5f7fa" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 3,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DABAS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) =>
                page !== "Resume" ? (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      to={`/${page.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ) : (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <ResumePDF resumeLink="/portfolio/sdabas_resume.pdf">
                      {page}
                    </ResumePDF>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 3,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DABAS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) =>
              page !== "Resume" ? (
                <Link
                  key={page}
                  to={`/${page.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <CustomizedButton
                    key={page}
                    currentPage={currentPage === page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "#f5f7fa", display: "block" }}
                  >
                    {page}
                  </CustomizedButton>
                </Link>
              ) : (
                <CustomizedButton
                  key={page}
                  currentPage={currentPage === page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#f5f7fa", display: "block" }}
                >
                  <ResumePDF resumeLink="/portfolio/sdabas_resume.pdf">
                    {page}
                  </ResumePDF>
                </CustomizedButton>
              )
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton color="inherit" onClick={toggleTheme}>
              {icon}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
