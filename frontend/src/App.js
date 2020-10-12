import React from 'react';
import './App.css';
import MenuItems from './components/MenuItems';

//it's uploading the react element in the mounting stage
function App() {
  return (
    <div className="App">
      <MenuItems/>
    </div>
  );
}

export default App;
