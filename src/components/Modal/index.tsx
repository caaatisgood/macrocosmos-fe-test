import React from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleBackdropClick}>
      <div className={`relative p-6 m-3 w-full max-w-[70vw] max-h-[85vh] overflow-auto bg-white rounded-lg shadow-lg`}>
        <button onClick={onClose} className="absolute top-2 right-2 border-none bg-transparent cursor-pointer text-2xl flex justify-center items-center w-6 h-6 hover:opacity-70">×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

export * from "./hooks";
