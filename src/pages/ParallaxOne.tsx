import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const SPEED = 0.1;

const ParallaxOne = () => {
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const subImageWrapperRef = useRef<HTMLDivElement | null>(null);
  const requestAnimationRef = useRef<number | null>(null);
  const targetX = useRef(0);

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!imageWrapperRef.current || !subImageWrapperRef.current) return;

    const imageAll: NodeListOf<HTMLDivElement> =
      imageWrapperRef.current.querySelectorAll(".parallaxImage");

    const scroll = () => {
      const scrollNum = window.scrollY;
      const totalNum = imageAll.length;

      [...imageAll]
        .filter((_, idx) => idx < 4)
        .forEach((item, idx) => {
          item.style.transform = `translateY(${
            -scrollNum / (2 * (totalNum - idx))
          }px)`;
        });
    };

    const mouseMove = (e: MouseEvent) => {
      const x = e.pageX - window.innerWidth / 2;

      setCursorPosition({ ...cursorPosition, x });
    };

    window.addEventListener("scroll", scroll);
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    if (!imageWrapperRef.current || !subImageWrapperRef.current) return;

    const imageAll: NodeListOf<HTMLDivElement> =
      imageWrapperRef.current.querySelectorAll(".parallaxImage");
    const subImage = subImageWrapperRef.current;

    const updateLoop = () => {
      const scrollNum = window.scrollY;
      const totalNum = imageAll.length;

      targetX.current += (cursorPosition.x - targetX.current) * SPEED;

      imageAll[4].style.transform = `scale(1.05) translate(${
        -targetX.current / 200
      }px, ${-scrollNum / (2 * (totalNum - 4))}px)`;

      imageAll[5].style.transform = `scale(1.05) translate(${
        -targetX.current / 100
      }px, ${-scrollNum / (2 * (totalNum - 5))}px)`;

      subImage.style.transform = `scale(1.1) translateX(${
        -targetX.current / 20
      }px )`;

      requestAnimationRef.current = requestAnimationFrame(updateLoop);
    };

    requestAnimationRef.current = requestAnimationFrame(updateLoop);

    return () => {
      if (requestAnimationRef.current) {
        cancelAnimationFrame(requestAnimationRef.current);
      }
    };
  }, [cursorPosition.x]);

  return (
    <Wrapper>
      <MainWrapper>
        <ImageWrapper ref={imageWrapperRef}>
          <MainParallaxImageWrapper className="parallaxImage" />
          <MainParallaxImageWrapper className="parallaxImage" />
          <MainParallaxImageWrapper className="parallaxImage" />
          <MainParallaxImageWrapper className="parallaxImage" />
          <MainParallaxImageWrapper className="parallaxImage" />
          <MainParallaxImageWrapper className="parallaxImage" />
        </ImageWrapper>
      </MainWrapper>

      <SubWrapper>
        <SubParallaxImageWrapper ref={subImageWrapperRef} />
        <SubInnerWrapper>
          <SubContentWrapper>
            <p>
              "On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this principle of selection: he rejects
              pleasures to secure other greater pleasures, or else he endures
              pains to avoid worse pains."
            </p>
          </SubContentWrapper>
        </SubInnerWrapper>
        <SubInnerWrapper>
          <SubContentWrapper>
            <p>
              "On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this principle of selection: he rejects
              pleasures to secure other greater pleasures, or else he endures
              pains to avoid worse pains."
            </p>
          </SubContentWrapper>
        </SubInnerWrapper>
      </SubWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  overflow-x: hidden;
  background: linear-gradient(#4b0220, #691c46);

  section {
    position: relative;
    width: 100%;
  }
`;

const MainWrapper = styled.section`
  padding-bottom: 50px;
`;

const ImageWrapper = styled.div`
  height: 100vh;
  overflow-y: hidden;

  @media only screen and (max-width: 768px) {
    height: 500px;
  }
`;

const MainParallaxImageWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: inherit;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

  &:nth-child(1) {
    background-image: url(src/assets/parallax1/main_0.png);
  }

  &:nth-child(2) {
    background-image: url(src/assets/parallax1/main_1.png);
  }

  &:nth-child(3) {
    background-image: url(src/assets/parallax1/main_2.png);
  }

  &:nth-child(4) {
    background-image: url(src/assets/parallax1/main_3.png);
  }

  &:nth-child(5) {
    background-image: url(src/assets/parallax1/main_4.png);
  }

  &:nth-child(6) {
    background-image: url(src/assets/parallax1/main_5.png);
  }
`;

const SubWrapper = styled.section`
  background: linear-gradient(black, #340e23, black);
`;

const SubInnerWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 100px 0 300px;
`;

const SubContentWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 40px;
  width: 700px;
  background-color: rgba(0, 0, 0, 0.6);

  p {
    font-size: 20px;
    line-height: 36px;
    color: #f3f3f3;
    margin: 20px 0;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SubParallaxImageWrapper = styled.div`
  position: relative;
  background: url(src/assets/parallax1/main_6.png) bottom center no-repeat;
  background-size: cover;
  height: 400px;
  width: 100%;
  top: -400px;
`;

export default ParallaxOne;
