import React from "react";
import Story from "./Story";
import CoreValues from "./CoreValues";
import Join from "../LandingPage/Join";
import Suggestion from "../LandingPage/Suggestion";
import Socials from "./Socials";
import GetInTouch from "./GetInTouch";

const About = () => {
  return (
    <>
      <Story />
      <CoreValues />
      <Join />
      <Socials />
      <GetInTouch />
      <Suggestion />
    </>
  );
};

export default About;
