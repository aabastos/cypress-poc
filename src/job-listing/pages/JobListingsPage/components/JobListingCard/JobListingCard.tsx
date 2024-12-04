import { JobListing } from "job-listing/domain";

interface JobListingCardProps {
  jobListing: JobListing
}

export const JobListingCard = ({ jobListing }: JobListingCardProps) => {
  return <li>{jobListing.title}</li>;
};