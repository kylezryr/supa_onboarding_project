'use client'

import HomePage from "./pages/home";
import Skills from "./pages/skills";
import NavBar from "./components/NavBar";
import Lessons from "./pages/lessons";
import Questions from "./pages/questions";
import Type from "./pages/type";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<Skills />} />
        <Route
          path="/boundingBox"
          element={<Type type="Bounding Box" navigation="boundingBox" />}
        />
        <Route
          path="/boundingBox/red1"
          element={<Lessons difficulty="Red" type="Bounding Box" level={1} />}
        />
        <Route
          path="/boundingBox/red1/lesson1"
          element={
            <Questions
              difficulty="Red"
              type="Bounding Box"
              level={1}
              lessonNumber={1}
            />
          }
        />
        <Route
          path="/boundingBox/red1/lesson2"
          element={
            <Questions
              difficulty="Red"
              type="Bounding Box"
              level={1}
              lessonNumber={2}
            />
          }
        />
        <Route
          path="/boundingBox/red2"
          element={<Lessons difficulty="Red" type="Bounding Box" level={2} />}
        />
        <Route
          path="/boundingBox/yellow1"
          element={
            <Lessons difficulty="Yellow" type="Bounding Box" level={1} />
          }
        />
        <Route
          path="/boundingBox/green1"
          element={
            <Lessons difficulty="Green" type="Bounding Box" level={1} />
          }
        />
        <Route
          path="/semantic"
          element={<Type type="Semantic" navigation="semantic" />}
        />
        <Route
          path="/semantic/red1"
          element={<Lessons difficulty="Red" type="Semantic" level={1} />}
        />
        <Route
          path="/semantic/red2"
          element={<Lessons difficulty="Red" type="Semantic" level={2} />}
        />
        <Route
          path="/semantic/yellow1"
          element={<Lessons difficulty="Yellow" type="Semantic" level={1} />}
        />
        <Route
          path="/semantic/green1"
          element={<Lessons difficulty="Green" type="Semantic" level={1} />}
        />
        <Route
          path="/polygon"
          element={<Type type="Polygon" navigation="polygon" />}
        />
        <Route
          path="/polygon/red1"
          element={<Lessons difficulty="Red" type="Polygon" level={1} />}
        />
        <Route
          path="/polygon/yellow1"
          element={<Lessons difficulty="Yellow" type="Polygon" level={1} />}
        />
        <Route
          path="/polygon/green1"
          element={<Lessons difficulty="Green" type="Polygon" level={1} />}
        />
      </Routes>
    </Router>
  </>
  );
}
