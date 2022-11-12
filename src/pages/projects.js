import React from "react";
import { Page, Seo } from 'gatsby-theme-portfolio-minimal';

export default function FirstPage() {
    return (
        <>
            <Seo title="FirstPage" />
            <Page useSplashScreenAnimation>
              <h1>
                Hello Project Page
              </h1>
              {/* <AboutSection sectionId="about" heading="About Portfolio Minimal" /> */}
            </Page>
        </>
    );
}