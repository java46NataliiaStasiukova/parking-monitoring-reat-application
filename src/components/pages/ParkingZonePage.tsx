import React from "react";
import { useSelector } from "react-redux";
import { ParkingZoneModel } from "../../models/ParkingZoneModel";
import { ParkingZonesType } from "../../redux/store";
import { Box } from "@mui/material";
import { GridColDef, DataGrid } from "@mui/x-data-grid";

const ParkingZonePage: React.FC = () => {

    const zones: ParkingZoneModel[] = useSelector<ParkingZonesType, ParkingZoneModel[]>(state => state.zones);
    const columns: GridColDef[] = [
        {field: 'parkingZone', headerName: 'Parking Zone', width: 150, editable: true},
        {field: 'fineCost', headerName: 'Fine Cost', width: 150, editable: true},
        {field: 'city', headerName: 'City', width: 230, editable: true},
        {field: 'address', headerName: 'Address', width: 150, editable: true},

    ];

    const rows: ParkingZoneModel[] = zones;
    const getRowId = (row: ParkingZoneModel) => +row.parkingZone;

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

export default ParkingZonePage;