import React ,{useState}from "react";
import { LoadImage, LoadPhotoContainer, LoadText } from "./styled";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import Picker from "../imagepicker/Picker.tsx";
const LoadPhoto = ({textHeader,text}) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleLoadPhotoClick = () => {
    setShowPicker(true);
  };
  return (
    <LoadPhotoContainer  onClick={handleLoadPhotoClick}>
      <LoadImage>
        <Picker />
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
