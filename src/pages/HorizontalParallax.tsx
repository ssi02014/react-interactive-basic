import { useEffect, useRef } from "react";
import { styled } from "styled-components";

const HorizontalParallax = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const item1 = useRef<HTMLDivElement | null>(null);
  const item2 = useRef<HTMLDivElement | null>(null);
  const item3 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const clientHeight = scrollRef?.current?.clientHeight || 0;

    const scroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 0 && scrollY < clientHeight) {
        item1.current?.classList.add("active");
        item2.current?.classList.remove("active");
      } else if (scrollY > clientHeight && scrollY < clientHeight * 2) {
        item1.current?.classList.remove("active");
        item2.current?.classList.add("active");
        item3.current?.classList.remove("active");
      } else if (scrollY > clientHeight * 2 && scrollY < clientHeight * 3) {
        item2.current?.classList.remove("active");
        item3.current?.classList.add("active");
      } else {
        item3.current?.classList.remove("active");
      }
    };

    window.addEventListener("scroll", scroll);
    () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <Wrapper>
      <ContentWrapper ref={contentRef}>
        <ScrollWrapper ref={scrollRef}>
          <ScrollContent ref={item1} className="active">
            <h1>프론트엔드 개발자</h1>
            <p>전민재</p>
          </ScrollContent>
          <ScrollContent ref={item2}>
            <h1>백엔드 개발자</h1>
            <p>정연재</p>
          </ScrollContent>
          <ScrollContent ref={item3}>
            <h1>IT 디자이너</h1>
            <p>모던 애자일</p>
          </ScrollContent>
        </ScrollWrapper>
      </ContentWrapper>

      <div
        style={{ width: "100%", height: "100vh", backgroundColor: "#eb4949" }}
      >
        <button onClick={() => console.log("zz")}>안녕하세요</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const ContentWrapper = styled.div`
  height: 400vh;
  width: 100%;
  background-color: #e46e6e;

  img {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ScrollWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScrollContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: all 0.5s ease;
  transform: translateX(100px);

  &.active {
    opacity: 1;
    transform: translateX(0);
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 24px;
  }
`;

export default HorizontalParallax;
