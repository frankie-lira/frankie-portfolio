import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProjectGallery from './components/ProjectGallery';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<ProjectGallery />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;