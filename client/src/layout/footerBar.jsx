import React from "react";

import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function FooterBar() {
  return (
    <Box
      sx={{
        backgroundColor: "#E5DFEA",
        display: "flex",
        justifyContent: "space-around",
        height: "auto",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <Typography className="responsive__fontsize16">
        Terms And Conditions
      </Typography>
      <Typography className="responsive__fontsize16">
        Copyright @ {new Date().getFullYear()}
      </Typography>
      <Link to="" target="_blank">
        <Typography className="responsive__fontsize16">
          Developed By @
        </Typography>
      </Link>
    </Box>
  );
}

export default FooterBar;