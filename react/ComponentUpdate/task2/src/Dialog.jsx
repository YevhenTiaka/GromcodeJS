import React from 'react';

const Dialog = ({ isOpen, children, title, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <div className="dialog__title">{title}</div>
        <button onClick={onClose} className="dialog__close-btn">
          +
        </button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};

export default Dialog;
