import './App.css';
import Vinyl from './Components/Vinyl/Vinyl';

// #000000
// #121212
// #242424
// #FFD2D7
// #C4B1D4
// #FFC962
// #F5BBD1

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
        <Vinyl />
        

        <div className="contentContainer">
          <div className="withoutLimitsContainer">
            <span className="withoutLimitsText1">Listen without limits.</span>
            <span className="withoutLimitsText2">Try 1 month of Premium 
              <br></br>Individual for £0
            </span>
            <span className="withoutLimitsText3">Only €11.99/month after. 
              Cancel anytime.</span>

            <div className="withoutLimitsButtons">
              <a className="getStartedButton" href='./App.js'>Get Started</a>
              <a className="viewAllPlansButton" href='./App.js'>View all plans</a>
            </div>
          <div className="termsText">
            €0 for 1 month, then €11.99 per month after. 
            Offer only available if you haven’t tried Premium before.
            <a className="termsTextLink" href='./App.js'>Terms apply.</a>
          </div>
          </div>
        </div>
        


    </div>
  );
}

export default App;
