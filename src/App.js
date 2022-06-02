import { useState } from 'react';
import Header from './components/header/Header'
import SearchResult from './components/searchResults/SearchResult';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [cityName, setCityName] = useState('')
  const [datas, setDatas] = useState([])
  const [formSubmited , setFormSubmited] = useState(false)
  const [error , setError] = useState()


  const searchHandler = () => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=faad4ce008be4f7aa4c90434220206&q=${cityName.toLocaleLowerCase()}&days=4&api=no&alerts=no`)
      .then(response => response.json())
      .then(data => setDatas(data))
      .catch (err => setError(err))
      setFormSubmited(true)
  }

  return (
    <div>
      <Header />
      <div className="searchBar" style={formSubmited ? {height : '380px'} : {height : '38.7rem'}}>
        <div className="searchWrapper">
          <div className="searchBarText">
            <h3>Discover the Climates</h3>
            <h4>Search the City to Have Details About There Weather Info</h4>
          </div>
          <div className='searchBarForm'>
            <form>
              <h4>City : </h4>
              <input type="text" placeholder='Enter City Name ...' value={cityName} onChange={e => setCityName(e.target.value)} />
            </form>
            <button className='searchSubmitButton' onClick={searchHandler}><SearchIcon /> Search</button>
          </div>
        </div>
      </div>
      {datas.error ? (
        <div className='cityNotFound'>
          <h1>{datas.error.message}</h1>
        </div>
        ) : (
        <SearchResult data = {datas} />
      )}
    </div>
  );
}

export default App;
