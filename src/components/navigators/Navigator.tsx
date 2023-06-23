import React from "react";
import { RouteTypes } from "../../models/RouteTypes";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {AppBar, Tabs, Tab, Box, ButtonBase, Drawer, ListItem, List} from "@mui/material";
import { getRouteIndex } from "../../util/functions";
import { ACCOUNTS_PATH, HOME_PAGE_PATH, STATISTICS_PATH } from "../../config/routes-config";

const Navigator: React.FC<{items: RouteTypes[], accountItems: RouteTypes[], statisticsItems: RouteTypes[], homePageItems: RouteTypes[]}> = ({items, accountItems, statisticsItems, homePageItems}) => {
    const location = useLocation();
    const getRouteIndexCallback = React.useCallback(getRouteIndex, [items, location])
    const tabNumber = getRouteIndexCallback(items, location.pathname);
    const [state, setState] = React.useState(false);

    const [listState, setListState] = React.useState<RouteTypes[] | null>(null);
    
    const toggleDrawer = () => {
      setState(!state);
      setListState([]);
    };

    function handleTabClick(item: RouteTypes[]) {
        setListState(item); // Set the listState when a specific tab is clicked
      }

    function getTabs(): React.ReactNode {
        return items.map(item => {
            if(item.path === ACCOUNTS_PATH) { // || item.path === STATISTICS_PATH || item.path === HOME_PAGE_PATH){
                return <Tab style={{color: 'white'}} key={item.path} label={item.label} component={ButtonBase} 
                onClick={() => {
                    toggleDrawer();
                    handleTabClick(accountItems);
                }}/>
            } 
            else if(item.path === STATISTICS_PATH){
                return <Tab style={{color: 'white'}} key={item.path} label={item.label} component={ButtonBase} 
                onClick={() => {
                    toggleDrawer();
                    handleTabClick(statisticsItems);
                }}/>
            } else if(item.path === HOME_PAGE_PATH){
                return <Tab style={{color: 'white'}} key={item.path} label={item.label} component={ButtonBase} 
                onClick={() => {
                    toggleDrawer();
                    handleTabClick(homePageItems);
                }}/>
            }
            return <Tab style={{color: 'white'}} key={item.path} component={RouterLink} to={item.path} label={item.label} />
        });
    }
    function getItems(routeItems: RouteTypes[] | null): React.ReactNode {
        if (!routeItems) {
          return [];
        }
        return routeItems.map(item => <ListItem><Tab style={{color: 'black'}} key={item.path} component={RouterLink} to={item.path} label={item.label}/></ListItem>);
      }
    return <Box>
        <AppBar position={'fixed'} >
            <Tabs indicatorColor='secondary' value={tabNumber} >
            {getTabs()}
            </Tabs>
        </AppBar>
        <Drawer anchor="top" open={state} onClose={toggleDrawer}>
        {getItems(listState)}
        </Drawer>
    </Box>
}

export default Navigator;