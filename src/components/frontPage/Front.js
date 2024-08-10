import React, { useState, useRef, useEffect } from "react";
import { CiShare2 } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import LoadPhoto from "../loadphoto/LoadPhoto.js";
import { RWebShare } from "react-web-share";
import Vertical from "../Dots/Vertical.js";
import Acknowledgements from "../acknowledgements/Acknowledgements.js";
import {
  FrontContainer,
  NarbarContainer,
  NavbarText,
  NavbarIcon,
  ShareIcon,
  OptionIcon,
  ProblemContainer,
  ProblemRow,
  Question,
  Faq,
  ProblemInform,
  BelowContainer,
  LoaderShow,
} from "./styles.js";
const Front = () => {
  const [popup, setPopup] = useState(false);
  const [acknowledgement, setAcknowledgement] = useState(false);
  const handleShowPopup = () => {
    setPopup(!popup);
  };
  const ReportHandler = () => {
    const subject = encodeURIComponent("Report a Problem");
    const mailtoLink = `mailto:ayan@132gmail.com?subject=${subject}`;
    window.location.href = mailtoLink;
  };

  return (
    //Whole Container
    <FrontContainer>
      {/* NabarContainer  Code*/}
      <BelowContainer>
        <NarbarContainer>
          <NavbarText>AI Background Eraser</NavbarText>
          <NavbarIcon>
            <RWebShare
              data={{
                text: "Edit Image and Remove Background",
                url: "https://www.youtube.com/channel/UCF49DeNM7eS78VdbKZjh9WA",
                title: "Ai Background Image",
              }}
            >
              <ShareIcon>
                {" "}
                <CiShare2 />
              </ShareIcon>
            </RWebShare>
            <OptionIcon>
              <BsThreeDotsVertical onClick={handleShowPopup} />
            </OptionIcon>
          </NavbarIcon>
        </NarbarContainer>
        {/* Problem Solving section */}
        <ProblemContainer>
          <ProblemRow>
            <Question>
              <FaRegCircleQuestion /> &nbsp;How to use
            </Question>
            <Faq>
              <CiCircleInfo />
              &nbsp; FAQ
            </Faq>
          </ProblemRow>
          <ProblemInform onClick={ReportHandler}>
            <CiMail /> &nbsp; Report a problem, Ask
          </ProblemInform>
        </ProblemContainer>
        {/* Load photo container code */}
        <LoaderShow>
          <LoadPhoto textHeader="Load a Photo" text="(Edit and Crop)" />
          <LoadPhoto textHeader="Original Album" text="(Remove Bg)" />
        </LoaderShow>
      </BelowContainer>
      {popup && <Vertical setAcknowledgement={setAcknowledgement} />}
      {acknowledgement && (
        <Acknowledgements setAcknowledgement={setAcknowledgement} />
      )}
    </FrontContainer>
  );
};

export default Front;
