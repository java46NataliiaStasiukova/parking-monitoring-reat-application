import React from "react";
import { useSelector } from "react-redux";
import { ReportsStateType } from "../../redux/store";
import { ReportModel } from "../../models/ReportModel";
import { Box } from "@mui/material";
import { GridColDef, DataGrid } from "@mui/x-data-grid";

const ReportsPage: React.FC = () => {

    const reports: ReportModel[] = useSelector<ReportsStateType, ReportModel[]>(state => state.reports);
    
    const columns: GridColDef[] = [
        {field: 'id', headerName: 'Id', width: 100, editable: true},
        {field: 'carNumber', headerName: 'Car Number', width: 150, editable: true},
        {field: 'driverId', headerName: 'Driver Id', width: 100, editable: true},
        {field: 'parkingZone', headerName: 'Parking Zone', width: 120, editable: true},
        {field: 'date', headerName: 'Date', width: 150, editable: true},
        {field: 'cost', headerName: 'Cost', width: 100, editable: true},
        {field: 'status', headerName: 'Status', width: 120, editable: true},
        {field: 'driverName', headerName: 'Driver Name', width: 150, editable: true},
    ];

    const rows: ReportModel[] = reports;
    const getRowId = (row: ReportModel) => row.id;

    return (
        <Box sx={{ height: '100%', width: '100%', paddingTop: '10vh'}} >
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

export default ReportsPage;