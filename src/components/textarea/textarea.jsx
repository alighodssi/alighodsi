import { useState } from "react";
import styled from "../textarea/textarea.module.css"



function TextArea(props) {




                return (
                                <div className={styled.TextAreaWrapper}>
                                                <label >{props.label}</label>
                                                <textarea onChange={props.handeltextaria} placeholder={props.placeholder}></textarea>
                                                
                                </div>




                )
}

export default TextArea;