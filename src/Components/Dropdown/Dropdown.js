import "./Dropdown.css";
import { useEffect, useState, useRef } from "react";

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const [dropBackground, setDropBackground] = useState("");
  let dropdown1 = document.getElementById("dropdown1")

  const optionValues = [
    {
      v1: "How does the Spotify Premium trial work?",
      v2: `If you’ve never had Premium before, you may be eligible for a free (or reduced rate) trial.\n\n
        For trials, you’ll still need to enter a valid payment method to sign up. We’ll use this to confirm your country or region and take payments if you want to keep Premium after the offer ends.\n\n
        We’ll send you a reminder 7 days before your trial ends. Country restrictions and Terms apply.`,
    },
    {
      v1: "How do I cancel my Premium plan?",
      v2: `You can easily cancel your Premium plan online at any time on your account page.\n\n
        Premium paid subscriptions when cancelled will run until your next billing date, after which your account will switch over to our free service.\n\n
        If you cancel during a zero-priced free trial period, you will lose access to your Premium benefits immediately and your account will switch over to our free service. Zero-priced free trials cannot be reactivated.\n\n
        You’ll still keep all your playlists and saved music, and be able to listen with ads on our free service.`,
    },
    {
      v1: "How do I cancel my Premium plan?",
      v2: `You can easily cancel your Premium plan online at any time on your account page.\n\n
        Premium paid subscriptions when cancelled will run until your next billing date, after which your account will switch over to our free service.\n\n
        If you cancel during a zero-priced free trial period, you will lose access to your Premium benefits immediately and your account will switch over to our free service. Zero-priced free trials cannot be reactivated.\n\n
        You’ll still keep all your playlists and saved music, and be able to listen with ads on our free service.`,
    },
    {
      v1: "How do I cancel my Premium plan?",
      v2: `You can easily cancel your Premium plan online at any time on your account page.\n\n
        Premium paid subscriptions when cancelled will run until your next billing date, after which your account will switch over to our free service.\n\n
        If you cancel during a zero-priced free trial period, you will lose access to your Premium benefits immediately and your account will switch over to our free service. Zero-priced free trials cannot be reactivated.\n\n
        You’ll still keep all your playlists and saved music, and be able to listen with ads on our free service.`,
    },
    {
      v1: "How do I cancel my Premium plan?",
      v2: `You can easily cancel your Premium plan online at any time on your account page.\n\n
        Premium paid subscriptions when cancelled will run until your next billing date, after which your account will switch over to our free service.\n\n
        If you cancel during a zero-priced free trial period, you will lose access to your Premium benefits immediately and your account will switch over to our free service. Zero-priced free trials cannot be reactivated.\n\n
        You’ll still keep all your playlists and saved music, and be able to listen with ads on our free service.`,
    },
    {
      v1: "How do I cancel my Premium plan?",
      v2: `You can easily cancel your Premium plan online at any time on your account page.\n\n
        Premium paid subscriptions when cancelled will run until your next billing date, after which your account will switch over to our free service.\n\n
        If you cancel during a zero-priced free trial period, you will lose access to your Premium benefits immediately and your account will switch over to our free service. Zero-priced free trials cannot be reactivated.\n\n
        You’ll still keep all your playlists and saved music, and be able to listen with ads on our free service.`,
    },
    {
      v1: "How do I cancel my Premium plan?",
      v2: `You can easily cancel your Premium plan online at any time on your account page.\n\n
        Premium paid subscriptions when cancelled will run until your next billing date, after which your account will switch over to our free service.\n\n
        If you cancel during a zero-priced free trial period, you will lose access to your Premium benefits immediately and your account will switch over to our free service. Zero-priced free trials cannot be reactivated.\n\n
        You’ll still keep all your playlists and saved music, and be able to listen with ads on our free service.`,
    },
    {
      v1: "How do I cancel my Premium plan?",
      v2: `You can easily cancel your Premium plan online at any time on your account page.\n\n
        Premium paid subscriptions when cancelled will run until your next billing date, after which your account will switch over to our free service.\n\n
        If you cancel during a zero-priced free trial period, you will lose access to your Premium benefits immediately and your account will switch over to our free service. Zero-priced free trials cannot be reactivated.\n\n
        You’ll still keep all your playlists and saved music, and be able to listen with ads on our free service.`,
    },
    
  ];

  useEffect(() => {
    if(show == true) {
      /* dropdown1.classList.add("backgroundColorGray") */
    } else {
      /* dropdown1.classList.remove("backgroundColorGray") */
    }
  }, [show])

  
  function setDropdown() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  

  function showDropdownWindow(isVisible) {

    if (isVisible) {
      return (
        <div id="dropdown1">
          
        </div>
      )
    } else {
      return <div></div>;
    }
  }

  return (
    <div className="dropdownContainer">
      <div className="dropdown1" id="dropdown1" onClick={setDropdown}>
        <div className="titleContainer">
          <div className="dropdownTitle">{optionValues[0].v1}</div>
          <div className="dropdownArrow">{">"}</div>
        </div>
        {showDropdownWindow(show)}
      </div>
    </div>
  );
};



export default Dropdown;
