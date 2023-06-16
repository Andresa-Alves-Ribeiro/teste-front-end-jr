import React, { ReactNode } from "react";
import Close from "../../assets/close.svg";

import "./modal.scss";

interface ModalProps {
  children: ReactNode;
  close: () => void;
  isOpen?: boolean;
}


const Modal: React.FC<ModalProps> = ({ children, close }) => {
  return (
    <div className="ctnModal">
      <div className="boxModal">
        <div className="closeBtn" onClick={close}>
          <img src={Close} alt="Close" />
        </div>
        <div className="ctnContent">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
