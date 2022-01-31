import { Box } from "@mui/material";

import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Box bgcolor="#E8E8E8" p={2}>
        <center className="footer-font">
          © Copyright 2022 Some Cool Company, LLC
        </center>
      </Box>
    </footer>
  );
}
