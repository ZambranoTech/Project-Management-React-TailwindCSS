import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export default forwardRef(function Modal({ children, buttonCaption }, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 shadow-md rounded-md">
        {children}
        <form method="dialog" className="mt-4 text-right">
            <Button>{buttonCaption}</Button>
        </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
