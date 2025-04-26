import { Link } from "react-router-dom";
import "./Button.scss";
import arrowIcon from "../../assets/icons/arrow.svg";

const Button = ({ to, text, base = true, showArrow = false, inline = false}) => {
  const baseClass = base ? "btn-base" : "btn-second";
  const inlineClass = inline ? "btn-inline" : "";

  return (
    <Link to={to} className={`${baseClass} ${inlineClass} `}>
      {text}
      {showArrow && (
        <span>
          <img src={arrowIcon} alt="arrow" />
        </span>
      )}
    </Link>
  );
};

export default Button;
