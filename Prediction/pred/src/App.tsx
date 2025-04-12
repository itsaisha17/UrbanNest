import React from 'react';
import PlantDiseaseDetector from './PlantDiseaseDetector.tsx';
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom'
import SoilQualityPredictor from './SoilQualityPredictor.tsx';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PlantDiseaseDetector/>}/>
      <Route path='/Soil' element={<SoilQualityPredictor/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
