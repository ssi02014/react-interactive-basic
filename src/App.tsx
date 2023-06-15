import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

const MouseBasicPage = React.lazy(() => import("./pages/MouseBasic"));
const MouseOverPage = React.lazy(() => import("./pages/MouseOver"));
const SirUpPage = React.lazy(() => import("./pages/SirUp"));
const ScrollPage = React.lazy(() => import("./pages/Scroll"));
const BlogPage = React.lazy(() => import("./pages/Blog"));
const HorizontalParallaxPage = React.lazy(
  () => import("./pages/HorizontalParallax")
);
const Parallax1Page = React.lazy(() => import("./pages/ParallaxOne"));
const Parallax2Page = React.lazy(() => import("./pages/ParallaxTwo"));

function App() {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route path="/" element={<MouseBasicPage />} />
        <Route path="/mouse-over" element={<MouseOverPage />} />
        <Route path="/sir-up" element={<SirUpPage />} />
        <Route path="/scroll" element={<ScrollPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/parallax1" element={<Parallax1Page />} />
        <Route path="/parallax2" element={<Parallax2Page />} />

        <Route path="/horizontal" element={<HorizontalParallaxPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
