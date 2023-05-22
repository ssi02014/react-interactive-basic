import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const SPEED = 0.09;

const MouseOver = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLSpanElement | null>(null);

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  const [iconPosition, setIconPosition] = useState({
    x: 0,
    y: 0,
  });

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY } = e;

    setCursorPosition({
      x: pageX,
      y: pageY,
    });
  };

  const mouseEnter = () => {
    if (circleRef.current) {
      circleRef.current.style.transform = `scale(.3)`;
    }
  };

  const mouseLeave = () => {
    if (circleRef.current) {
      circleRef.current.style.transform = `scale(1)`;
    }
  };

  useEffect(() => {
    const update = () => {
      // 가속과 감속 공식
      const dx = (cursorPosition.x - iconPosition.x) * SPEED;
      const dy = (cursorPosition.y - iconPosition.y) * SPEED;

      setIconPosition({
        x: iconPosition.x + dx,
        y: iconPosition.y + dy,
      });

      requestRef.current = requestAnimationFrame(update);
    };

    requestRef.current = requestAnimationFrame(update);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [cursorPosition, iconPosition]);

  return (
    <>
      <Cursor ref={cursorRef} x={iconPosition.x} y={iconPosition.y}>
        <span ref={circleRef} />
      </Cursor>
      <Wrapper ref={wrapperRef} onMouseMove={mouseMove}>
        <ContentWrapper>
          <TopContainer>
            <p>마스크를 써야되나요?</p>
          </TopContainer>
          <BottomContainer>
            <p onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
              네
            </p>
            <span></span>
            <p onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
              아니오
            </p>
          </BottomContainer>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

// style
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #03721e;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 50px;
    padding: 20px;
  }
`;

const ContentWrapper = styled.div`
  width: 400px;
`;

const TopContainer = styled.div`
  padding: 20px;
  border: 2px solid #fff;
  text-align: center;
  font-size: 1.15rem;
  color: #fff;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 2px solid #fff;
  border-top: none;
  cursor: pointer;

  p {
    color: #fff;
    padding: 20px;
    width: 50%;
    text-align: center;
    transition: all 0.2s ease-out;
  }

  p:hover {
    background: #fff;
    color: black;
  }

  span {
    border: 1px solid #fff;
  }
`;

const Cursor = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: 0px; // 이거 중요
  top: 0px; // 이거 중요
  transform: ${({ x, y }) => `translate3d(${x}px, ${y}px, 0)`}; // 이거 중요
  z-index: 10;
  opacity: 0.7;
  pointer-events: none;

  span {
    position: fixed;
    width: 120px;
    height: 120px;
    background-color: red;
    border-radius: 50%;
    margin: -60px -60px; // transform이 아닌 margin으로 중앙으로 이동시켜주는 방법
    transition: all 0.2s ease-in-out;
  }
`;

export default MouseOver;
