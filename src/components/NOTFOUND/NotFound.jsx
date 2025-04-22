import Navbar from "../navbar/navbar";
import styled from "../NOTFOUND/NotFound.module.css"


function NotFound (){

                return(
                                <div>
                                            <Navbar title="علی بلاگ" />     
                                                <div className={styled.NotFound}>
                                                <h1>404</h1>  
                                                </div>

                                           
                                </div>

                )
}

export default NotFound ;