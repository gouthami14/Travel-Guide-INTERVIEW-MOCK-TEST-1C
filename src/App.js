import React, {Component} from 'react'
import './App.css'
import CustomLoader from './components/Loader'
import PackageItem from './components/PackageItem'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      packages: [],
    }
  }

  componentDidMount() {
    this.fetchPackages()
  }

  fetchPackages = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/tg/packages')
      const data = await response.json()
      this.setState({packages: data.packages, isLoading: false})
    } catch (error) {
      console.error('Error fetching packages:', error)
      this.setState({isLoading: false})
    }
  }

  render() {
    const {isLoading, packages} = this.state

    return (
      <div className="App">
        <h1 className="main-heading">Travel Guide</h1>
        <ul className="feature-list">
          <li>Exciting Destinations</li>
          <li>Expert Guides</li>
        </ul>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <div className="package-list">
            {packages.length > 0 ? (
              packages.map(packageItem => (
                <div key={packageItem.id}>
                  <h2>{packageItem.name}</h2>
                  <p>{packageItem.description}</p>
                  <img src={packageItem.image_url} alt={packageItem.name} />
                </div>
              ))
            ) : (
              <p>No packages available to display.</p>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default App
