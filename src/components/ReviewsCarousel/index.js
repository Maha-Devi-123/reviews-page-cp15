import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  decrease = () => {
    const {index} = this.state
    let currentIndex
    if (index === 0) {
      currentIndex = this.setState({index: 0})
    } else {
      currentIndex = this.setState(prevState => ({
        index: prevState.index - 1,
      }))
    }
    return currentIndex
  }

  increase = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    let currentIndex
    if (index === reviewsList.length - 1) {
      currentIndex = this.setState({index: reviewsList.length - 1})
    } else {
      currentIndex = this.setState(prevState => ({
        index: prevState.index + 1,
      }))
    }
    return currentIndex
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="container">
        <h1 className="review-head">Reviews</h1>
        <div className="btn-can">
          <button
            className="btn"
            data-testid="leftArrow"
            onClick={this.decrease}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <div className="profile-can">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="description">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            data-testid="rightArrow"
            className="btn"
            onClick={this.increase}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
