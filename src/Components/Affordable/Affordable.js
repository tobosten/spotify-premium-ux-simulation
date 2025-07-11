import "./affordable.css";
import "../../MediaScreen/App1000.css";
import "../../MediaScreen/App800900.css";

const Affordable = () => {
  return (
    <div className="affordableContainer">
      <div className="affordableContainer">
        <h2 className="affordableTitle">Affordable plans for any situation</h2>
        <span className="affordableText">
          Choose a Premium plan and listen to ad-free music without limits on
          your phone, speaker and other devices. Pay in various ways. Cancel
          anytime.
        </span>

        <div className="affordableCards">
          <div className="creditCardContainer">
            <span className="material-symbols-outlined creditCardStyle">credit_card</span>
          </div>
          <div className="creditCardContainer">
            <span className="material-symbols-outlined creditCardStyle">credit_card</span>
          </div>
          <div className="creditCardContainer">
            <span className="material-symbols-outlined creditCardStyle">credit_card</span>
          </div>
          <div className="creditCardContainer">
            <span className="material-symbols-outlined creditCardStyle">credit_card</span>
          </div>
            
        </div>

        <div className="premiumInclude">
          <h1 className="premiumIncludeTitle">All Premium plans include</h1>
          <div className="premiumIncludeList">
            <span className="includeText">
              <span className="material-symbols-outlined">check_small</span>
              <div>Ad-free music listening</div>
            </span>
            <span className="includeText">
              <span className="material-symbols-outlined">check_small</span>
              <div>Download to listen offline</div>
            </span>
            <span className="includeText">
              <span className="material-symbols-outlined">check_small</span>
              <div>Play songs in any order</div>
            </span>
            <span className="includeText">
              <span className="material-symbols-outlined">check_small</span>
              <div>High audio quality</div>
            </span>
            <span className="includeText">
              <span className="material-symbols-outlined">check_small</span>
              <div>Listen with friends in real time</div>
            </span>
            <span className="includeText">
              <span className="material-symbols-outlined">check_small</span>
              <div>Organise listening queue</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affordable;
