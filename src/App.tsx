import { Routes, Route, Link } from "react-router-dom";
import React, { Suspense } from "react";
import { styled } from "styled-components";

const MouseBasicPage = React.lazy(() => import("./pages/MouseBasic"));

function App() {
  return (
    <>
      <ListWrapper>
        <li>
          <Link to="/">1. 마우스 활용 기본</Link>
        </li>
        <li>
          <Link to="/abc">2. 다음 예제</Link>
        </li>
      </ListWrapper>
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path="/" element={<MouseBasicPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

const ListWrapper = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: blue;
    }
  }
`;

export default App;
