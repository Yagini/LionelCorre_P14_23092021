import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Modal.css";
import ModalSpinner from "./ModalSpinner";

function Modal({ isShowing, setIsShowing, showClose = true, showSpinner = true, ...props }) {
  /*
        escapeClose: false,
        clickClose: false, 
        showClose: false,  ========>>>> OK  default value = true
        closeExisting: false,
        
        Fade Transitions

        open
        setIsShowing
        block
        unblock
        show
        unshow
        hide

        showspinner ==> ok  ==> default value = false
        hidespinner ==> ok
        
    */

  const Keypress = useCallback(
    (e) => {
      if (e.key === "Escape" && isShowing) {
        setIsShowing(!isShowing);
      }
    },
    [setIsShowing, isShowing]
  );

  useEffect(() => {
    window.addEventListener("keyup", Keypress);
    return () => window.removeEventListener("keyup", Keypress);
  }, [Keypress]);

  return isShowing
    ? ReactDOM.createPortal(
        <div className="modal__layout" onClick={setIsShowing}>
          {showSpinner ? <ModalSpinner /> : null}
          <div className="modal__container">
            {showClose ? (
              <AiFillCloseCircle className="modal__close-btn" aria-label="Close modal" onClick={setIsShowing} />
            ) : null}
            <div className="modal__contain">{props.children}</div>
          </div>
        </div>,
        document.body
      )
    : null;
}

export default Modal;
