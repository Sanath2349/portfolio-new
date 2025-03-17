import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { lightTheme, darkTheme } from "../theme";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import reactLogo from "../assets/react-2.svg"
import jslogo from "../assets/jsLogo.svg"
import gsapLogo from "../assets/gsap.svg"
import tailwind from "../assets/tailwind.svg"
import mui from "../assets/mui.svg"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import git from "../assets/git.svg"

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        <AppBar position="static" elevation={2}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6">Sanath Geedipally</Typography>
            <IconButton color="inherit" onClick={toggleTheme}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container>
          <Box textAlign="center" my={6}>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Frontend Developer
            </Typography>
            <Typography variant="h5" color="textSecondary" sx={{ mt: 1 }}>
              Crafting responsive, user-focused web apps with React
            </Typography>
          </Box>

          <Box my={6}>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 600, lineHeight: 1.6 }}>
              Self-taught Frontend Developer from Hyderabad, currently building
              real-world projects at Snipe Tech Pvt Ltd. Passionate about React,
              Material UI, and AI-driven solutions.
            </Typography>
          </Box>

          <Box my={6}>
            <Typography variant="h4" gutterBottom>
              Projects
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">Aidisha (In Progress)</Typography>
                    <Typography color="textSecondary">
                      AI-powered interview agent with React & Material UI
                    </Typography>
                    <Button
                      variant="outlined"
                      href="https://github.com/Sanath2349/Aidisha"
                      sx={{ mt: 2 }}
                    >
                      GitHub (Pending)
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">Landing Pages</Typography>
                    <Typography color="textSecondary">
                      Static sites for Hyderabad clients
                    </Typography>
                    <Button variant="outlined" href="#" sx={{ mt: 2 }}>
                      GitHub (Soon)
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">Task Tracker (Planned)</Typography>
                    <Typography color="textSecondary">
                      Task management app with React
                    </Typography>
                    <Button variant="outlined" href="#" sx={{ mt: 2 }}>
                      Coming Soon
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Box my={6}>
            <Typography variant="h4" gutterBottom>
              Skills
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {[
                { name: "React", src: reactLogo },
                { name: "JavaScript", src: jslogo },
                { name: "Material UI", src: mui },
                { name: "GSAP", src: gsapLogo },
                { name: "Tailwind CSS", src: tailwind },
                { name: "HTML", src: html },
                { name: "CSS", src: css },
                { name: "Git", src: git },
                
              ].map((skill) => (
                <Box
                  key={skill.name}
                  sx={{
                    textAlign: "center",
                    transition: "transform 0.2s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                >
                  <img
                    src={skill.src}
                    alt={`${skill.name} logo`}
                    height="70"
                    style={{ maxWidth: "100%", objectFit: "contain" }}
                  />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {skill.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box my={6} textAlign="center">
            <Typography variant="h4" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              sanathreddyp42@gmail.com |{" "}
              <a href="https://linkedin.com/in/sanath-reddyg">LinkedIn</a> |{" "}
              <a href="https://github.com/Sanath2349">GitHub</a>
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
