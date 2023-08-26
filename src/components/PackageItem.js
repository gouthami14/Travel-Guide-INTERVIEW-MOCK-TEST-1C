const PackageItem = ({name, imageUrl}) => (
  <div className="package-item">
    <img src={imageUrl} alt={name} />
    <p>{name}</p>
  </div>
)
export default PackageItem
