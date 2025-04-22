import styled from "../navbar/navbar.module.css"
import { Link } from "react-router-dom";
import ArticlePage from "../articlepage/articlepage";
import { useContext } from "react";
import { AppConText } from "../../App";
import Login from "../login/login";

function Navbar(props) {

    const { islogin } = useContext(AppConText)

    return (
        <div className={styled.NavbarWrapper}>
            <div className="container">


                <div className={styled.Navbar}>

                    <Link to="/home"><h2>علی بلاگ</h2></Link>

                    <ul>


                        <li>
                            <Link to="/">ورود </Link>
                        </li>

                        <li>
                            <Link to="/AboutUs"> درباره</Link>
                        </li>


                        <li>
                            <Link to="/CreatArticle">مقالات جدید</Link>
                        </li>






                    </ul>

                </div>
            </div>
            <div className={styled.item4}>
                {islogin ? <button>نام کاربری</button> : <span>علی قدسی</span>}
            </div>


        </div>
    );
}
export default Navbar