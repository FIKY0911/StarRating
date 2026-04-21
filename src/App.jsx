import StarRating from "./components/StarRating"

function App() {
  return (
    <div style={styles.page}>
      <StarRating/>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
}

export default App
