import React from 'react';
import logo from './PNG120.png'

const Table = ({coins}) => {

    const style ={
        "width":"20%",
        "height": "50%"
    }
   
  return (
      <div>


    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Sym</th>
          <th>MarketCap</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      { (coins.length > 0) ? coins.map( (coin, key) => {
           const count = parseInt(key, 10)
           return (
            <tr key={ key }>
              <td>{ 1 + count}</td>
              <td>{coins[key].CoinInfo.FullName}</td>
              <td>{coins[key].CoinInfo.Name}</td>
              <td>{ coins[key].DISPLAY.USD.MKTCAP }</td>
              <td>{ coins[key].DISPLAY.USD.PRICE }</td>

            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
    <img src={logo} alt="logo" style={style}/>
    </div>
    
  );
}

export default Table