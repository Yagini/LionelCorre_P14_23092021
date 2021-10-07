import { useState } from "react";

const useModal = () => {
  const [showModal, setisShowingModal] = useState(false);

  function setShowModal() {
    setisShowingModal(!showModal);
  } 
  
  return {
    showModal,
    setShowModal,    
  };
};

export default useModal;
