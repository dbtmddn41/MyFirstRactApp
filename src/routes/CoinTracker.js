import { useState, useEffect } from "react"

function CoinConverter({coins}) {
    const [assets, setAssets] = useState(0);
    const [coinIdx, setCoinIdx] = useState(-1)
    const onChange = (event) => setAssets(event.target.value);
    const onSelect = (event) => {
        // setCoinIdx()
        console.log(coins[event.target.value]);
        setCoinIdx(event.target.value)
    }
    return (
        <div>
            <select onChange={onSelect} value={coinIdx}>
                <option key="defualt" value={-1}>선택하시오</option>
                {coins.map((coin, idx) => <option key={coin.id} value={idx}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>)}
            </select>
            <h3>Your available assets:</h3>
            <input type="number" value={assets} onChange={onChange} placeholder="가용 자산을 입력하세요"></input>
            {coinIdx !== -1 ? <p>{assets} USD {"=>"} {assets / coins[coinIdx].quotes.USD.price} {coins[coinIdx].symbol}</p> : null}
        </div>
    )
}

function CoinTracker() {
    const [loading, setLoading] = useState(true)
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <h1>The Coins! ({coins.length})</h1>
            {loading ? <strong>Loading...</strong> : <CoinConverter coins={coins}/>}
        </div>
    )
}

export default CoinTracker;