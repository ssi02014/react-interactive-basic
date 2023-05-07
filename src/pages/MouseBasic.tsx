import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import butterfly from "../assets/butterfly.gif";

const MouseBasicPage = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const speed = useRef(1000);
  const [pageData, setPageData] = useState({
    x: 0,
    y: 0,
  });
  const [boxPosition, setBoxPosition] = useState({
    x: 0,
    y: 0,
  });

  const mouseEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY } = e;

    setPageData({
      x: pageX,
      y: pageY,
    });
  };

  useEffect(() => {
    const update = () => {
      const dx = (pageData.x - boxPosition.x) * 0.05;
      const dy = (pageData.y - boxPosition.y) * 0.05;

      setBoxPosition({
        x: boxPosition.x + dx,
        y: boxPosition.y + dy,
      });
      requestRef.current = requestAnimationFrame(update);
    };

    requestRef.current = requestAnimationFrame(update);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [pageData, boxPosition, speed]);

  useEffect(() => {
    // 이렇게해도되고 아니면 Box의 props로 넘겨도됌
    if (boxRef.current) {
      boxRef.current.style.left = `${boxPosition.x}px`;
      boxRef.current.style.top = `${boxPosition.y}px`;
    }
  }, [boxPosition]);

  return (
    <Wrapper ref={wrapperRef} onMouseMove={mouseEvent}>
      <h1>
        {pageData.x} : {pageData.y}
      </h1>
      <Box ref={boxRef} x={boxPosition.x} y={boxPosition.y}>
        <img src={butterfly} alt="나비GIF" />
      </Box>
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
