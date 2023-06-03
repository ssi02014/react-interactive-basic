import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import contentLogo from "../assets/sirup/content-logo.svg";
import panelImage from "../assets/sirup/content-panel-pc.webp";
import DateLogo from "../assets/sirup/content-date-pc.svg";
import ArtistImage from "../assets/sirup/content-artist.png";
import RollBounceImage from "../assets/sirup/content-rollbounce.png";
import DownloadLogo from "../assets/sirup/download.svg";

const SPEED = 0.1;

const SirUp = () => {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  const [targetPosition, setTargetPosition] = useState({
    x: 0,
    y: 0,
  });

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (wrapperRef.current) {
      setCursorPosition({
        x: e.pageX - wrapperRef.current.clientWidth / 2,
        y: e.pageY - wrapperRef.current.clientHeight / 2,
      });
    }
  };

  const mouseMove = () => {
    if (contentRef.current) {
      const contentAll = contentRef.current?.querySelectorAll(
        "div img"
      ) as NodeListOf<HTMLImageElement>;
      const shadow = contentAll[0];
      const date = contentAll[1];
      const human = contentAll[2];
      const textImg = contentAll[3];

      shadow.style.transform = `translateX(${targetPosition.x / 35}px)`;
      date.style.transform = `translateX(${targetPosition.x / 20}px)`;
      human.style.transform = `translateX(${-targetPosition.x / 20}px)`;
      textImg.style.transform = `translateX(${-targetPosition.x / 10}px)`;
    }
  };

  const updateLoop = () => {
    setTargetPosition({
      x: targetPosition.x + (cursorPosition.x - targetPosition.x) * SPEED,
      y: targetPosition.y + (cursorPosition.y - targetPosition.y) * SPEED,
    });

    mouseMove();
    requestAnimationFrame(updateLoop);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateLoop);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [targetPosition, cursorPosition]);

  return (
    <Wrapper ref={wrapperRef} onMouseMove={handleMouseMove}>
      <h1>
        <img src={contentLogo} />
      </h1>
      <ContentWrapper ref={contentRef}>
        <Shadow>
          <img src={panelImage}></img>
        </Shadow>
        <Date>
          <img src={DateLogo}></img>
        </Date>
        <Human>
          <img src={ArtistImage}></img>
        </Human>
        <Text>
          <img src={RollBounceImage}></img>
        </Text>
      </ContentWrapper>

      <SubTitle>
        <img src={DownloadLogo}></img>
      </SubTitle>
    </Wrapper>
  );
};

export default SirUp;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url(src/assets/sirup/bg-pc.webp) center center / cover no-repeat;
  overflow: hidden;

  h1 {
    width: 100%;
    text-align: center;
  }

  h1 > img {
    width: 150px;
  }

  img {
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 80vw;
  height: 100vh;

  & div {
    position: absolute;
  }

  & div img {
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
  }
`;

const Shadow = styled.div`
  width: 700px;
  left: 50%;
  transform: translateX(-50%);
`;
const Date = styled.div`
  width: 400px;
  left: 50%;
  top: 70%;
  transform: translateX(-20%);
`;
const Human = styled.div`
  width: 1200px;
  left: 50%;
  transform: translateX(-50%);
`;
const Text = styled.div`
  width: 400px;
  left: 50%;
  top: 30%;
  transform: translateX(-10%);
`;
const SubTitle = styled.div`
  position: fixed;
  top: 10%;
  left: 20px;

  & > img {
    width: 70px;
  }
`;
