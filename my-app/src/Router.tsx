import * as React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import App from 'src/App';
import history from './history'



const AppRouter: React.StatelessComponent<{}> = () => {
    return (     
        <div className="container-fluid">
        <Router history={history}>      
          <Switch>
          <Route exact={true} path="/" component={App} />
           <Route path="/sideBar" component={App} />
           
          </Switch>
        </Router>
        </div>
    
    );
  }

  export default AppRouter;