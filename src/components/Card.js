import "./card.css";
import ellipsis from '../images/icon-ellipsis.svg';

const Card = ({title, timeframes, time}) => {
    const timeChoosen = timeframes[time.toLowerCase()];

    return (
        <div className={`card card__${title.toLowerCase().replace(" ", "-")}`}>
            <div className="card__top"></div> 
            <div className="card__bottom">
                <div className="card__bottom__title-line">
                    <div className="card__bottom__title">{title}</div>
                    <img className="card__bottom__ellipsis" src={ellipsis} alt="ellipsis"></img>
                </div>
                <div className="card__bottom__time">
                    <div className="card__bottom__current-time">{timeChoosen.current}hrs</div>
                    <div className="card__bottom__previous-time">Last Week - {timeChoosen.previous}hrs</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
