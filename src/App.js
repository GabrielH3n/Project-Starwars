import React from 'react';
import './App.css';
import Table from './pages/Table';
import ApiProvider from './context/ApiProvider';

function App() {
  return (
    <ApiProvider>
      <Table />
    </ApiProvider>
  );
}

export default App;
