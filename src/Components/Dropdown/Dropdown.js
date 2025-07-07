import "./Dropdown.css";
import { useEffect, useState, useRef } from "react";
import optionValues from "./QuestionArray";

const Dropdown = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);

  useEffect(() => {}, []);

  function drop1(isVisible) {
    if (isVisible) {
      return (
        <div id="dropdown1">
          <div className="dropdownText backgroundColorGray">
            If you’ve never had Premium before, you may be eligible for a free
            (or reduced rate) trial.
            <br />
            <br />
            For trials, you’ll still need to enter a valid payment method to
            sign up. We’ll use this to confirm your country or region and take
            payments if you want to keep Premium after the offer ends.
            <br />
            <br />
            We’ll send you a reminder 7 days before your trial ends. Country
            restrictions and Terms apply.
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  function drop2(isVisible) {
    if (isVisible) {
        return (
          <div className="dropdownText backgroundColorGray">
            You can easily cancel your Premium plan online at any time on your
            account page.
            <br />
            <br />
            Premium paid subscriptions when cancelled will run until your next
            billing date, after which your account will switch over to our free
            service.
            <br />
            <br />
            If you cancel during a zero-priced free trial period, you will lose
            access to your Premium benefits immediately and your account will
            switch over to our free service. Zero-priced free trials cannot be
            reactivated.
            <br />
            <br />
            You’ll still keep all your playlists and saved music, and be able to
            listen with ads on our free service.
          </div>
        );
    } else {
      <div></div>;
    }
  }
  function drop3(isVisible) {
    if (isVisible) {
        return (
          <div className="dropdownText backgroundColorGray">
            Premium Duo is a plan for a couple who live together. 
            Compared with having two full-price Premium Individual accounts, 
            it’s also cheaper. We’ll ask for your address to ensure you live at the same address. 
            You can invite a member to the plan right after the purchase. Each member has their own 
            separate Premium account and can listen at the same time with their own account. 
            All saved music and playlists are their own. The other account holder cannot see what 
            you are listening to.<br/><br/>
            <a href="">Read more</a> info about Premium Duo.
          </div>
        );
    } else {
      <div></div>;
    }
  }
  function drop4(isVisible) {
    if (isVisible) {
        return (
          <div className="dropdownText backgroundColorGray">
            Premium Family is a plan for up to 6 family members who live together. 
            Compared to everyone having their own full-price Premium Individual account, 
            it’s also cheaper. We will ask for your address to ensure you live at the same address. 
            You can invite members to the plan right after the purchase. Each member has their own 
            separate Premium account and can listen at the same time with their own account. 
            All saved music and playlists are their own. Other account holders cannot see what 
            you are listening to.
            <br/>
            <br/>
            <a href="">Read more</a> info about Premium Family.
          </div>
        );
    } else {
      <div></div>;
    }
  }
  function drop5(isVisible) {
    if (isVisible) {
        return (
          <div className="dropdownText backgroundColorGray">
            If you are a student enrolled at an accredited college or university, 
            and above the age of 18, then yes. You can get Premium Student for up to 4 years. 
            Student plan holders don’t have audiobook listening time included in their Premium plan.
            <br />
            <br />
            <a href="">Read more</a> info about Premium Student.
          </div>
        );
    } else {
      <div></div>;
    }
  }
  function drop6(isVisible) {
    if (isVisible) {
        return (
          <div className="dropdownText backgroundColorGray">
            The Spotify Premium prices in Ireland are different depending on which Premium plan you 
            choose: The Spotify Premium Individual plan costs €11.99 per month, 
            the Premium Duo plan costs €16.99 per month, the Premium Family plan costs €19.99 per month, 
            the Premium Student plan costs €5.99 per month. If you’ve never had a Premium plan before, 
            you may be eligible for a free (or reduced rate) trial. Country restrictions and terms apply.
          </div>
        );
    } else {
      <div></div>;
    }
  }
  function drop7(isVisible) {
    if (isVisible) {
        return (
          <div className="dropdownText backgroundColorGray">
            With a Premium Individual plan, you now have access to 15 hours of 
            audiobook listening time per month. Unused listening hours expire at the end of 
            each month and do not carry over. The audiobook subscriber catalogue includes 
            over 250,000 titles across many genres and classics. <a href="">Learn more.</a>
          </div>
        );
    } else {
      <div></div>;
    }
  }
  function drop8(isVisible) {
    if (isVisible) {
        return (
          <div className="dropdownText backgroundColorGray">
            Duo or Family plan managers have access to 15 hours of audiobook listening time 
            every month from our <a href="">audiobook subscriber catalogue</a>. 
            Unused listening hours expire at the end of each month and do not carry over. 
            Plan members can get audiobook listening time with an <a href="">add-on</a>.
          </div>
        );
    } else {
      <div></div>;
    }
  }

  return (
    <div className="dropdownContainer">
     
      <div className="dropdown1">
        <div
          className="titleContainer"
          onClick={() => {
            setShow1(!show1);
          }}
        >
          <div className="dropdownTitle">
            How does the Spotify Premium trial work?
          </div>
          <div className="dropdownArrow">{">"}</div>
        </div>
        {drop1(show1)}
      </div>

      <div className="dropdown1">
        <div
          className="titleContainer"
          onClick={() => {
            setShow2(!show2);
          }}
        >
          <div className="dropdownTitle">How do I cancel my Premium plan?</div>
          <div className="dropdownArrow">{">"}</div>
        </div>
        {drop2(show2)}
      </div>

      <div className="dropdown1">
        <div
          className="titleContainer"
          onClick={() => {
            setShow3(!show3);
          }}
        >
          <div className="dropdownTitle">How does the Premium Duo plan work?</div>
          <div className="dropdownArrow">{">"}</div>
        </div>
        {drop3(show3)}
      </div>

      <div className="dropdown1">
        <div
          className="titleContainer"
          onClick={() => {
            setShow4(!show4);
          }}
        >
          <div className="dropdownTitle">How does the Premium Family plan work?</div>
          <div className="dropdownArrow">{">"}</div>
        </div>
        {drop4(show4)}
      </div>

      <div className="dropdown1">
        <div
          className="titleContainer"
          onClick={() => {
            setShow5(!show5);
          }}
        >
          <div className="dropdownTitle">How does the Premium Student Plan work?</div>
          <div className="dropdownArrow">{">"}</div>
        </div>
        {drop5(show5)}
      </div>

      <div className="dropdown1">
        <div
          className="titleContainer"
          onClick={() => {
            setShow6(!show6);
          }}
        >
          <div className="dropdownTitle">How much is Spotify Premium in Ireland?</div>
          <div className="dropdownArrow">{">"}</div>
        </div>
        {drop6(show6)}
      </div>

      <div className="dropdown1">
        <div
          className="titleContainer"
          onClick={() => {
            setShow7(!show7);
          }}
        >
          <div className="dropdownTitle">How does audiobook listening time work for Premium Individual?</div>
          <div className="dropdownArrow">{">"}</div>
        </div>
        {drop7(show7)}
      </div>

      <div className="dropdown1">
        <div
          className="titleContainer"
          onClick={() => {
            setShow8(!show8);
          }}
        >
          <div className="dropdownTitle">How does audiobook listening time work for Premium Duo and Family?</div>
          <div className="dropdownArrow">{">"}</div>
        </div>
        {drop8(show8)}
      </div>
    </div>
  );
};

export default Dropdown;
