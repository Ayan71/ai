import React, { useState } from "react";
import {
  VerticalContainer,
  VerticalOptions,
  FirstOption,
  SecondOption,
  ThirdOption,
} from "./styles";

const Vertical = ({ setAcknowledgement }) => {
  const Acknowledgementshandler = () => {
    setAcknowledgement(true);
  };
  const getDeviceInfo = () => {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const colorDepth = window.screen.colorDepth;
    const appVersion = navigator.appVersion;

    return `
      App Version: ${appVersion}
      OS: ${platform}
      Model: ${userAgent}
      Display: ${screenResolution}, ${colorDepth}-bit color
    `;
  };
  const ReportProblemHandler = () => {
    const deviceInfo = encodeURIComponent(getDeviceInfo());
    const subject = encodeURIComponent("Report a Problem");
    const mailtoLink = `mailto:ayan@132gmail.com?subject=${subject}&body=${deviceInfo}`;
    window.location.href = mailtoLink;
  };

  return (
    <VerticalContainer>
      <VerticalOptions>
        <FirstOption onClick={ReportProblemHandler}>
          Report a problem, Ask
        </FirstOption>
        <SecondOption>Privacy Policy</SecondOption>
        <ThirdOption onClick={Acknowledgementshandler}>
          Acknowledgements
        </ThirdOption>
      </VerticalOptions>
    </VerticalContainer>
  );
};

export default Vertical;
