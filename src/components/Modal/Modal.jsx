import { Button } from "components/Button/Button";
import { Close } from "components/Close"
import classes from "components/Modal/Modal.module.css";



export const Modal = ({ modalHandler, portal }) => {
  return (
    <div
      className={portal ? classes.portalBackground : classes.modalBackground}
    >
      <div
        className={portal ? classes.portalContainer : classes.modalContainer}
      >
        <button className={classes.closeBtn} onClick={modalHandler}>
          <Close/>
        </button>
        <div className={classes.title}>
          <span>Basic modal</span>
        </div>
        <div className={classes.line}></div>
        <div className={classes.body}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </div>
        <div className={classes.line}></div>
        <div className={classes.footer}>
          <Button onClick={modalHandler} variant="secondary">
            Cancel
          </Button>
          <Button variant="primary">Continue</Button>
        </div>
      </div>
    </div>
  );
};
