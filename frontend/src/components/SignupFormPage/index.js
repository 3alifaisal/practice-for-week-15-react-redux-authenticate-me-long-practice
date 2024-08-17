// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupForm";
import "../../stylesheets/navButtons.css";
function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav-link" onClick={() => setShowModal(true)}>
        Sign out
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
