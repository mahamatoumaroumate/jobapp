import { FaCalendarAlt, FaLocationArrow, FaSuitcase } from 'react-icons/fa'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { deleteJob, handleChange, setEditJob } from '../features/job/jobSlice'
const Jobs = ({ job }) => {
  const date = moment(job.createdAt).format('MMM Do , YY')
  return (
    <div className='job' key={job._id}>
      <div className='job-info'>
        <h1>{job.company.charAt(0)}</h1>
        <article>
          <h3>{job.position}</h3>
          <h4>{job.company}</h4>
        </article>
      </div>
      <div className='job-detail'>
        <section>
          <h4>
            <FaLocationArrow />
            <span>{job.jobLocation}</span>
          </h4>
          <h4>
            <FaSuitcase />
            <span>{job.jobType}</span>
          </h4>
        </section>
        <section>
          <h4>
            <FaCalendarAlt />
            <span>{date}</span>
          </h4>
          <h3 className={`${job.status}`}>{job.status}</h3>
        </section>
      </div>
      <div className='btn-container'>
        <Link
          to='/add-job'
          className='btn btn-edit'
          onClick={() => {
            dispatch(
              setEditJob({
                editJobId: job._id,
                position: job.position,
                company: job.company,
                jobLocation: job.jobLocation,
                jobType: job.jobType,
                status: job.status,
              })
            )
          }}
        >
          Edit
        </Link>
        <button
          className='btn btn-delete'
          onClick={() => dispatch(deleteJob(job._id))}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
export default Jobs
