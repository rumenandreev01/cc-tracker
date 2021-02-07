import './Coin.css';

const Coin = (coin) => {
    const {image,name,symbol,current_price,market_cap,price_change_percentage_24h,market_cap_change_24h} = coin.coin;

    return (
    <div className="coin-container">
        <div className="coin-row">
            <div className="coin">
                <img src={image} alt="crypto"/>
                <h1>{name}</h1>
                <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${current_price}</p>
                <p className="coin-volume">${market_cap.toLocaleString()}</p>
                {price_change_percentage_24h < 0 ?
                    <p className="coin-percent red">{price_change_percentage_24h.toFixed(2)}%</p> :
                    <p className="coin-percent green">{price_change_percentage_24h.toFixed(2)}%</p>
                }
                <p className='coin-marketcap'>
                    Mkt Cap: ${market_cap_change_24h.toLocaleString()}
                </p>
            </div>
        </div>
    </div>
    )
}

export default Coin
