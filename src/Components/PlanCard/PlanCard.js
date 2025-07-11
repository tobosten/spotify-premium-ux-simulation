import './PlanCard.css'



const PlanCard = ({color, priceText, priceText2, title, li1, li2, li3, li4, li5, bottomText, listAmount}) => {


    function returnListSize(amount) {
        if (amount === 3) {
            return(
                <div>
                    <li>{li1}</li>
                    <li>{li2}</li>
                    <li>{li3}</li>
                </div> 
            )
        } else {
            return(
                <div>
                    <li>{li1}</li>
                    <li>{li2}</li>
                    <li>{li3}</li>
                    <li>{li4}</li>
                    <li>{li5}</li>
                </div>
            )
        }
    }
    

// €
    return(
        <div className="plansContainer">
            <div className="plansTop">
                <div className="plansTopPrice"
                    style={{backgroundColor: color}}>{priceText}</div>
                <div className="bottomTopContainer">
                    <div className="plansPremiumText">Premium</div>
                    <h3 className="plansCardTitle" style={{color: color}}>{title}</h3>
                    <div className="plansMiddlePrice">{priceText}</div>
                    <div className="plansMiddlePrice2">{priceText2}</div>
                </div>

                <ul className="plansUl">
                    {returnListSize(listAmount)}
                </ul>

                <div className="plansButton" style={{backgroundColor: color}}>
                    <span>Try 2 months for €0</span>
                </div>

                <div className="plansBottomText">
                    {bottomText}
                    <a href=''>Terms apply.</a>
                </div>
            </div>
            

        </div>
    )
}

export default PlanCard;