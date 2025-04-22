import Login from "../login/login";
import styled from "../homelogin/homelogin.module.css"
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import { AppConText } from "../../App";
import { useContext } from "react";





function Homelogin() {
                const { islogin } = useContext(AppConText)

                return (


                                <div>


                                                <div className={styled.Homelogin}>
                                                                <div> <Navbar />
                                                                                <div className={styled.loginWrod}>

                                                                                                <span>شما وارد شدید</span> </div>

                                                                </div>






                                                </div>
                                </div>

                )
}
export default Homelogin;