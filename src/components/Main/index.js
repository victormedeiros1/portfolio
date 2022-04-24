import React from "react";
import { MainStyles } from "./styles";
import BigLogo from "../BigLogo";
import i18next from "../../translates/i18next";
import Container from "../Container";
import Button from "../Button";

function Main() {
  return (
    <Container>
      <MainStyles id="main" className="main">
        <header className="main__header">
          <div className="main__header__left">
            <h1 className="main__header__left__h1" data-aos="fade-right">
              {i18next.t("main.title")}
            </h1>
            <h2
              className="main__header__left__h2"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {i18next.t("main.subtitle")}
            </h2>
            <Button text={i18next.t("main.discover")} link="#about-me" />
          </div>
          <div className="main__header__right">
            <BigLogo />
          </div>
        </header>
      </MainStyles>
    </Container>
  );
}

export default Main;
