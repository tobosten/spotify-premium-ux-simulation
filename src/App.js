import './App.css';
import './App1000.css';
import './Header.css';
import Vinyl from './Components/Vinyl/Vinyl';
import ExperienceDifference from './Components/ExperienceDiff/ExperienceDiff';
import Affordable from './Components/Affordable/Affordable';
import PlanCard from './Components/PlanCard/PlanCard';

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

 return (
    <div className="App">
      
      
        <header className="headerContainer">
          <div className="headerWidth">
            <div className="logoContainer">
              <a href='./App.js' className="headerTitle">Spotify</a>
              <div className="headerAnimation">
                <div className="wave1"></div>
                <div className="wave2"></div>
                <div className="wave3"></div>
              </div>
            </div>
            
            <div className="headerOptionsRight">
                <a href='./App.js'>Premium</a>
                <a href='./App.js'>Support</a>
                <a href='./App.js'>Download</a>
                <span className="downloadSignUpBorder"></span>
                <a href='./App.js'>Sign up</a>
                <a href='./App.js'>Log in</a>
            </div>
           </div>
        </header>
        {/* <Vinyl /> */}
        
        {/* Listen without limits */}
          <div className="contentContainer">
            <div className="withoutLimitsContainer">
              <span className="withoutLimitsText1">Listen without limits.</span>
              <span className="withoutLimitsText2">Try 1 month of Premium 
                <br></br>Individual for €0
              </span>
              <span className="withoutLimitsText3">Only €11.99/month after. 
                Cancel anytime.</span>

              <div className="withoutLimitsButtons">
                <a className="getStartedButton" href='./App.js'>Get Started</a>
                <a className="viewAllPlansButton" href='./App.js'>View all plans</a>
              </div>
            <div className="termsText">
              €0 for 1 month, then €11.99 per month after.<br></br>
              Offer only available if you haven’t tried Premium before.
              <a className="termsTextLink" href='./App.js'>Terms apply.</a>
            </div>

         
          </div>


          <ExperienceDifference />
          
          <Affordable />

        <div className="planCardsContainer">
          <PlanCard 
            color={"#FFD2D7"} 
            priceText={"€0 for 2 months"} priceText2={"€11.99/month after"}
            title={"Individual"}
            listAmount={3}
            li1={"1 Premium account"} li2={"Cancel anytime"}
            li3={"15 hours/month of listening time from our audiobooks subscriber catalogue"}
            bottomText={"€0 for 2 months, then €11.99 per month after." + 
              "Offer only available if you haven’t tried Premium before."}
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
            bottomText={"€0 for 1 month, then €5.99 per month after." + 
              "Offer available only to students at an accredited higher education institution" + 
              "and if you haven’t tried Premium before."}
          />
        </div>

        <div className="planCardsContainer">
          <PlanCard 
            color={"#FFC962"} 
            priceText={""} priceText2={"€16.99 / month"}
            title={"Duo"}
            listAmount={3}
            li1={"2 Premium accounts"} li2={"Cancel anytime"}
            li3={"15 hours/month of listening time from our audiobooks subscriber catalogue (plan manager only)"}
            bottomText={"For couples who reside at the same address."}
          />
          <PlanCard 
            color={"#A5BBD1"} 
            priceText={""} priceText2={"€19.99 / month"}
            title={"Family"}
            listAmount={4}
            li1={"Up to 6 Premium or Kids accounts"} 
            li2={"Control content marked as explicit"}
            li3={"Access to Spotify Kids"}
            li4={"Cancel anytime"}
            li5={"15 hours/month of listening time from our audiobooks"+
              "subscriber catalogue (plan manager only)"}
            bottomText={"For up to 6 family members residing at the same address."}
          />

        </div>
          

        </div>
    </div>
  ); 
}

export default App;
