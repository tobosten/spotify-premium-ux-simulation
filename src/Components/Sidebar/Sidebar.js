import { useState, useEffect } from "react";
import "./Sidebar.css";
import logo from "./logo.png";
import '../../MediaScreen/AppMedia.css'

const Sidebar = ({ show }) => {
  

  /* This does not work on mobile devices when it should cover full screen. */

  function Card({ title, text }) {
    return (
      <div className="card">
        <div className="cardTitle">{title}</div>
        <div className="cardText">{text}</div>
      </div>
    );
  }

  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      {/* <img src={logo} className="logo"></img> */}

      <div className="title">Premium</div>
      <div className="cardContainer">
        <Card title="Premium Individual" text="1 account - For one person." />
        <Card
          title="Premium Duo"
          text="2 accounts - For couples under one roof."
        />
        <Card
          title="Premium Family"
          text="6 accounts - For family members under one roof."
        />
        <Card
          title="Premium Student"
          text="1 account - Discount for eligible students."
        />
      </div>

      <a href="/" className="boldLinkText">
        Support
      </a>
      <a href="/" className="boldLinkText">
        Download
      </a>

      <div className="separatorLine" />

      <div className="mediumLinkText">Sign up</div>
      <div className="mediumLinkText">Log in</div>
    </div>
  );
};

export default Sidebar;
