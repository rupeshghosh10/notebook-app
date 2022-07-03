import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Home from './pages/Home';

const App = () => {

  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <BrowserRouter>
      <div className={`min-h-screen flex flex-col ${darkTheme ? 'dark' : ''}`}>
        <Navbar
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
        />
        <main className='flex-grow transition-colors duration-300 dark:bg-gray-900'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/add' element={<Add />} />
            <Route exact path='/edit/:id' element={<Edit />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
