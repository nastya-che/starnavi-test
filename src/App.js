import React, { Component } from 'react';
import './assets/scss/styles.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TestApiComponent from './Components/TestApiComponent';
import LiveApiComponent from './Components/LiveApiComponent';


const styles = {
    tabs: {
        flexGrow: 1,
        fontSize: '17px'
    },
};


class App extends Component {

  constructor(){
    super();
    this.state = {
      value: 0
    }
  }

  handleChange = (event, value) => {
    this.setState({
        value: value
    })
  };


  render() {

      const p = this.props;

    return (
      <div className="App">
          <h2>{'Test task for "Starnavi" company '}</h2>
          <Paper className={p.tabs}>
              <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
              >
                  <Tab label={'Live Api Component'} />
                  <Tab label={'Test Api Component'} />
              </Tabs>
          </Paper>

          {this.state.value === 0 && <LiveApiComponent />}
          {this.state.value === 1 && <TestApiComponent />}
      </div>
    );
  }
}

export default withStyles(styles)(App);
