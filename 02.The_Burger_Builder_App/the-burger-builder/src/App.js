import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import video from './components/outer-space.mp4';

class App extends Component {
  render() {
    return (
      <div >
      <Layout>
      </Layout>
       <BurgerBuilder/>
       <video autoPlay loop>
       <source src={video}></source>
       </video>
      </div>
    );
  }
}

export default App;
