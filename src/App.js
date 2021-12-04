import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './Main.js'
import Login from './components/auth/Login.js'
import Register from './components/auth/Register.js'
import NabVar from './components/NabVar.js'
import Details from './components/Details.js'
import Table from './components/admin/Table.js'

function App() {

  return (
    <Router>
        <NabVar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route component={Details} path="/details" />
        <Route component={Table} path="/admin" />
      </Switch>
    </Router>
  );
}

export default App;