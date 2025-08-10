import "./App.css";
import "./MediaScreen/App1000.css";
import "./Header.css";
import Vinyl from "./Components/Vinyl/Vinyl";
import VinylModel from "./Components/Vinyl/VinylModel";
import ExperienceDifference from "./Components/ExperienceDiff/ExperienceDiff";
import Affordable from "./Components/Affordable/Affordable";
import PlanCard from "./Components/PlanCard/PlanCard";
import Dropdown from "./Components/Dropdown/Dropdown";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

// #000000
// #121212
// #242424
// #FFD2D7
// #C4B1D4
// #FFC962
// #F5BBD1
// #A5BBD1

// Site: https://www.spotify.com/ie/premium/

function App() {
  /* console.log("Current host:", window.location.href); */
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleResize() {
    if (window.innerWidth > 900) {
      setSidebarOpen(false)
    }
  };

  function handleScroll() {
    setSidebarOpen(false)
  }



  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll)
  }, []);

  return (
    <div className="App">
      <header className="headerContainer">
        <div className="headerWidth">
          <div className="logoContainer">
            <a href="" className="headerTitle">
              Spotify
            </a>
            <div className="headerAnimation">
              <div className="wave1"></div>
              <div className="wave2"></div>
              <div className="wave3"></div>
            </div>
          </div>

          <div className="headerOptionsRight">
            <a href="">Premium</a>
            <a href="">Support</a>
            <a href="">Download</a>
            <span className="downloadSignUpBorder"></span>
            <a href="">Sign up</a>
            <a href="">Log in</a>
          </div>

          <button
            className="headerPopupMenu"
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}
          >
            {sidebarOpen ? (
              <MdClose className="closeSymbol" />
            ) : (
              <span className="material-symbols-outlined dehazeSymbol">
                dehaze
              </span>
            )}
          </button>
        </div>
      </header>
      <Sidebar show={sidebarOpen}/>
      <Vinyl />
      <VinylModel />

      

      {/* Listen without limits */}
      <div className="contentContainer">
        <div className="withoutLimitsContainer">
          <span className="withoutLimitsText1">Listen without limits.</span>
          <span className="withoutLimitsText2">
            Try 1 month of Premium
            <br></br>Individual for €0
          </span>
          <span className="withoutLimitsText3">
            Only €11.99/month after. Cancel anytime.
          </span>

          <div className="withoutLimitsButtons">
            <a className="getStartedButton" href="">
              Get Started
            </a>
            <a className="viewAllPlansButton" href="">
              View all plans
            </a>
          </div>
          <div className="termsText">
            €0 for 1 month, then €11.99 per month after.<br></br>
            Offer only available if you haven’t tried Premium before.
            <a className="termsTextLink" href="">
              Terms apply.
            </a>
          </div>
        </div>

        <ExperienceDifference />

        <Affordable />

        <div className="planCardsContainer">
          <PlanCard
            color={"#FFD2D7"}
            priceText={"€0 for 2 months"}
            priceText2={"€11.99/month after"}
            title={"Individual"}
            listAmount={3}
            li1={"1 Premium account"}
            li2={"Cancel anytime"}
            li3={
              "15 hours/month of listening time from our audiobooks subscriber catalogue"
            }
            btnText={"Try 2 months for €0"}
            bottomText={
              "€0 for 2 months, then €11.99 per month after. " +
              "Offer only available if you haven’t tried Premium before."
            }
          />
          <PlanCard
            color={"#C4B1D4"}
            priceText={"€0 for 1 month"}
            priceText2={"€5.99/month after"}
            title={"Student"}
            listAmount={3}
            li1={"1 verified Premium account"}
            li2={"Discount for eligible students"}
            li3={"Cancel anytime"}
            btnText={"Try 1 months for €0"}
            bottomText={
              "€0 for 1 month, then €5.99 per month after. " +
              "Offer available only to students at an accredited higher education institution " +
              "and if you haven’t tried Premium before."
            }
          />
        </div>

        <div className="planCardsContainer">
          <PlanCard
            color={"#FFC962"}
            priceText={"€16.99 / month"}
            priceText2={""}
            title={"Duo"}
            listAmount={3}
            li1={"2 Premium accounts"}
            li2={"Cancel anytime"}
            li3={
              "15 hours/month of listening time from our audiobooks subscriber catalogue (plan manager only)"
            }
            btnText={"Get Premium Duo"}
            bottomText={"For couples who reside at the same address."}
          />
          <PlanCard
            color={"#A5BBD1"}
            priceText={"€19.99 / month"}
            priceText2={""}
            title={"Family"}
            listAmount={4}
            li1={"Up to 6 Premium or Kids accounts"}
            li2={"Control content marked as explicit"}
            li3={"Access to Spotify Kids"}
            li4={"Cancel anytime"}
            li5={
              "15 hours/month of listening time from our audiobooks " +
              "subscriber catalogue (plan manager only)"
            }
            btnText={"Get Premium Family"}
            bottomText={
              "For up to 6 family members residing at the same address."
            }
          />
        </div>

        <div className="questionsContainer">
          <h2>Questions?</h2>
          <div className="gotAnswersText">We’ve got answers.</div>
          <div className="gotAnswersText">
            Find more answers on our{" "}
            <a className="supportSiteA" href="">
              Support site.
            </a>
          </div>
          <Dropdown />
        </div>
      </div>

      <footer className="footerContainer">
        <div className="footerLinks">
          <div className="linkContainer linkSpotifyText">
            <div className="linkSpotifyLogo" />
            Spotify
          </div>
          <div className="linkContainer">
            <h3>Company</h3>
            <a>About</a>
            <a>Jobs</a>
            <a>For the Record</a>
          </div>
          <div className="linkContainer">
            <h3>Communities</h3>
            <a>For Artists</a>
            <a>Developers</a>
            <a>Advertising</a>
            <a>Investors</a>
            <a>Vendors</a>
          </div>
          <div className="linkContainer">
            <h3>Useful links</h3>
            <a>Support</a>
            <a>Web Player</a>
            <a>Free Mobile App</a>
          </div>
          <div className="linkContainer">
            <h3>Spotify Plans</h3>
            <a>Premium Individual</a>
            <a>Premium Duo</a>
            <a>Premium Family</a>
            <a>Premium Student</a>
            <a>Spotify Free</a>
          </div>
        </div>

        <div className="footerHandles">
          <div className="handleLogo">{/* Missing instagram icon */}</div>
          <div className="handleLogo">{/* Missing X icon */}</div>
          <div className="handleLogo">{/* Missing Facebook icon */}</div>
        </div>
        <div className="footerCountry">
          {/* <div className="footerCountryGlobe"/> */}
          <span className="material-symbols-outlined footerCountryGlobe">
            public
          </span>
          <div className="footerCountryText">Ireland</div>
        </div>
        <div className="footerBottomText">
          <a>Legal</a>
          <a>Safety & Privacy Center</a>
          <a>Privacy Policy</a>
          <a>Cookie Settings</a>
          <a>About Ads</a>
          <a>Accessibility</a>
          <div>© 2025 Spotify AB</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
