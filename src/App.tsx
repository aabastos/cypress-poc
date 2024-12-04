import { Header, MainContainer } from 'shared/components';
import { JobListingsPage } from 'job-listing';

import './App.css';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />

      <MainContainer>
        <Routes>
          <Route path="/" element={<JobListingsPage />} />
        </Routes>
      </MainContainer>
    </>
  );
}
