import classes from '../styles/MiniPlayer.module.css';
import Qimage from '../assets/images/3.jpg';

export default function MiniPlayer() {
    return (
        <div className="classes.miniPlayer} floatingBtn">
            <span className="material-icons-outlined open"> play_circle_filled </span>
            <span className="material-icons-outlined close"> close </span>
            <img src={Qimage} alt="Quiz Image" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
}