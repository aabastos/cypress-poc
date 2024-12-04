import { JobListing } from "job-listing/domain";
import { JobListingCard } from "./JobListingCard";
import { Mock } from "test.utils";

describe('<JobListingCard />', () => {
  const jobListing = Mock<JobListing>({
    id: '1',
    title: 'Job Listing',
  })

  beforeEach(() => {
    cy.mount(<JobListingCard jobListing={jobListing} />);
  });

  it('should display the job listing title', () => {
    cy.findByText(jobListing.title).should('be.visible');
  });
});
