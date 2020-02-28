import React from 'react';
import Table from './components/Table/Table';
import StartMenu from './components/StartMenu/StartMenu'
import Paginator from './components/Paginator/Paginator'
import './App.css';

const BIG_LIST = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const SMALL_LIST = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.onStartButtonHandler = this.onStartButtonHandler.bind(this);
    this.state = {
      isStarted: false,
      data: [],
    }
  }

  async fetchData() {

    const newData = await fetch(BIG_LIST);
    const json = await newData.json();
    this.setState({
      data: json.slice(),
    });
  }
  
  onStartButtonHandler() {
    console.log('test');
    this.setState({
      isStarted: true,
    });
    this.fetchData();
  }

  render() {
    return this.state.isStarted ? (
      <div className='app_container'>
          <Table data={this.state.data}></Table>
          <Paginator></Paginator>
      </div>
     ) :
      <StartMenu onStartButtonHandler={this.onStartButtonHandler}></StartMenu>;
  }
}

export default App;