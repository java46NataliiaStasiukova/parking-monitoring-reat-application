import React from "react";
import { useSelector } from "react-redux";
import { CarModel } from "../../models/CarModel";
import { CarsStateType } from "../../redux/store";
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { Box } from "@mui/system";

const CarsPage: React.FC = () => {
    const cars: CarModel[] = useSelector<CarsStateType, CarModel[]>(state => state.cars);

    const columns: GridColDef[] = [
        {field: 'carNumber', headerName: 'Car Number', width: 150, editable: true},
        {field: 'driverId', headerName: 'Driver Id', width: 150, editable: true},
    ];

    const rows: CarModel[] = cars;
    const getRowId = (row: CarModel) => row.carNumber;

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

export default CarsPage;

