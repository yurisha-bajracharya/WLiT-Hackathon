import React, { useState } from "react";
import { Box, Typography, Button, List, ListItem, ListItemText, Card, CardContent } from "@mui/material";

function MusicApp() {
  // Categories array
  const categories = ["Ambient", "Meditation", "Nature"];

  // State for selected category index
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#e3f2fd", // Light background for the main app
        color: "white",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: "250px",
          backgroundColor: "#1c2a48", // Dark sidebar background
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        {/* Sidebar Navigation */}
        <List sx={{ color: "#ffffff" }}>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Search" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="My Favourites" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Music Queue" />
          </ListItem>
        </List>

        {/* Footer */}
        <Typography variant="body2" sx={{ textAlign: "center", color: "#d4edf9" }}>
          © 2023 Myndstream
        </Typography>
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          flex: 1,
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ mb: 3, color: "#1c2a48", fontWeight: "bold" }}>
          Healing Ambient (50m)
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, textAlign: "center", color: "#1c2a48" }}>
          7 Songs | 00hr:53min:12sec
        </Typography>

        {/* Play Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1e88e5",
            color: "white",
            '&:hover': { backgroundColor: "#1565c0" },
            padding: "12px 30px",
            borderRadius: "25px",
            fontSize: "1.2rem",
            mb: 5,
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Soft shadow for the button
          }}
        >
          Play
        </Button>

        {/* Slider for Categories */}
        <Box sx={{ width: "300px", mb: 5 }}>
          <Typography variant="h6" sx={{ color: "#1c2a48", mb: 2, fontWeight: 'bold' }}>
            Select Category
          </Typography>

          <Card sx={{ backgroundColor: "#fafafa", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
            <CardContent>
              <Typography gutterBottom sx={{ color: '#1c2a48', fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>
                Ambient
              </Typography>
              {/* Add category description or image if needed */}
            </CardContent>
          </Card>
        </Box>

        {/* Display Selected Category */}
        <Typography variant="h5" sx={{ mt: 5, color: "#1c2a48", fontWeight: "bold" }}>
          {`Selected Category: ${categories[categoryIndex]}`}
        </Typography>
      </Box>
    </Box>
  );
}

export default MusicApp;
