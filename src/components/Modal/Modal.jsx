import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Modal.css";
import ModalSpinner from "./ModalSpinner";

function Modal({
  clickClose = false,
  showModal,
  setShowModal,
  showClose = true,
  showFade = false,
  showSpinner = false,
  ...props
}) {
  /*
        escapeClose: false, ======> OK 
        clickClose: false, ======> OK
        showClose: false,  ========>>>> OK  default value = true

        closeExisting: false,
        
        Fade Transitions =====> 50%

        open ==> ok
        setShowModal ==> ok
        block ==> ok
        unblock ==> ok
        show ==> ok
        unshow ==> ok
        hide ==> ok

        showspinner ==> ok  ==> default value = false
        hidespinner ==> ok        
    */

  /**
   * Escape Close function
   */
  const Keypress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(!showModal);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    if (clickClose) {
      window.addEventListener("keyup", Keypress);
    return () => window.removeEventListener("keyup", Keypress);
    }    
  }, [Keypress]);

  const [fadeout, setFadeOut] = useState("");
  const close = () => {
    if (showFade) {
      setFadeOut("modal__fade-out");
      setTimeout(setShowModal, 2000);
    } else setShowModal();
  };

  return showModal
    ? ReactDOM.createPortal(
        <div className={[showFade ? "modal__fade-in" : "", fadeout].join(" ")}>
          <div className="modal__layout" onClick={clickClose ? close : null}>
            {showSpinner ? <ModalSpinner /> : null}
            <div className="modal__container">
              {showClose ? (
                <AiFillCloseCircle
                  className="modal__close-btn"
                  aria-label="Close modal"
                  onClick={clickClose ? setShowModal : null}
                />
              ) : null}
              <div className="modal__contain">{props.children}</div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
}

export default Modal;
