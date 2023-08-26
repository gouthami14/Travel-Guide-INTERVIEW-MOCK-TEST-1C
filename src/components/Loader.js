import Loader from 'react-loader-spinner'

const CustomLoader = () => (
  <div
    data-testid="loader"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
  </div>
)

export default CustomLoader
