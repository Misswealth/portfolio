import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import { LinkColumn, LinkItem } from "../Footer/FooterStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          My name is Awongo Wealth Robert and I am so excited to share my Web
          development journey with you!
        </SectionText>
        <LinkColumn>
          <LinkItem
            style={{
              fontSize: "3rem",
              padding: "1.5rem",
              backgroundColor: "hsl(205.1,100%,36.1%)",
              color: "black",
              borderRadius: "3rem",
              justifySelf: "center",
              width: "15rem",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: "bold",
            }}
            href="mailto:wealthrobert3@gmail.com"
          >
            Hire Me
          </LinkItem>
        </LinkColumn>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
