import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import routes from './routes';
import './App.css';
export interface IToDo {
  id: number;
  title: string;
  description: string;
  items: { id: number, isDone: boolean, title: string }[]
}
function App() {
  const [list, setList] = useState<IToDo[]>([])
  return (
    <Router>
      <Switch>
        {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props) => <route.component
                {...props}
                list={list}
                setList={setList}
              />
              }
            />
          ))
        }
      </Switch>
    </Router>
  );
}

export default App;
