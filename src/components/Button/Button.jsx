import classes from "components/Button/Button.module.css";

export const Button = ({ onClick, children, variant }) =>
  <button className={classes[variant]} onClick={onClick}>
      {children}
    </button>
