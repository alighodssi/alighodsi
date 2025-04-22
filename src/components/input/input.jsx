import styled from "../input/input.module.css"

function Input(props) {

  console.log(props);







  return (
    <div className={styled.inputWrapper} >

      <label>{props.label}</label>
      <input name={props.name}
        onChange={
          props.handelchang
        }
        type="text" placeholder={props.placeholder} />

    </div>


  );
};

export default Input;






