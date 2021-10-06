import React, { useState } from "react";

const ModalSpinner = () => {
  const [spinnerDelay, setSpinnerDelay] = useState(0);

  return <div className="modal__spinner-loading"></div>;
};

export default ModalSpinner;
