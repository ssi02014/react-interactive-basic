import { Routes, Route, Link } from "react-router-dom";
import React, { Suspense } from "react";
import { styled } from "styled-components";

const MouseBasicPage = React.lazy(() => import("./pages/MouseBasic"));
const MouseOverPage = React.lazy(() => import("./pages/MouseOver"));
const SirUpPage = React.lazy(() => import("./pages/SirUp"));
const ScrollPage = React.lazy(() => import("./pages/Scroll"));
const BlogPage = React.lazy(() => import("./pages/Blog"));

function App() {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route path="/" element={<MouseBasicPage />} />
        <Route path="/mouse-over" element={<MouseOverPage />} />
        <Route path="/sir-up" element={<SirUpPage />} />
        <Route path="/scroll" element={<ScrollPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Suspense>
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
