import { Route, Routes } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Home from './pages/Home';
import Videos from './pages/Videos';

function App() {
  return (
    <div>
      {/* <h2>Navbar</h2> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <h2>Footer</h2> */}
    </div>
  );
}

export default App;
