import classes from '../../styles/Signup.module.css';
import Illustration from '../Illustration';
import Form from '../Form';
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { Link } from 'react-router-dom';


export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className='column'>
                <Illustration />
                <Form className={classes.signup}>
                    <TextInput type="text" placeholder="Enter Your Name" icon="person" />

                    <TextInput type="email" placeholder="Enter Email" icon="alternate_email" />

                    <TextInput type="password" placeholder="Enter password" icon="lock" />

                    <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />


                    <Checkbox text="I agree to the Terms &amp; Conditions" />

                    <Button><span> Submit now </span></Button>

                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}