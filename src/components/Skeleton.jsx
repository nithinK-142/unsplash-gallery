
const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map((_, index) => (
    <div className="animate-pulse" key={`element-${index}`}>
        <div className="bg-gray-300 rounded-lg h-72"></div>
    </div>
  ))
}

export default Skeleton
