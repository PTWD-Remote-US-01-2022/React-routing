import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './page/Home';
import Profile from './page/Profile';
import Tasks from './page/Tasks';
import TaskDetail from './page/TaskDetail';
import Error from './page/Error';

function App() {
  const [user, setUser] = useState('Joey');
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile user={user} />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="tasks/:taskId" element={<TaskDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
