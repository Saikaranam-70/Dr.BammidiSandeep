// src/Layout.jsx
import React from "react";
import { Scrollbar } from "react-scrollbars-custom";

export default function Layout({ children }) {
  return (
    <Scrollbar
      style={{ height: "100vh" }}      // full viewport height
      noScrollX                        // vertical only (optional)
      trackYProps={{ className: "rsc-track-y" }}
      thumbYProps={{ className: "rsc-thumb-y" }}
      removeTracksWhenNotUsed={false}  // keep track visible
    >
      {children}
    </Scrollbar>
  );
}
