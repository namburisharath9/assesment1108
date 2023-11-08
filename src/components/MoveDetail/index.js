import {
  RiArrowRightCircleFill,
  RiHome4Fill,
  RiDatabase2Fill,
} from 'react-icons/ri'
import {MdDateRange} from 'react-icons/md'
import {TiTick} from 'react-icons/ti'
import {FiAlertTriangle} from 'react-icons/fi'
import './index.css'

const MoveDetail = props => {
  const {eachOne} = props
  const {
    fromaddress,
    movingTo,
    propertySize,
    totalItems,
    distance,
    dateCreated,
    userId,
  } = eachOne
  const {fromAddress} = fromaddress

  return (
    <>
      <div className="first-container">
        <div>
          <p>From</p>
          <p>{fromAddress}</p>
        </div>
        <div>
          <RiArrowRightCircleFill />
        </div>
        <div>
          <p>To</p>
          <p>{movingTo}</p>
        </div>
        <div>
          <p>Request#</p>
          <p>{userId}</p>
        </div>
      </div>
      <div className="second-container">
        <div className="inner-cont">
          <RiHome4Fill />
          <p>{propertySize}</p>
        </div>
        <div className="inner-cont">
          <RiDatabase2Fill />
          <p>{totalItems}</p>
        </div>
        <div className="inner-cont">
          <MdDateRange />
          <p>{dateCreated}</p>
        </div>
        <div className="inner-cont">
          <TiTick />
          <p>Is Flexible</p>
        </div>
        <div>
          <button>View More Details</button>
        </div>
        <div>
          <button>Quote Awaiting</button>
        </div>
      </div>
      <div>
        <div className="last-container">
          <FiAlertTriangle />
          <p>Disclaimer: Please update your move before two days of shifting</p>
        </div>
        <hr />
      </div>
    </>
  )
}

export default MoveDetail
