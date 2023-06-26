import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigator from './components/navigators/Navigator';
import { NESTED_ROUTES } from './config/routes-config';
import { useImitator } from './util/useImitator';
import { NestedRouteTypes } from './models/NestedRouteTypes';



  const App: React.FC = () => {

    //useImitator();

    const [flNavigate, setFlNavigate] = React.useState<boolean>(true);
    React.useEffect(() => setFlNavigate(false), [])
    return (
      <BrowserRouter>
      <Navigator items={NESTED_ROUTES} />
      <Routes>
        {getRoutes()}
      </Routes> 
      </BrowserRouter>
    );
  }

export default App;

function getRoutes(): React.ReactNode {
  
  return NESTED_ROUTES.map(r => {
    if(r.nestedItems){
      return getNestedRoutes(r.nestedItems);
    }
    return <Route key={r.path} path={r.path} element={r.element}/>
  })
}

function getNestedRoutes(nestedRoutes: NestedRouteTypes[]): React.ReactNode {
  return nestedRoutes.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
}
