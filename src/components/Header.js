import React, { useState } from "react";
import Navigation from './Navigation';

export default function Header({currentPage, handlePageChange}) {
  const melon = "#f6acad";

  const styles = {
    header: {
      background: melon,
      width: "100%",
      display: 'inline-flex',
      justifyContent: 'space-between',
      marginBottom: '30px',
    },
    h1: {
      fontWeight: 'bold',
      marginLeft: '15px',
      marginTop: '5px',
    }
  };

  return <header style={styles.header} className="text-white border-bottom border-light">
    <h1 style={styles.h1}>CINDY UNG</h1>
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>;
}
