import "./profile.css";
import avatar from '../images/image-jeremy.png';

const profile = ({time, setTime}) => {
    const handleChooseDaily = () => {
        setTime("Daily");
    };

    const handleChooseWeekly =() => {
        setTime("Weekly");
    }

    const handleChooseMonthly = () => {
        setTime("Monthly");
    };

    return (
        <div className="profile">
            <div className="profile__top">
                <div className="profile__top__avatar-container">
                    <img className="profile__top__avatar" src={avatar} alt="avatar"></img>
                </div>
                <div className="profile__top__info">
                    <div className="profile__top__info__title">Report for</div>
                    <h1 className="profile__top__info__name">Jeremy Robson</h1>
                </div>
            </div>
            <div className="profile__bottom">
                <div className={"profile__bottom__day" + (time === "Daily" ? " profile__bottom__day_chosen" : "")} onClick={handleChooseDaily}>Daily</div>
                <div className={"profile__bottom__day" + (time === "Weekly" ? " profile__bottom__day_chosen" : "")} onClick={handleChooseWeekly}>Weekly</div>
                <div className={"profile__bottom__day" + (time === "Monthly" ? " profile__bottom__day_chosen" : "")} onClick={handleChooseMonthly}>Monthly</div>
            </div>
        </div>
    );
}

export default profile;
