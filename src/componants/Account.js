import classes from '../styles/Account.module.css';
// import { Link } from 'react-router-dom';

export default function Account() {
    return (
        <div className={classes.account}>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <a href="signup.html">Signup</a>
            <a href="login.html">Login</a>
            {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
        </div>
    );
}