import React,{useState} from 'react'
import { CiShare2 } from "react-icons/ci";
import { RWebShare } from "react-web-share";
import { BsThreeDotsVertical } from "react-icons/bs";
import Vertical from "../Dots/Vertical.js";
import Acknowledgements from '../acknowledgements/Acknowledgements.js';
import {
    FrontContainer,
    NarbarContainer,
    NavbarText,
    NavbarIcon,
    ShareIcon,
    OptionIcon,
  } from "./styles.js";
const Navbar = () => {
    const [popup, setPopup] = useState(false);
    const [acknowledgement, setAcknowledgement] = useState(false);
    const handleShowPopup = () => {
      setPopup(!popup);
    };
  return (
    <div>
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
        {popup && <Vertical setAcknowledgement={setAcknowledgement} />}
      {acknowledgement && (
        <Acknowledgements setAcknowledgement={setAcknowledgement} />
      )}
    </div>
  )
}

export default Navbar