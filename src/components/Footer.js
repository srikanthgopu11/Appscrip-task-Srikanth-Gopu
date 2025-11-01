// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
      <p>Designed for Appscrip Assignment</p>
    </footer>
  );
};

export default Footer;