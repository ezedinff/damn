import React from "react";
import { Wrapper } from "./Atoms";

interface Props {
  title: string;
  subtitle: string;
}

const Banner: React.FC<Props> = ({ title, subtitle }): React.ReactElement => (
  <Wrapper>
    <h1 data-hover=" 🚀 🎩">{title}</h1>
    <h2>
      {subtitle}
      <span data-hover="React TypeScript Template" />
    </h2>
  </Wrapper>
);

export default Banner;
