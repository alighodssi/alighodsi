import { useContext } from "react";
import styled from "../login/login.module.css"

import Navbar from "../navbar/navbar";
import { AppConText } from "../../App";
import { Link } from "react-router-dom";
import Homelogin from "../homelogin/homelogin";

function Login() {

                const {islogin ,setIslogin } = useContext(AppConText)

                return (
                                <>
                                                <Navbar />


                                                <div className={styled.loginWrapper}>

                                                                <              div className={styled.loginitems}>

                                                                                <h2>Login</h2>
                                                                                <div className={styled.LoginInputs}>

                                                                                                <div className={styled.LoginInputs1}>
                                                                                                                <label>username</label>
                                                                                                                <input type="text" placeholder="username" />
                                                                                                </div>
                                                                                                <div className={styled.LoginInputs2}>
                                                                                                                <label>password</label>
                                                                                                                <input type="password" placeholder="password" />
                                                                                                </div>

                                                                                </div>

                                                                                <div className={styled.LoginButton}>

                                                                                                {                                                                                                                  islogin ?   <button onClick={() => setIslogin(true)}>Login</button>   :(<Homelogin/>) }

                                                                                </div>
                                                                </div>
                                                </div>



                                </>




                )
}

export default Login;