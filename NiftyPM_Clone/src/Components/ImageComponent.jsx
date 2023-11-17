// ImageComponent.js
import React, { useState } from 'react';

function ImageComponent(){
  const openModal = () => {
    <iframe width="560" height="315" src="https://www.youtube.com/embed/5oExKMYIE9U?si=VmeQSiwqH6EJIJ90&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  }


  return (
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2023/10/20/03/36/mushrooms-8328101_1280.jpg" // Replace with the actual path to your image
        alt="Click to Watch Video"
        onClick={openModal}
        style={{ cursor: 'pointer' }}
      />
      
    </div>
  );
};

export default ImageComponent;
