import { Type } from "class-transformer"
import { JobListingStatus } from "job-listing/enums"

class Company {
  name: string
  website: string
  marketTypeId: number | null
}

export class JobListing {
  id: string 
  title: string
  status: JobListingStatus

  @Type(() => Company)
  company: Company
}