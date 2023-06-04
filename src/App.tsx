import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navigator from './components/navigators/Navigator';
import { ROUTES } from './config/routes-config';



  const App: React.FC = () => {
    const [flNavigate, setFlNavigate] = React.useState<boolean>(true);
    React.useEffect(() => setFlNavigate(false), [])
    return (
      <BrowserRouter>
      <Navigator items={ROUTES} />
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
