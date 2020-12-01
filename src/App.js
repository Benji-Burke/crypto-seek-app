import { Component } from 'react';
import axios from 'axios';
import Table from './Table';
const $marketCapNumber = 100;

const endpoint = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${$marketCapNumber}&tsym=USD&?apikey=6ccfcc7c18aa8c9a843472090f99f174349d955a89cbfc6a69b0f78f3ace71c5`;


console.log("Here is the data: " + endpoint)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: 0,
      coins: [],
      coinsName: []

    };
  }

  async getData() {
    const response = await axios.get(endpoint)
    const data = response.data;
    console.log(data.Data)
    this.setState({
      coins: data.Data
    })
    
  }

  async componentDidMount() {
    await this.getData();
  }

  render() {

    return (
      <div>
       <Table coins={this.state.coins}/>
    </div>

    );
  }
}

export default App;
