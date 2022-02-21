import { useState } from "react";
import { Button } from "components/Button/Button.jsx";
import { Modal } from "components/Modal/Modal";
import { Portal } from "components/Portal/Portal";
import "./App.css";

function App() {
  const [modal, setModal] = useState(false);
  const [portal, setPortal] = useState(false);
  const open = () => setModal(!modal);
  const openPortal = () => setPortal(!portal);
  return (
    <div className="App">
      {!modal && (
        <Button variant="primary" onClick={open}>
          Open modal
        </Button>
      )}
      {modal && <Modal modalHandler={open} />}

      <Button variant="secondary" onClick={openPortal}>
        Open portal
      </Button>
      <Portal portalHandler={openPortal} open={portal} />
    </div>
  );
}

export default App;
