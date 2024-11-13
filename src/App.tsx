import './App.css';
import { Container } from '@mui/material';
import Header from './components/Header/Header.tsx';
import HomeContainer from './containers/Home/HomeContainer.tsx';
import { Route, Routes } from 'react-router-dom';
import SearchForm from './components/SearchForm/SearchForm.tsx';

const App = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <Container>
        <Routes>
          <Route path="/:id" element={<HomeContainer />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
