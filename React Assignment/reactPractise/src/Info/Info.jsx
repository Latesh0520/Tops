import CityInfo from "./CityInfo";
import PersonalInfo from "./PersonalInfo";
import './Info.css';

export default function Info(){
    return (
        <div className="cardBox">
            <div className="card">
                <PersonalInfo/>
            </div>
            <div className="card">
                <CityInfo/>
            </div>
        </div>
    );
}