import "./main.css";
import avatar from '../images/image-jeremy.png';

const Main = ({time, setTime}) => {
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
        <main className="main">
            <div className="main__top">
                <div className="main__top__avatar-container">
                    <img className="main__top__avatar" src={avatar} alt="avatar"></img>
                </div>
                <div className="main__top__profile">
                    <div className="main__top__profile__title">Report for</div>
                    <h1 className="main__top__profile__name">Jeremy Robson</h1>
                </div>
            </div>
            <div className="main__bottom">
                <div className={"main__bottom__day" + (time === "Daily" ? " main__bottom__day_chosen" : "")} onClick={handleChooseDaily}>Daily</div>
                <div className={"main__bottom__day" + (time === "Weekly" ? " main__bottom__day_chosen" : "")} onClick={handleChooseWeekly}>Weekly</div>
                <div className={"main__bottom__day" + (time === "Monthly" ? " main__bottom__day_chosen" : "")} onClick={handleChooseMonthly}>Monthly</div>
            </div>
        </main>
    );
}

export default Main;
