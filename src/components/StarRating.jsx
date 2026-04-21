import { useState } from "react"
import { FaStar } from "react-icons/fa"

const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0)

    const star = Array.from({length: totalStars })

    const handleClick = (totalStars) => {
        setRating(totalStars)
    }
  return (
    <div style={styles.container}>
        <div style={styles.stars}>
            {star.map((_, index) => {
                const starValue = index + 1
                return (
                    <FaStar
                    key={index}
                    onClick={() => handleClick(starValue)}
                    size={40}
                    color={starValue <= rating ? "#ffc107" : "#e4e5e9"}
                    style={styles.star}
                    />
                )
            })}
        </div>
        <div style={styles.text}>Total bintang: {rating}</div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    padding: "32px 48px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  stars: {
    display: "flex",
    gap: "8px",
  },
  star: {
    cursor: "pointer",
    transition: "transform 0.15s ease, color 0.15s ease",
  },
  text: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#666",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  },
}

export default StarRating
