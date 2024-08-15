import React ,{useState}from "react";
import { LoadImage, LoadPhotoContainer, LoadText } from "./styled";
import { MdOutlinePhotoLibrary } from "react-icons/md";
const LoadPhoto = ({textHeader,text}) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleLoadPhotoClick = () => {
    setShowPicker(true);
  };
  return (
    <LoadPhotoContainer  onClick={handleLoadPhotoClick}>
      <LoadImage>
        <MdOutlinePhotoLibrary/>
      </LoadImage>
      <LoadText>
       {textHeader}
        <br />
       {text}
      
      </LoadText>
    </LoadPhotoContainer>
  );
};

export default LoadPhoto;
