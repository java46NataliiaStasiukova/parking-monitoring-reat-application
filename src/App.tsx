import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigator from './components/navigators/Navigator';
import { ACCOUNTS_ROUTES, HOME_PAGE_ROUTES, ROUTES, STATISTICS_ROUTES } from './config/routes-config';
import { useImitator } from './util/useImitator';



  const App: React.FC = () => {

    //useImitator();

    const [flNavigate, setFlNavigate] = React.useState<boolean>(true);
    React.useEffect(() => setFlNavigate(false), [])
    return (
      <BrowserRouter>
      <Navigator items={ROUTES} accountItems={ACCOUNTS_ROUTES} statisticsItems={STATISTICS_ROUTES} homePageItems={HOME_PAGE_ROUTES}/>
      <Routes>
        {getRoutes()}
      </Routes> 
      </BrowserRouter>
    );
  }

export default App;

function getRoutes(): React.ReactNode {
  return ROUTES.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
}
