
import './App.css';
import IndexPage from './component/Main';
import User from './component/User';
import Admin from './Admin';
import { Routes,Route } from 'react-router-dom';
import Register from './component/Registration';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path="/link" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
