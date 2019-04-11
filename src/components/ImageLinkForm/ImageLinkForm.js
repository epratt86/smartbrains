import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onInputSubmit }) => {
  return (
    <div className="tc">
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures. Give it a try!"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            type="text"
            className="f4 pa2 w-70 center"
            onChange={onInputChange}
          />
          <button
            onClick={onInputSubmit}
            className="w-30 grow f4 link ph3 pv2 div white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
