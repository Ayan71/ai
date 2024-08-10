import React from "react";
import {
  AcknowledgementsContainer,
  TextShow,
  Button,
  Discription,
  ButtonContainer,
} from "./styles";
const Acknowledgements = ({ setAcknowledgement }) => {
  return (
    <AcknowledgementsContainer>
      <TextShow>Acknowledgements</TextShow>
      <Discription>
        We extend our heartfelt gratitude to all those who have contributed to
        the development and success of our image editing and background removal
        app. First and foremost, we thank our dedicated team of developers,
        designers, and testers who worked tirelessly to bring this project to
        life. We are indebted to the open-source community for providing
        invaluable tools and libraries that form the backbone of our
        application, including ImageMagick, OpenCV, TensorFlow, PyTorch, and
        Pillow. These technologies have been instrumental in creating our
        powerful image manipulation and background removal features. We also
        wish to acknowledge the creators and maintainers of various image
        segmentation models that have significantly improved our background
        removal accuracy. Our beta testers deserve special recognition for their
        crucial feedback during the development process. The support of our
        families and friends during long development hours has been invaluable.
      </Discription>
      <ButtonContainer>
        <Button onClick={() => setAcknowledgement(false)}>OK</Button>
      </ButtonContainer>
    </AcknowledgementsContainer>
  );
};

export default Acknowledgements;
