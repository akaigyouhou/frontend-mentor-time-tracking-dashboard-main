import "./card.css";
import ellipsis from '../images/icon-ellipsis.svg';

const Card = ({title, timeframes, time}) => {
    const timeChoosen = timeframes[time.toLowerCase()];

    return (
        <section className={`card card__${title.toLowerCase().replace(" ", "-")}`}>
            <div className="card__top"></div> 
            <div className="card__bottom">
                <div className="card__bottom__left">
                    <div className="card__bottom__title">{title}</div>
                    <div className="card__bottom__current-time">{timeChoosen.current}hrs</div>
                </div>
                <div className="card__bottom__right">
                    <img className="card__bottom__ellipsis" src={ellipsis} alt="ellipsis"></img>
                    <div className="card__bottom__previous-time">Last Week - {timeChoosen.previous}hrs</div>
                </div>
            </div>
        </section>
    );
}

export default Card;
