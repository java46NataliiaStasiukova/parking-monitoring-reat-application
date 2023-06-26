import React from "react";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {AppBar, Tabs, Tab, Box, ButtonBase, Drawer, ListItem, List, Stack} from "@mui/material";
import { getRouteIndex } from "../../util/functions";
import { NestedRouteTypes } from "../../models/NestedRouteTypes";


const Navigator: React.FC<{items: NestedRouteTypes[]}> = ({items}) => {
    const location = useLocation();
    const getRouteIndexCallback = React.useCallback(getRouteIndex, [items, location])
    const tabNumber = getRouteIndexCallback(items, location.pathname);
    const [state, setState] = React.useState(false);
    const [listState, setListState] = React.useState<NestedRouteTypes[] | null>(null);
    
    const toggleDrawer = () => {
      setState(!state);
      setListState([]);
    };

    function handleTabClick(item: NestedRouteTypes[] | undefined) {
        if(item !== undefined){
            setListState(item); 
        }
    }

    function getTabs(): React.ReactNode {
        return items.map(item => {
            if(item.nestedItems !== undefined){
                return <Tab style={{color: 'white'}} key={item.path} label={item.label} component={ButtonBase} 
                            onClick={() => {
                                toggleDrawer();
                                handleTabClick(item.nestedItems);
                            }}/>
            }
            return <Tab style={{color: 'white'}} key={item.path} component={RouterLink} to={item.path} label={item.label} />
        })
    }

    function getItems(routeItems: NestedRouteTypes[] | null): React.ReactNode {
        if(!routeItems) {
            return [];
        }
        return routeItems.map(item => <ListItem style={{color: 'black'}} key={item.path} component={RouterLink} to={item.path}>{item.label}</ListItem>);
    }
    
    return <Box>
        <AppBar position={'fixed'} >
            <Tabs indicatorColor='secondary' value={tabNumber} >
            {getTabs()}
            </Tabs>
        </AppBar>
        <Drawer anchor="top" open={state} onClick={toggleDrawer}>
        {getItems(listState)}
        </Drawer>
    </Box>
}

export default Navigator;





