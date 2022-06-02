import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, paddingLeft: "100px", textAlign: "center" }}
      >
        {/* <DrawerHeader /> */}
        <Typography paragraph>
          Mohamed Ayaan, a Student of PES University.The given tasks will be
          present on the pages accessible by the navbar.
          <p> The task1 -> Based on Fabric.js</p>
          <p> The task2 -> Based on Three.js</p>
        </Typography>
        <Typography paragraph>
          <p>
            <a href="The given tasks will be present on the pages accessible by the navbar.">
              Website Link:
            </a>
          </p>
        </Typography>
      </Box>
    </>
  );
}

export default Home;
