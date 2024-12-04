import { useJobListingsList } from "job-listing/hooks";
import { JobListingCard } from "./components";

export const JobListingsPage = () => {
  const { jobListings } = useJobListingsList();

  return (
    <ul>
      {jobListings.map((jobListing) => (
        <JobListingCard jobListing={jobListing} />
      ))}
    </ul>
  );
};