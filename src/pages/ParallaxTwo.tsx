import { useEffect, useRef } from "react";
import { styled } from "styled-components";

const ParallaxOne = () => {
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!imageWrapperRef.current) return;

    const imageAll: NodeListOf<HTMLDivElement> =
      imageWrapperRef.current.querySelectorAll(".parallaxImage");

    const scroll = () => {
      const scrollNum = window.scrollY;
      const totalNum = imageAll.length;

      [...imageAll].forEach((item, idx) => {
        item.style.transform = `perspective(400px) translate3d(0, 0, ${
          scrollNum / (10 * (totalNum - idx))
        }px)`;
      });
    };

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

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
          <MainParallaxImageWrapper className="parallaxImage" />
        </ImageWrapper>
      </MainWrapper>

      <SubWrapper>
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
      <SubWrapper>
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
      <SubWrapper>
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
  position: fixed;
  top: 0;
  padding-bottom: 50px;
`;

const ImageWrapper = styled.div`
  height: 100vh;
  overflow-y: hidden;

  @media only screen and (max-width: 768px) {
    height: 70vh;
  }
`;

const MainParallaxImageWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: inherit;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  perspective: 400px;
  transition: all 0.3s ease-out;

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

  &:nth-child(7) {
    background-image: url(src/assets/parallax1/main_6.png);
  }
`;

const SubWrapper = styled.section`
  z-index: 10;
  padding-top: 100vh;
  min-height: 60vh;
`;

const SubInnerWrapper = styled.div`
  position: relative;
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

export default ParallaxOne;
