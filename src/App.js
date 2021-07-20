import {Suspense} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Headers from './containers/Headers';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetails';
import ProductComponents from './containers/ProductComponents';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback='Loading'>
          <Headers />
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route path="/product/:productId" exact component={ProductDetail} />
            {/* <ProductComponents />  */}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
