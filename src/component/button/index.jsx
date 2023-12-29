
import './style.css';
function Button({text,outline,onClick}) {
  return (
    <div className={outline ?"outline_btn":"button_wrapper"} onClick={()=>onClick()}>{text}</div>
  )
}

export default Button