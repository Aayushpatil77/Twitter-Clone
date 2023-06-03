import React, { useCallback } from "react";

import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: String;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionlabel: String;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  actionlabel,
  onClose,
  onSubmit,
  body,
  disabled,
  footer,
  isOpen,
  title,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="jutify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outilne-none bg-neutral-800 bg-opacity-70">
        <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
          {/* Content */}
          <div className="h-full lg:h-auto border-0 rounded-lg shadow-lg realtive flex flex-col w-full bg-black outline-none focus:outline-none">
            {/* Header */}
            <div className="flex items-center justify-between p-10 rounded-t">
              <h3 className="text-3xl font-semibold text-white">{title}</h3>
              <button
                className="p-1 ml-auto border-0 text-white hover:opacity-70 transition"
                onClick={handleClose}
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/* Body */}
            <div className="realtive p-10 flex-auto">{body}</div>
            {/* Footer */}
            <div className="flex flex-col gap-2 p-10">
              <Button
                disabled={disabled}
                label={actionlabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
