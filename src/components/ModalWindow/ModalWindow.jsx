import css from "./ModalWindow.module.css";

const ModalWindow = ({ modalIsOpen, onConfirm, onCancel, children }) => {
  if (!modalIsOpen) return null;

  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalContent}>
        {children}
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ModalWindow;