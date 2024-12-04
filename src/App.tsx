import { Header, MainContainer } from 'shared/components';
import { JobListingsPage } from 'job-listing';

import './App.css';

export const App = () => {
  return (
    <>
      <Header />

      <MainContainer>
        <JobListingsPage />
      </MainContainer>
    </>
  );
}
