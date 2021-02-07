import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';


const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(API_URL).then(res=> {
      setData(res.data);
    }).catch(error=>console.log(error));
    },[])

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const filteredData = data.filter(coin=>
      coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Select a currency</h1>
        <form>
          <input type="text" placeholder="Enter currency name" className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      {filteredData.map(coin=>{return <Coin key={coin.id} coin={coin}/>})}
    </div>
  );
}

export default App;
