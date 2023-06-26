import React from "react";
import { useSelector } from "react-redux";
import { DriversStateType } from "../../redux/store";
import { DriverModel } from "../../models/DriverModel";
import { Box } from "@mui/material";
import { GridColDef, DataGrid } from "@mui/x-data-grid";

const DriversPage: React.FC = () => {
    const drivers: DriverModel[] = useSelector<DriversStateType, DriverModel[]>(state => state.drivers);
    const columns: GridColDef[] = [
        {field: 'id', headerName: 'Id', width: 150, editable: true},
        {field: 'name', headerName: 'Name', width: 150, editable: true},
        {field: 'email', headerName: 'Email', width: 230, editable: true},
        {field: 'birthdate', headerName: 'Birthdate', width: 150, editable: true},

    ];

    const rows: DriverModel[] = drivers;
    const getRowId = (row: DriverModel) => row.id;
    
    return (
        <Box sx={{ height: '100%', width: '100%', paddingTop: '20vh'}} >
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={getRowId}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          pageSizeOptions={[15]}
          disableRowSelectionOnClick
        />
      </Box>
    );
}

export default DriversPage;