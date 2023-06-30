import { Button, FormControl, Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { CarModel, createCar } from "../../models/CarModel";
import React from "react";

type Props = {
    submitFn: (car: CarModel) => void;
    carUpdate?: CarModel;
}

const initialCar: CarModel = createCar(0, 0);

const CarForm: React.FC<Props> = ({submitFn, carUpdate}) => {  
    if(!!carUpdate){
        carUpdate.driverId = 0;
    }

    const [car, setCar] = React.useState(carUpdate || initialCar);
    
    function handlerCarNumber(event: any){
        const carCopy = {...car};
        carCopy.carNumber = +event.target.value;
        setCar(carCopy);
    }

    function handlerDriverId(event: any){
        const carCopy = {...car};
        carCopy.driverId = +event.target.value;
        setCar(carCopy);
    }

    function onReset(event: any){
        setCar(initialCar);
    }

    function onSubmit(event: any){
        event.preventDefault();
        submitFn(car);
        document.querySelector('form')!.reset();
    }


    return (<Box>
        <Typography gutterBottom variant={'h4'}
         sx={{fontSize: {xs: "1.3em", sm: "1em", md:"2em"}, textAlign: 'center', fontWeight: 'bold'}}>
             {!!carUpdate ? `Updating Car with number ${carUpdate.carNumber}` : 'Adding new Car'}</Typography>
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 3, width: '30ch' }, textAlign: 'center', paddingTop: '10vh'
        }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit} 
        onReset={onReset}>
            <Grid container>
                <FormControl fullWidth required>
                    <Grid item>
                        <TextField
                            required
                            id="car-number-field"
                            label="Required"
                            value={!!carUpdate ? carUpdate.carNumber : car.carNumber}
                            onChange={handlerCarNumber}
                            helperText={!!carUpdate ? "" : "Enter car number using 6 digits"}
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="driver-id-field"
                            label="Required"
                            value={car.driverId}
                            onChange={handlerDriverId}
                            helperText="Enter driver id using 6 digits"
                            />
                    </Grid>
                    </FormControl>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item >
                            <Button type="reset" variant="outlined" startIcon={<DeleteIcon />}>Reset</Button>
                        </Grid>
                        <Grid item>
                            <Button type="submit" variant="contained" endIcon={<SendIcon />}>Submit</Button>
                        </Grid>
                    </Grid>
                    
   
            </Grid>
      </Box>
      </Box>
    );
}

export default CarForm;

