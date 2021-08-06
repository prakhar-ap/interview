import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Details from './components/details/Details';
import Books from './components/books/Books';

const App = () => {
    return (
      <>
        <Router>
          <Route exact path="/" component={Books} />
          <Route exact path="/books/:isbn13" component={Details} />
        </Router>
      </>
    );
  };
  
  export default App;
