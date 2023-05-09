import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import butterfly from "../assets/butterfly.gif";

const SPEED = 0.05;
const MouseBasicPage = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  const [iconPosition, setIconPosition] = useState({
    x: 0,
    y: 0,
  });

  const mouseEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY } = e;

    setCursorPosition({
      x: pageX,
      y: pageY,
    });
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

  useEffect(() => {
    // 이렇게해도되고 아니면 Box의 props로 넘겨도됌
    if (boxRef.current) {
      boxRef.current.style.left = `${iconPosition.x.toFixed(2)}px`;
      boxRef.current.style.top = `${iconPosition.y.toFixed(2)}px`;
    }
  }, [iconPosition]);

  return (
    <Wrapper ref={wrapperRef} onMouseMove={mouseEvent}>
      <h1>
        {cursorPosition.x} : {cursorPosition.y}
      </h1>
      {cursorPosition.x || cursorPosition.y ? (
        <Box ref={boxRef} x={iconPosition.x} y={iconPosition.y}>
          <img src={butterfly} alt="나비GIF" />
        </Box>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #10c3d0;

  h1 {
    font-size: 50px;
    padding: 20px;
  }
`;

const Box = styled.div<{ x: number; y: number }>`
  position: absolute;
  width: 80px;
  height: 80px;
  transform: translate(
    -50%,
    -50%
  ); // 마우스 커서를 박스 상,하 가운데 위치시키기 위함
  img {
    width: 100%;
  }
`;

export default MouseBasicPage;
