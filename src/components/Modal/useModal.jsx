import { useState } from "react";

const useModal = () => {
  const [isShowingModal, setisShowingModal] = useState(false);

  function showModal() {
    setisShowingModal(!isShowingModal);
  } 
  
  return {
    isShowingModal,
    showModal,    
  };
};

export default useModal;
