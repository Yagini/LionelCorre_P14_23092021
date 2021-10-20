import "./App.css";
import Homepage from "../../pages/Homepage/Homepage";
import EmployeeList from "../../pages/Employee/EmployeeList";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/**
 * App component manage the route
 * @returns route
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/employee-list" component={EmployeeList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
