import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './components/Notes.js'
 
function App() {
  return (
    <> 
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes/>}></Route>
        </Routes>
      </BrowserRouter>



    </>



  );
}

export default App;
