import { Routes, Route, Link } from "react-router-dom";
import React, { Suspense } from "react";
import { styled } from "styled-components";

const MouseBasicPage = React.lazy(() => import("./pages/MouseBasic"));
const MouseOverPage = React.lazy(() => import("./pages/MouseOver"));
const SirUpPage = React.lazy(() => import("./pages/SirUp"));
const ScrollPage = React.lazy(() => import("./pages/Scroll"));

function App() {
  return (
    <>
      <ListWrapper>
        <li>
          <Link to="/">1. MouseBasic 페이지</Link>
        </li>
        <li>
          <Link to="/mouse-over">2. MouseOver 페이지</Link>
        </li>
        <li>
          <Link to="/sir-up">3. SirUp 페이지</Link>
        </li>
        <li>
          <Link to="/sir-up">4. Scroll 페이지</Link>
        </li>
      </ListWrapper>
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path="/" element={<MouseBasicPage />} />
          <Route path="/mouse-over" element={<MouseOverPage />} />
          <Route path="/sir-up" element={<SirUpPage />} />
          <Route path="/scroll" element={<ScrollPage />} />
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
