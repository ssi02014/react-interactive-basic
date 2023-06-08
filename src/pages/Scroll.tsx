import { useEffect, useState } from "react";
import { styled } from "styled-components";
import crabImg from "../assets/scroll/crab.png";
import cuttleImg from "../assets/scroll/cuttle.png";
import fishImg from "../assets/scroll/fish_01.png";
import octoImg from "../assets/scroll/octo.png";
import seaweedImg from "../assets/scroll/seaweed.png";
import submarineImg from "../assets/scroll/submarine.gif";

const Scroll = () => {
  const [percent, setPercent] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  const getCalculatedPercent = (num: number, totalNum: number) => {
    return +((num / totalNum) * 100).toFixed(0);
  };

  useEffect(() => {
    const scroll = () => {
      // 퍼센트 계산
      const calculatedPercent = getCalculatedPercent(
        window.scrollY,
        document.body.scrollHeight - window.innerHeight
      );

      setPercent(calculatedPercent);
      setScrollHeight(+window.scrollY.toFixed(0));
    };

    window.addEventListener("scroll", scroll);
    () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <Wrapper>
      <ProgressWrap>
        <ProgressBar percent={percent} />
      </ProgressWrap>

      <MarineImage src={submarineImg} percent={percent} />

      <InnerWrap>
        <h2>깊은 바다</h2>
        <TextWrap>
          <p>대게</p>
          <img src={crabImg} />
        </TextWrap>
        <TextWrap>
          <p>오징어</p>
          <img src={cuttleImg} />
        </TextWrap>
        <TextWrap>
          <p>방어</p>
          <img src={fishImg} />
        </TextWrap>
        <TextWrap>
          <p>미역</p>
          <img src={seaweedImg} />
        </TextWrap>
      </InnerWrap>

      <h1>
        <span>{scrollHeight}</span> meters deep
      </h1>

      <OctoImage src={octoImg} percent={percent} />
    </Wrapper>
  );
};

export default Scroll;

// style
const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  position: relative;
  overflow-x: hidden;
  width: 100%;
  background: linear-gradient(
    150deg,
    #13f0cf,
    #6d017d,
    #220340,
    #220340,
    #220340,
    black
  );

  & > h1 {
    position: fixed;
    bottom: 50px;
    padding: 20px;
    font-size: 40px;
    color: #fff;
    text-align: center;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 2px dashed #fff;
    font-weight: bold;

    & > span {
      width: 120px;
      display: inline-block;
    }
  }
`;

const MarineImage = styled.img<{ percent: number }>`
  position: fixed;
  width: 200px;
  top: 20%;
  transform: ${({ percent }) => `translateX(${percent * 1.5}%)`};
  transition: transform 0.3s ease-out;
  z-index: 200;
`;

const ProgressWrap = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: #2d9c9a;
`;

const ProgressBar = styled.div<{ percent: number }>`
  width: ${({ percent }) => percent}%;
  height: inherit;
  position: absolute;
  z-index: 100;
  background-color: #fff;
  transition: width 0.2s ease-out;
`;

const TextWrap = styled.div`
  padding: 500px 20px;

  & > p {
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  & > img {
    width: 100%;
  }
`;

const InnerWrap = styled.div`
  position: relative;
  padding: 40px;
  width: 100%;
  z-index: 100;

  & > h2 {
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    margin-top: 100px;
  }
`;

const OctoImage = styled.img<{ percent: number }>`
  position: fixed;
  bottom: -300px;
  right: 0;
  width: 300px;
  opacity: 0.4;
  z-index: 1;
  transform: ${({ percent }) => `translateY(${-percent / 2}%)`};
  transition: transform 1s ease-out;
`;
