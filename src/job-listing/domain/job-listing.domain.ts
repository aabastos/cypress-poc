import { JobListingStatus } from "job-listing/enums"

export class JobListing {
  id: string 
  title: string
  status: JobListingStatus
}