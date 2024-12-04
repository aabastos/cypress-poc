import { Mock } from "test.utils";
import { JobListingsPage } from "job-listing/pages/JobListingsPage/JobListingsPage";
import { JobListing } from "job-listing/domain";

describe('<JobListingsPage />', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/listings?page=1', {
      listings: [Mock<JobListing>({ id: '1', title: 'Job Listing' })],
    });

    cy.mount(<JobListingsPage />);
  });

  it('should render', () => {
    cy.findByText('Job Listing').should('be.visible');
  });
});