import { Routes, Route, Link } from "react-router-dom";
import React, { Suspense } from "react";
import { styled } from "styled-components";

const MouseBasicPage = React.lazy(() => import("./pages/MouseBasic"));
const MouseOver = React.lazy(() => import("./pages/MouseOver"));
const SirUp = React.lazy(() => import("./pages/SirUp"));

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
      </ListWrapper>
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path="/" element={<MouseBasicPage />} />
          <Route path="/mouse-over" element={<MouseOver />} />
          <Route path="/sir-up" element={<SirUp />} />
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
