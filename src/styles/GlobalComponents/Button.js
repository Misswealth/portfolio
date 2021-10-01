import React from "react";

import { ButtonBack, ButtonFront } from "./index";

const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
    {props.children}
    <ButtonFront
      alt={props.alt}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;

// import React from "react";
// import { Link } from "react-router-dom";

// const ButtonMailto = ({ mailto, label }) => {
//   return (
//     <Link
//       to="#"
//       onClick={(e) => {
//         window.location = mailto;
//         e.preventDefault();
//       }}
//     >
//       {label}
//     </Link>
//   );
// };

// export default ButtonMailto;
