import { Routes, Route, Link } from "react-router-dom";
import React, { Suspense } from "react";
import { styled } from "styled-components";

const MouseBasicPage = React.lazy(() => import("./pages/MouseBasic"));
const MouseOver = React.lazy(() => import("./pages/MouseOver"));

function App() {
  return (
    <>
      <ListWrapper>
        <li>
          <Link to="/">1. 마우스를 활용한 인터랙티브</Link>
        </li>
        <li>
          <Link to="/mouse-over">2. 센스있는 mouse over UI 구현</Link>
        </li>
      </ListWrapper>
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path="/" element={<MouseBasicPage />} />
          <Route path="/mouse-over" element={<MouseOver />} />
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
