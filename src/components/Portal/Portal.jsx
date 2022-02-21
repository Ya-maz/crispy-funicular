import { createPortal } from "react-dom";
import { Modal } from "components/Modal/Modal";

export const Portal = ({ open, portalHandler }) => {
  if (!open) return null;
  return createPortal(
    <Modal
      modalHandler={portalHandler}
      portal={true}
    />,
    document.getElementById("portal")
  );
};
