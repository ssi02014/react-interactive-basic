import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Scroll = () => {
  const [scrollNum, setScrollNum] = useState(0);

  const getPercent = (num: number, totalNum: number) => {
    return +((num / totalNum) * 100).toFixed(0);
  };

  useEffect(() => {
    const scroll = () => {
      const percent = getPercent(
        window.scrollY,
        document.body.scrollHeight - window.innerHeight
      );

      setScrollNum(percent);
    };

    window.addEventListener("scroll", scroll);
    () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <Wrapper>
      <ProgressWrap>
        <ProgressBar scrollNum={scrollNum} />
      </ProgressWrap>

      <h1>{scrollNum}%</h1>
    </Wrapper>
  );
};

export default Scroll;

// style
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 5000px;
  background: linear-gradient(
    150deg,
    #13f0cf,
    #ddf311,
    #2d9c9a,
    #220340,
    #220340,
    black
  );

  h1 {
    position: fixed;
    bottom: 40px;
    left: 40px;
    padding: 20px;
    font-size: 60px;
    color: #fff;
  }
`;

const ProgressWrap = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: #2d9c9a;
`;

const ProgressBar = styled.div<{ scrollNum: number }>`
  width: ${({ scrollNum }) => scrollNum}%;
  height: inherit;
  position: absolute;
  z-index: 100;
  background-color: #fff;
  transition: width 0.2s ease-out;
`;
