import './App.css';
import Navigation from './components/Navigation/Navigation';
import {Route, Routes} from 'react-router-dom'
import AllQuotes from './components/pages/AllQuotes';
import NewQuote from './components/pages/NewQuote';
import Show from './components/pages/Show';
import EditQuote from './components/pages/EditQuote';

function App() {
  return (
    <div>
      <Navigation/>

      <Routes>
        <Route path='/' element={<AllQuotes/>} />
        <Route path='/new' element={<NewQuote/>} />
        <Route path='/show/:id' element={<Show/>} />
        <Route path='/:id/edit' element={<EditQuote/>} />
      </Routes>

    </div>
  );
}

export default App;
