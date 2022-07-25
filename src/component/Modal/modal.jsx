import React from "react";
import PropTypes from "prop-types";
import "./style.css";
Modal.propTypes = {};

const closeModal = () => {
  document.querySelector(".modal").classList.add("hide");
};

function Modal(props) {
  return (
    <div className="modal hide ">
      <div className="modal__form">
        <form action="">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" id="name" className="form-control" />
          </div>
          <div className="form-group">
            <label className="form-label">Auchor</label>
            <input type="text" id="auchor" className="form-control" />
          </div>
          <div className="form-group">
            <label className="form-label">Descrription</label>
            <textarea cols="30" rows="5" className="form-control"></textarea>
          </div>
          <div className="button">
            <button type="submit" className="btn btn-add" onClick={closeModal}>
              Add
            </button>
            <button type="reset" className="btn btn-close" onClick={closeModal}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
