import { useEffect, useState } from "react";

import { JobListing } from "job-listing/domain";
import { useNetwork } from "shared/hooks";

export const useJobListingsList = () => {
  const [jobListings, setJobListings] = useState<Array<JobListing>>([]);
  const { get } = useNetwork();

  const fetchJobListings = async () => {
    const response = await get<{ listings: Array<JobListing> }>('listings?page=1');
    setJobListings(response.data.listings);
  };

  useEffect(() => {
    fetchJobListings();
  }, []);

  return { jobListings };
};