import React from "react";
import { useNavigate } from "react-router";

import "./ErrorModal.css";

const OrderSuccessModal = React.memo((props) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("/Book-Store-App/orders", { replace: true });
  };

  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.onClose} />
      <div className="error-modal">
        <h2>You have successfully ordered books!</h2>
        <p>{props.children}</p>
        <div className="error-modal__actions">
          <button type="button" onClick={closeHandler}>
            Close
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default OrderSuccessModal;
