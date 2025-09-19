import React, { useState } from 'react';

import Button from './Button';

interface IDialog {
  dialogChildren: React.ReactNode;
  btnClasses: string;
  btnText: string;
  btnChildren?: React.ReactNode;
}
const Dialog = ({ dialogChildren, btnClasses, btnText, btnChildren }: IDialog) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        text={btnText}
        btnChildren={btnChildren}
        buttonClasses={btnClasses}
        onClickHandler={() => setIsOpen(true)}
      />

      {isOpen && (
        <dialog open className="modal">
          <div className="modal-box">
            {dialogChildren}
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Dialog;
