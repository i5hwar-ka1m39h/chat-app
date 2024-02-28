import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ChatRoom from './chatroom';
import Home from './home';

function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/chatroom" element={<ChatRoom />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
