import react ,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './SignIn.css';
import Footer from '../All/Footer';
import NavBar from '../All/NavBar';
import PersonalDetails from './PersonalDetails';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        display: 'flex',
        marginLeft: '30%',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
  },
}}));

export default function SignUp (props) { 

  const classes = useStyles();

  const [user,setUser] = useState("");

  const [inputs, setInputs] = useState({
    FirstName: "",
    LastName: "",
    Gender: "",
    Phone: "",
    Email: "",
})


const handleChange = input => event => {
  event.preventDefault();
    setInputs({ ...inputs, [input]: event.target.value });
}

const onSubmit = event => {
  event.preventDefault();

  console.log('here');
  let pack =  inputs;
  if(setUser !== "" )
      pack = {...pack, setUser : setUser};
  console.log(pack);
}


    return (
      <div className={'background'}>
        <NavBar />
        <div className={"signInContainer"}>
          <h1>SIGN UP</h1>
          <form className={classes.root} onSubmit={onSubmit} autoComplete="off">
          <PersonalDetails
            handleChange={handleChange}
            values={inputs}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
            style={{fontSize:'15px',fontWeight:'bold',marginLeft: '15%',marginTop:'5%',width:'60%'}}
          >
            Sign Up
        </Button>
        </form>
      </div>
      <Footer/>
      </div>
    );
  }
  
