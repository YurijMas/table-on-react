import React from 'react';
import Table from './components/Table/Table';
import StartMenu from './components/StartMenu/StartMenu';
import Paginator from './components/Paginator/Paginator';
import NewRowMenu from './components/NewRowMenu/NewRowMenu';
import LineInformationContainer from './components/LineInformationContainer/LineInformationContainer';
import './App.css';

const BIG_LIST = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const SMALL_LIST = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const STRINGS_ON_PAGE = 50;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.onStartButtonHandler = this.onStartButtonHandler.bind(this);
    this.onSelectedPageNextHandler = this.onSelectedPageNextHandler.bind(this);
    this.onSelectedPagePrevHandler = this.onSelectedPagePrevHandler.bind(this);
    this.onSelectedPageHandler = this.onSelectedPageHandler.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
    this.renderMainContent = this.renderMainContent.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.onNewDataHandler = this.onNewDataHandler.bind(this);
    this.selectedNewRowHandler = this.selectedNewRowHandler.bind(this);
    this.state = {
      isStarted: false,
      isPending: false,
      data: [],
      selectedPage: 1,
      selectedRowIndex: null,
      visibleRows: {
        min: 0,
        max: STRINGS_ON_PAGE,
      },
    }
  }

  async fetchData() {
    this.setState({
      isPending: true,
    });
    const newData = await fetch(BIG_LIST);
    const json = await newData.json();
    this.setState({
      data: json.slice(),
    });
    this.setState({
      isPending: false,
    });
  }
  
  onStartButtonHandler() {
    this.setState({
      isStarted: true,
    });
    this.fetchData();
  }

  onSelectedPageNextHandler() {
    let {selectedPage, visibleRows} = this.state;
    selectedPage++;
    visibleRows.min = visibleRows.min + STRINGS_ON_PAGE;
    visibleRows.max = visibleRows.max + STRINGS_ON_PAGE;
    this.setState({
      visibleRows,
      selectedPage,
    });
  }

  onSelectedPagePrevHandler() {
    let {selectedPage, visibleRows} = this.state;
    selectedPage--;
    visibleRows.min = visibleRows.min - STRINGS_ON_PAGE;
    visibleRows.max = visibleRows.max - STRINGS_ON_PAGE;
    this.setState({
      visibleRows,
      selectedPage,
    });
  }

  onSelectedPageHandler(e) {
    const pageNumber = e.target.textContent;
    const selectedPage = +pageNumber;
    let visibleRows = {};
    visibleRows.min = pageNumber * STRINGS_ON_PAGE - STRINGS_ON_PAGE;
    visibleRows.max = pageNumber * STRINGS_ON_PAGE;
    this.setState({
      visibleRows,
      selectedPage,
    });
  }

  onNewDataHandler(data) {
    const currentData = [...this.state.data];
    const newData = {...data};
    currentData.unshift(newData);
    this.setState({
      data: currentData,
    });
  }

  selectedNewRowHandler(selectedRowIndex) {
    this.setState({
      selectedRowIndex,
    });
  }

  renderLoader() {
    return (
      <div className={'sk-circle'}>
          <div className={'sk-circle1 sk-child'}></div>
          <div className={'sk-circle2 sk-child'}></div>
          <div className={'sk-circle3 sk-child'}></div>
          <div className={'sk-circle4 sk-child'}></div>
          <div className={'sk-circle5 sk-child'}></div>
          <div className={'sk-circle6 sk-child'}></div>
          <div className={'sk-circle7 sk-child'}></div>
          <div className={'sk-circle8 sk-child'}></div>
          <div className={'sk-circle9 sk-child'}></div>
          <div className={'sk-circle10 sk-child'}></div>
          <div className={'sk-circle11 sk-child'}></div>
          <div className={'sk-circle12 sk-child'}></div>
        </div>
    );
  }

  renderTable() {
    const {data, visibleRows, selectedRowIndex} = this.state;
    return (
      <div className={'table_wrapper'}>
        <NewRowMenu onNewDataHandler={this.onNewDataHandler}></NewRowMenu>
        <Table 
            data={data.slice(visibleRows.min, visibleRows.max)} 
            selectedNewRowHandler={this.selectedNewRowHandler} 
            selectedRowIndex={selectedRowIndex}
        />
      </div>
    )
  }

  renderMainContent() {
    const {data, selectedPage, isPending, selectedRowIndex} = this.state;
    const pageQuantity = Math.ceil(data.length / STRINGS_ON_PAGE);
    return (
      <div className='app_container'>
          {isPending ? this.renderLoader() : this.renderTable()}
          <div>
              {selectedRowIndex !== null ? <LineInformationContainer data={data[selectedRowIndex]}/> : null}
              <Paginator 
                pageQuantity={pageQuantity}
                selectedPage={selectedPage}
                onSelectNextPage={this.onSelectedPageNextHandler}
                onSelectPrevPage={this.onSelectedPagePrevHandler}
                onSelectedPage={this.onSelectedPageHandler}
              />
            </div>
      </div>
     )
  }

  render() {
    return this.state.isStarted ?  this.renderMainContent() :
      <StartMenu onStartButtonHandler={this.onStartButtonHandler}></StartMenu>;
  }
}

export default App;