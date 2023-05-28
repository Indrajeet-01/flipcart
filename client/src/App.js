
import { Box } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header/>
      <Box style={{marginTop:54}}>
        <Home/>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
