import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CarModel } from "../../models/CarModel";
import { CarsStateType } from "../../redux/store";
import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams} from '@mui/x-data-grid';
import { Box } from "@mui/system";
import {Delete, Edit, Visibility } from "@mui/icons-material";
import { List, ListItem, Modal, Paper } from "@mui/material";
import CarForm from "../forms/CarForm";
import { deleteCar, updateCar } from "../../redux/actions";
import ConfirmationData from "../../models/ConfirmationData";
import ActionConfirmation from "../dialogs/ActionConfirmation";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};

const CarsPage: React.FC = () => {
    const dispatch = useDispatch();
    const cars: CarModel[] = useSelector<CarsStateType, CarModel[]>(state => state.cars);
    const [isEdit, setEdit] = React.useState(false);
    const [flOpen, setFlOpen] = React.useState<boolean>(false);
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const confirmationData = React.useRef<ConfirmationData>({title:'', content:'',confirmHandler:()=>{}});
    const updatedCar = React.useRef<CarModel>();
    const shownCar = React.useRef<CarModel>();

    function actionsFn(params: GridRowParams): JSX.Element[] {
      const actionElements: JSX.Element[] = [
           <GridActionsCellItem label="Details" icon={<Visibility/>}
              onClick={showDetails.bind( undefined, params.id as number)}/>,
           <GridActionsCellItem label="Edit" onClick={() => editFn(params.id as number)} icon={<Edit/>}/>,
           <GridActionsCellItem label="Remove" onClick={() => showRemoveConfirmation(params.id as number)}
           icon={<Delete/>}/>,
      ]
      return actionElements;
  }

  const columns: GridColDef[] = [
      {field: 'carNumber', type: 'String', headerName: 'Car Number', align: 'left', headerAlign: 'left', width: 150, editable: false},
      {field: 'driverId', type: 'String', headerName: 'Driver Id', align: 'left', headerAlign: 'left', width: 150, editable: false},
      {field: 'actions', type: 'actions', headerName: 'Actions', align: 'left', headerAlign: 'left', width: 200, getActions:actionsFn}
  ];

  function showDetails(carNumber: number) {
    shownCar.current = cars.find(c => c.carNumber === carNumber);
    setModalOpen(true);
}

  function editFn(carNumber: number): void {
    updatedCar.current = cars.find(c => c.carNumber === carNumber);
    setEdit(true);
  }
  function showRemoveConfirmation(carNumber: number): void {
    confirmationData.current.confirmHandler = removeAction.bind(undefined, carNumber);
    confirmationData.current.title = 'Remove Car Confirmation'
    confirmationData.current.content = `You are going to remove car with number ${carNumber}`;
    setFlOpen(true);
  }

  function removeAction(carNumber: number, flConfirm: boolean): void {
    if(flConfirm){
      dispatch(deleteCar(carNumber));
    }
    setFlOpen(false);
  }

  function showUpdateConfirmation(car: CarModel) {
    if(isUpdated(cars, car)) {
        confirmationData.current.confirmHandler = updateAction.bind(undefined, car);
        confirmationData.current.title = 'Update Car Confirmation'
        confirmationData.current.content = `You are going to update car with number ${car.carNumber}`;
        setFlOpen(true);
    }
    setEdit(false);
  }

  function updateAction(car: CarModel, flConfirm: boolean): void {
    if (flConfirm) {
        dispatch(updateCar(car.carNumber, car.driverId));
    }
    setFlOpen(false);
    

}

    const rows: CarModel[] = cars;
    const getRowId = (row: CarModel) => row.carNumber;

    return (
        <Box sx={{ height: '100%', width: '100%', paddingTop: '20vh'}} >
          <Paper sx={{height: {xs: '90vh', sm: '85vh', md: '80vh'}, width: {xs: '100%', md: '80%'}}}>
            {isEdit ? <CarForm submitFn={showUpdateConfirmation}
            carUpdate={updatedCar.current}/> : <DataGrid 
            rows={rows} columns={columns} 
            getRowId={getRowId}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 15,
                },
              },
            }}
            pageSizeOptions={[15]}
            disableRowSelectionOnClick/>}
          </Paper>
          <ActionConfirmation open={flOpen} title={confirmationData.current.title}
          content={confirmationData.current.content} confirmHandler={confirmationData.current.confirmHandler}
          />
          <Modal
            open={modalOpen}
            onClose={()=>setModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <List>
                {shownCar.current && Object.entries(shownCar.current as any).map(e => <ListItem key={e[0]}>{`${e[0]}: ${e[1]}`}</ListItem>)}
              </List>
            </Box>
          </Modal>
        </Box>
    );   
}

export default CarsPage;

function isUpdated(cars: CarModel[], newCar: CarModel): boolean {
  const carOld = cars.find(c => c.carNumber === newCar.carNumber);
  const carOldJson = JSON.stringify(carOld);
  const carNewJson = JSON.stringify(newCar);
 return !!carOld && carOldJson !== carNewJson ; 

}


