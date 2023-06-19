import React from "react";
import { RouteTypes } from "../../models/RouteTypes";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {AppBar, Tabs, Tab} from "@mui/material";
import { getRouteIndex } from "../../util/functions";


const Navigator: React.FC<{items: RouteTypes[]}> = ({items}) => {
    // <nav style={{display: 'flex', justifyContent: 'space-evenly', fontSize: '1.5em'}}>
    // {getLinks()}
    // </nav>
    const location = useLocation();
    const getRouteIndexCallback = React.useCallback(getRouteIndex, [items, location])
    const tabNumber = getRouteIndexCallback(items, location.pathname);
    
    function getTabs(): React.ReactNode {
        return items.map(item => <Tab style={{color: 'white'}} key={item.path} component={RouterLink} to={item.path} label={item.label} />)
    }
    return <AppBar position={'fixed'}><Tabs indicatorColor='secondary' value={tabNumber} >
        {getTabs()}

    </Tabs></AppBar>
}
    


export default Navigator;