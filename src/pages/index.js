import React from "react";
import Projects from './components/Projects'
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
  Section, Animation
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About" />
        {/* <Animation type="fadeUp">
            <Section heading="Projects">
              <Projects></Projects>
            </Section>
        </Animation> */}
        {/* <InterestsSection sectionId="details" heading="Details" /> */}
        <ProjectsSection sectionId="features" heading="Projects" />
        {/* <ContactSection sectionId="github" heading="Issues?" /> */}
      </Page>
    </>
  );
}
