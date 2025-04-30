
import './Login.css';
import {useSelector, useDispatch} from 'react-redux'
import {useState} from "react";
import {userNameValidation, userPasswordValidation} from "../../Reducers/reducer";

import {Link} from "react-router-dom";

function Login() {

  const userName = useSelector(state => state.form.username)
  const password = useSelector(state => state.form.password)
    const userNameErrorMessage = useSelector(state => state.form.userNameErrorMessage)
    const passwordErrorMessage = useSelector(state => state.form.passwordErrorMessage)
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState('')
  const[userPassword, setUserPassword] = useState('')
    const [touched, setTouched] = useState({username: false, password: false})


  const userNameHandleChange = (event) => {
    setUserInput(event.target.value)


  }

  const onBlurUserNameHandleChange = (event) => {
      dispatch(userNameValidation(event.target.value))
      setTouched((prev) =>({...prev, username: true}))
  }

  const passwordHandleChange = (event) => {
    setUserPassword(event.target.value)

  }
  const onBlurPasswordHandleChange = (event) =>{
      dispatch(userPasswordValidation(event.target.value))
      setTouched((prev) => ({ ...prev, password: true }))
  }

    const isFormValid =
        touched.username &&
        touched.password &&
        !userNameErrorMessage &&
        !passwordErrorMessage;

  return(
      <div className="App">
      <form className="form-container" >
          <h1> Login Form</h1>
        <div >
        <label>UserName</label>
        <input type ="text"
               value = {userInput}
               onChange={userNameHandleChange}
               onBlur = {onBlurUserNameHandleChange}
        />
        </div>
          {userNameErrorMessage && <p>{userNameErrorMessage}</p>}
        <div>
        <label>Password</label>
        <input type ="password"
               value = {userPassword}
               onChange={passwordHandleChange}
               onBlur = {onBlurPasswordHandleChange}
        />
        </div>
          {passwordErrorMessage && <p>{passwordErrorMessage}</p>}
<Link to ='/Home'>
          <button disabled = {!isFormValid }

                  >Login</button>
    </Link>



      </form>
      </div>
  );


}

export default Login;
