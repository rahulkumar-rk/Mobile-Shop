import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/service">Services</Link>
      <Link to="/contact">Contact</Link>
      </div>
      <p>&copy; 2023 Your Company/Created by Rahul Kumar Patel. All rights reserved.</p>
    </footer>
  )
}

export default Footer