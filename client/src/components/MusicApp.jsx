import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Button,
  Slider,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import { Menu as MenuIcon, PlayArrow, SkipNext, SkipPrevious, Home, Search, Favorite, PlaylistPlay } from "@mui/icons-material";

const categories = ["White Noise", "Rain", "Forest", "Ocean Waves", "Ambient"];

function MusicApp() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#d4edf9",
        height: "100%",
        color: "#black",
        padding: 2,
        // borderTopRightRadius: "20px",
        boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
        
      }}
    >
      <List>
        {[
          { text: "Home", icon: <Home /> },
          { text: "Search", icon: <Search /> },
          { text: "My Favorites", icon: <Favorite /> },
          { text: "Playlists", icon: <PlaylistPlay /> },
        ].map((item, index) => (
          <ListItem button key={index} sx={{ "&:hover": { backgroundColor: "white", borderRadius: "10px" } }}>
            {item.icon}
            <ListItemText
              primary={item.text}
              sx={{ color: "#black", fontFamily: "Poppins, sans-serif", marginLeft: "15px" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f7f8fc" }}>
       <Toolbar>
          {/* Menu Icon for Drawer */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
     
        </Toolbar>
      {/* Drawer for smaller screens */}
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: { xs: "column", md: "row" },
          p: { xs: 2, md: 4 },
          gap: { xs: 2, md: 4 },
        }}
      >
        {/* Sidebar for larger screens */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "250px",
            // backgroundColor: "#1e1f26",
            // borderRadius: "20px",
            // padding: "20px",
            // color: "black",
            // boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {drawerContent}
        </Box>

        {/* Main Sound Section */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            p: { xs: 3, md: 5 },
            textAlign: "center",
            
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontFamily: "Poppins, serif",
              color: "#1c2a48",
              fontWeight: 600,
              letterSpacing: 1.2,
            }}
          >
            {categories[categoryIndex]} Sounds
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "#616161", fontSize: "1rem" }}>
            7 Tracks | 00hr:53min:12sec
          </Typography>

          {/* Play Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1e88e5",
              color: "black",
              padding: "12px 24px",
              borderRadius: "30px",
              fontSize: "1.1rem",
              mb: 4,
              fontFamily: "Poppins, sans-serif",
              '&:hover': { backgroundColor: "#1565c0" },
            }}
          >
            Play
          </Button>

          {/* Category Cards */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, overflowX: "auto", mb: 4 }}>
            {categories.map((category, index) => (
              <Card
                key={index}
                sx={{
                  width: "180px",
                  backgroundColor: categoryIndex === index ? "#1e88e5" : "#f0f4f8",
                  color: categoryIndex === index ? "black" : "#1c2a48",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  '&:hover': { boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" },
                }}
                onClick={() => setCategoryIndex(index)}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "center", fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}
                  >
                    {category}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Typography variant="h5" sx={{ color: "#1c2a48", fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>
            Selected Category: {categories[categoryIndex]}
          </Typography>
        </Box>
      </Box>

      {/* Bottom Player */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#d4edf9",
          color: "black",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Now Playing: {categories[categoryIndex]} Sound</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ color: "black" }}>
            <SkipPrevious />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PlayArrow />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <SkipNext />
          </IconButton>
        </Box>
        <Box sx={{ width: "150px" }}>
          <Slider defaultValue={30} sx={{ color: "black" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default MusicApp;
