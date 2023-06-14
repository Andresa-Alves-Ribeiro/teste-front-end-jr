import React, { ReactNode } from "react";

import "./modal.scss";

interface ModalProps {
    children: ReactNode;
    close: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, close }) => {
    return (
        <div className="ctnModal">
            <div className="boxModal">
                <div className="closeBtn" onClick={close}>
                    <span>X</span>
                </div>
                <div className="ctnContent">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
