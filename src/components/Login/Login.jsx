import React, {
  useContext,
  useState,
  useEffect,
  useReducer,
  useRef,
} from 'react';

import AuthContext from '../../store/auth-context';
import Card from '../UI/Card/Card';
import css_Login from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const inputRefEmail = useRef();
  const inputRefPassword = useRef();

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const { isValid: isValidEmail } = emailState; // Object destructure email isValid isValid property state and put it in the alias
  const { isValid: isValidPassword } = passwordState; // Object destructure password isValid property state and put it in the alias

  useEffect(() => {
    const indentifier = setTimeout(() => {
      setFormIsValid(isValidEmail && isValidPassword);
    }, 500);
    return () => {
      clearTimeout(indentifier);
    };
  }, [isValidEmail, isValidPassword]);
  // Changed from [emailState, passwordState] to [isValidEmail, isValidPassword]
  // This is to isolate only the isValid property for each function for optimisation
  // Note this is equivalent to [emailState.isValid,passwordState.isValid]
  // useEffect(() => { () => { // code using someProperty. }}, [someObject.someProperty]);
  // useEffect(() => { () => { // code using someProperty. }}, [somePropertyDistructured]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!isValidEmail) {
      inputRefEmail.current.focus();
    } else {
      inputRefPassword.current.focus();
    }
  };

  return (
    <Card className={css_Login.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={inputRefEmail}
          id="email"
          label="e-Mail"
          type="email"
          isValid={isValidEmail}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>
        <Input
          ref={inputRefPassword}
          id="password"
          label="Password"
          type="password"
          isValid={isValidPassword}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
        <div className={css_Login.actions}>
          <Button type="submit" className={css_Login.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
