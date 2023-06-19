import React from "react";
import { DriverModel, createDriver } from "../../models/DriverModel";
import { Box, Grid, FormControl, TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


type Props = {
    submitFn: (driver: DriverModel) => void;
}
const initialDriver: DriverModel = createDriver(0, "", "", "");

const DriverForm: React.FC<Props> = ({submitFn}) => {
    const [driver, setDriver] = React.useState(initialDriver);

    function handlerDriverId(event: any){
        const driverCopy = {...driver};
        driverCopy.id = +event.target.value;
        setDriver(driverCopy);
    }

    function handlerDriverName(event: any){
        const driverCopy = {...driver};
        driverCopy.name = event.target.value;
        setDriver(driverCopy);
    }

    function handlerDriverEmail(event: any){
        const driverCopy = {...driver};
        driverCopy.email = event.target.value;
        setDriver(driverCopy);
    }

    function handlerDriverBirthDate(event: any){
        const driverCopy = {...driver};
        driverCopy.birthdate = event.target.value;
        setDriver(driverCopy);
    }

    function onReset(event: any){
        setDriver(initialDriver);
    }

    function onSubmit(event: any){
        event.preventDefault();
        submitFn(driver);
        document.querySelector('form')!.reset();
    }


    return (
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
                            id="driver-id-field"
                            label="Required"
                            value={driver.id}
                            onChange={handlerDriverId}
                            helperText="Enter driver id using 6 digits"
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="driver-name-field"
                            label="Required"
                            value={driver.name}
                            onChange={handlerDriverName}
                            helperText="Enter driver name"
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="driver-email-field"
                            label="Required"
                            value={driver.email}
                            onChange={handlerDriverEmail}
                            helperText="Enter driver email"
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="driver-birthdate-field"
                            label="Required"
                            value={driver.birthdate}
                            onChange={handlerDriverBirthDate}
                            helperText="Enter driver birthdate in format: yyyy-mm-dd"
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
    );
}

export default DriverForm;