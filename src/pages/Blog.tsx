import { useEffect, useRef } from "react";
import { styled } from "styled-components";

const Blog = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const coverRef = useRef<HTMLDivElement | null>(null);
  const dimmedRef = useRef<HTMLDivElement | null>(null);
  const coverTitleRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const progressBar = useRef<HTMLDivElement | null>(null);

  const getCalculatedPercent = (num: number, totalNum: number) => {
    return +((num / totalNum) * 100).toFixed(0);
  };

  useEffect(() => {
    if (
      !headerRef.current ||
      !coverRef.current ||
      !dimmedRef.current ||
      !coverTitleRef.current ||
      !contentRef.current ||
      !progressBar.current
    ) {
      return;
    }

    const coverHeight = coverRef.current.clientHeight;

    coverRef.current.style.height = window.innerHeight + "px";
    contentRef.current.style.marginTop = coverHeight + "px";

    const scroll = () => {
      if (
        !headerRef.current ||
        !coverRef.current ||
        !dimmedRef.current ||
        !coverTitleRef.current ||
        !contentRef.current ||
        !progressBar.current
      ) {
        return;
      }

      const tempScrollHeight = +window.scrollY.toFixed(0);
      // 퍼센트 계산
      const calculatedPercent = getCalculatedPercent(
        window.scrollY,
        document.body.scrollHeight - window.innerHeight
      );

      progressBar.current.style.width = calculatedPercent + "%";

      if (tempScrollHeight >= coverHeight) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");

        coverTitleRef.current.style.top = `${tempScrollHeight / 3}px`;

        dimmedRef.current.style.backgroundColor = `rgba(0, 0, 0, ${
          0.4 + tempScrollHeight / 1000
        })`;

        coverRef.current.style.backgroundPosition = `center ${
          -tempScrollHeight / 10
        }px`;
      }
    };

    window.addEventListener("scroll", scroll);
    () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <Wrapper>
      <Header ref={headerRef}>
        <HeaderInnerContainer>
          <h1>Blog</h1>
        </HeaderInnerContainer>
        <ProgressWrapper>
          <div ref={progressBar} />
        </ProgressWrapper>
      </Header>
      <CoverWrapper ref={coverRef}>
        <Dimmed ref={dimmedRef} />
        <CoverTitleContainer ref={coverTitleRef}>
          <h1>제목이지롱</h1>
          <p>부제목 이지롱</p>
        </CoverTitleContainer>
      </CoverWrapper>
      <ContentWrapper ref={contentRef}>
        <ContentInnerContainer>
          <h4>The standard Lorem Ipsum passage, used since the 1500s</h4>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <h4>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h4>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
          <h4>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h4>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
          <h4>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h4>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
          <h4>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h4>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
          <h4>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h4>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
          <h4>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h4>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
          <h4>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h4>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>

          <h4>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h4>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>

          <h4>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h4>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
        </ContentInnerContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Blog;

const Wrapper = styled.div`
  overflow-x: hidden;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Header = styled.header`
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 1100;

  &.fixed {
    position: fixed;
    background: rgba(255, 255, 255, 0.8);
  }

  &.fixed div:first-of-type {
    display: block;

    h1 {
      color: black;
    }
  }

  &.fixed div:last-of-type {
    color: #000;
    display: block;
  }
`;

const HeaderInnerContainer = styled.div`
  position: relative;
  padding: 20px 20px;

  & > h1 {
    font-size: 15px;
    color: #fff;
  }
`;

const ProgressWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #d0d0d0;
  display: none;

  & > div {
    width: 0;
    height: inherit;
    position: absolute;
    z-index: 100;
    background-color: black;
    transition: width 0.4s ease-out;
  }
`;

const CoverWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black url(src/assets/blog/bg.jpg) center center / cover no-repeat;
`;

const Dimmed = styled.div`
  position: absolute;
  width: 100%;
  height: inherit;
  background-color: rgba(0, 0, 0, 0.4);
`;

const CoverTitleContainer = styled.div`
  position: relative;
  text-align: center;
  z-index: 100;

  h1 {
    color: #fff;
    font-size: 32px;
    margin-bottom: 6px;
  }

  p {
    color: #cecece;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1000;
  background-color: #fff;

  h4 {
    font-size: 24px;
    margin-bottom: 12px;
  }
`;

const ContentInnerContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 30px;
`;
