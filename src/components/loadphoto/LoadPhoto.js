import React, { useState, useRef } from "react";
import { LoadImage, LoadPhotoContainer, LoadText } from "./styled";
import { MdOutlinePhotoLibrary } from "react-icons/md";
 import { useNavigate } from "react-router-dom";

const LoadPhoto = ({ textHeader, text }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [image, setImage] = useState(null);
 const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImage(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);

      // Navigate to the new route with the image URL as state
      navigate('/remove-bg', { state: { imageUrl } });
    }
  };
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <LoadPhotoContainer onClick={handleImageClick}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <LoadImage>
          <MdOutlinePhotoLibrary />
        </LoadImage>
        <LoadText>
          {textHeader}
          <br />
          {text}
        </LoadText>
      </LoadPhotoContainer>
      
    </>
  );
};

export default LoadPhoto;
