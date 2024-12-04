import classNames from "classnames";
import { JobListing } from "job-listing/domain";
import { JobListingStatus } from "job-listing/enums";
import { Link } from "react-router-dom";
import { Title } from "shared/components/atoms";

interface JobListingCardProps {
  jobListing: JobListing
}

export const JobListingCard = ({ jobListing }: JobListingCardProps) => {
  return (
    <Link
        to={`/listings/${jobListing.id}`}
        className={classNames(
          'flex justify-between',
          'p-6 md:p-8 w-full bg-white',
          'rounded-lg border border-neutral-light',
          'hover:border-neutral-darkest hover:border-2 hover:p-[23px] md:hover:p-[31px]',
        )}
      >
        <div className="flex flex-col">
          <Title
            size="heading"
            color={jobListing.status === JobListingStatus.Closed ? 'text-neutral-dark' : 'text-neutral-darkest'}
            className="line-clamp-1 text-ellipsis font-medium mb-4"
          >
            {jobListing.title}
          </Title>

          <div className="flex items-center gap-x-10 gap-y-4 mb-7 flex-wrap">

          </div>

          <div className="flex items-center gap-x-4 gap-y-7  md:gap-8 flex-wrap">
            <div className="flex gap-2">
            </div>
          </div>
        </div>
      </Link>
  )
};