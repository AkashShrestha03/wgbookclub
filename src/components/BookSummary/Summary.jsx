import React from "react";
import SummaryHero from "./SummaryHero";
import Details from "./Details";
import AboutAuthor from "./AboutAuthor";
import Discussions from "./Discussions";

const Summary = () => {
  return (
    <>
      <SummaryHero />
      <Details />
      <AboutAuthor />
      <Discussions />
    </>
  );
};

export default Summary;
