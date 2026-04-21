import { useState } from "react"
import { FaStar } from "react-icons/fa"

const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0)

    const star = Array.from({length: totalStars })

    const handleClick = (totalStars) => {
        setRating(totalStars)
    }
  return (
    <div className="star-rating-container">
        <div className="star-rating-stars">
            {star.map((_, index) => {
                const starValue = index + 1
                return (
                    <FaStar
                    key={index}
                    onClick={() => handleClick(starValue)}
                    size={40}
                    color={starValue <= rating ? "#ffc107" : "#e4e5e9"}
                    className="star-rating-star"
                    />
                )
            })}
        </div>
        <div className="star-rating-text">Total bintang: {rating}</div>
    </div>
  )
}

export default StarRating
