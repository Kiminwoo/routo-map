import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map from './components/Map';

const App: React.FC = () => {
  return (
      <div>
          <h1>Routo API 지도 테스트</h1>
          <Map />
      </div>
  );
};

export default App
