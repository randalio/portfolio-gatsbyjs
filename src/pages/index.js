import React from 'react';
import PageLayout from '../components/page-layout';
// import { useStaticQuery, graphql } from "gatsby"
import HomeHero from '../components/home-hero';
import SkillsIcons from '../components/skills';
import CanvasComponent from "../components/circuits-canvas";
import PortfolioGrid from '../components/portfolio';
import ContactMe from '../components/contact-me';


const IndexPage = ({ data }) => {

  return (

    <>
    <CanvasComponent />
    <PageLayout>

      <HomeHero />

      <SkillsIcons />

      <PortfolioGrid />

      
      <ContactMe />

    </PageLayout>
    </>
  )

}

export default IndexPage;
