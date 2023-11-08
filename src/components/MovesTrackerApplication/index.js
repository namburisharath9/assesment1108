import {Component} from 'react'
import {FaShuttleVan} from 'react-icons/fa'
import {ImProfile} from 'react-icons/im'
import {RiDraftLine, RiLogoutCircleFill} from 'react-icons/ri'

import MoveDetail from '../MoveDetail'
import './index.css'

class MovesTrackerApplication extends Component {
  state = {movesList: []}

  componentDidMount() {
    this.getMovesDetails()
  }

  getMovesDetails = async () => {
    const {movesList} = this.state
    const apiUrl =
      'https://run.mocky.io/v3/3d59aba6-f03d-44b5-aa8c-1fac10657d3b'
    const response = await fetch(apiUrl)
    const data = await response.json()
    if (response.ok === true) {
      console.log(data)
      const dataFetched = data.Customer_Estimate_Flow
      console.log(dataFetched)
      const updatedData = dataFetched.map(eachItem => ({
        callBack: eachItem.call_back,
        customStatus: eachItem.custom_status,
        dateCreated: eachItem.date_created,
        dateOfCancel: eachItem.date_of_cancel,
        dateOfComplete: eachItem.date_of_complete,
        distance: eachItem.distance,
        estimateAmount: eachItem.estimateAmount,
        estimateComparison: eachItem.estimate_comparison,
        estimateId: eachItem.estimate_id,
        estimateStatus: eachItem.estimate_status,
        fromaddress: eachItem.from_address,
        items: eachItem.items,
        moveDateFlexible: eachItem.move_date_flexible,
        movingFrom: eachItem.moving_from,
        movingOn: eachItem.moving_on,
        movingTo: eachItem.moving_to,
        newElevatorAvailability: eachItem.new_elevator_availability,
        newFloorNo: eachItem.new_floor_no,
        newHouseAdditionalInfo: eachItem.new_house_additional_info,
        newParkingDistance: eachItem.new_parking_distance,
        oldElevatorAvailability: eachItem.old_elevator_availability,
        oldFloorNo: eachItem.old_floor_no,
        oldHouseAdditionalInfo: eachItem.old_house_additional_info,
        oldParkingDistance: eachItem.old_parking_distance,
        orderDate: eachItem.order_date,
        orderReviewed: eachItem.order_reviewed,
        packingService: eachItem.packing_service,
        propertySize: eachItem.property_size,
        serviceType: eachItem.service_type,
        status: eachItem.status,
        storageItems: eachItem.storage_items,
        successfulPayments: eachItem.successfulPayments,
        toAddress: eachItem.to_address,
        totalItems: eachItem.total_items,
        unpackingService: eachItem.unpacking_service,
        userId: eachItem.user_id,
      }))
      console.log(updatedData)
      this.setState({movesList: updatedData})
    }
  }

  renderMoves = () => (
    <>
      <div className="left-container">
        <button className="button-nav">
          <FaShuttleVan />
          <p>MY MOVES</p>
        </button>
        <button className="button-nav">
          <ImProfile />
          <p>MY PROFILE</p>
        </button>
        <button className="button-nav">
          <RiDraftLine />
          <p>GET QUOTE</p>
        </button>
        <button className="button-nav">
          <RiLogoutCircleFill />
          <p>LOG OUT</p>
        </button>
      </div>
    </>
  )

  render() {
    const {movesList} = this.state

    console.log(movesList)
    return (
      <div className="bg-container">
        <div>{this.renderMoves()}</div>
        <div>
          <h1>My Moves</h1>
          <div>
            {movesList.map(eachOne => (
              <MoveDetail eachOne={eachOne} key={eachOne.estimateId} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MovesTrackerApplication
