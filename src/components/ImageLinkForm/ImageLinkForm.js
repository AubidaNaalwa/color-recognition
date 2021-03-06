import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3 white">
        {'Entre here an Image URL, And it will identify the colors in it'}
      </p>
      <div className="center">
        <div className="center form pa4 shadow-5 ba b--transparent br4">
          <input
            className="f4 pa2 w-80 center ba b--white"
            type="tex"
            onChange={onInputChange}
            placeholder="Paste here the url"
          />
          <button
            className="w-20 grow f4 link ph3 pv2 dib white bg-green ba b--green"
            onClick={onButtonSubmit}
          >
            GO
          </button>
        </div>
      </div>
      <p className="white f5">
        <a
          className="blue"
          href="https://loremflickr.com/320/240/color"
          rel="noopener noreferrer"
          target="_blank"
        >
          Click
        </a>{' '}
        to get a random image
      </p>
    </div>
  );
};

export default ImageLinkForm;
