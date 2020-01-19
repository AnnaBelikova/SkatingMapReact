import React, {Component} from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import News from './components/NewsComponent';
import { NEWS } from './shared/news';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: NEWS
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Skater's Map</NavbarBrand>
          </div>
        </Navbar>
        <News articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
