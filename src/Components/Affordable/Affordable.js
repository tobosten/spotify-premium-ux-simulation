

import './affordable.css';
import '../../App1000.css'

const Affordable = () => {

    return(
        <div className="affordableContainer">
            <div className="affordableContainer">
            <h2 className="affordableTitle">Affordable plans for any situation</h2>
              <span className="affordableText">Choose a Premium plan and listen to ad-free music without limits on your phone, 
                speaker and other devices. Pay in various ways. Cancel anytime.</span>

              <div className="affordableCards">
                <span> <div className='affordableCardsCard'></div> </span>
                <span> <div className='affordableCardsCard'></div> </span>
                <span> <div className='affordableCardsCard'></div> </span>
                <span></span>
              </div>
            
            <div className="premiumInclude">
              <h1 className="premiumIncludeTitle">All Premium plans include</h1>
              <div className="premiumIncludeList">
                <span>+ Ad-free music listening</span>
                <span>+ Download to listen offline</span>
                <span>+ Play songs in any order</span>
                <span>+ High audio quality</span>
                <span>+ Listen with friends in real time</span>
                <span>+ Organise listening queue</span>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Affordable;