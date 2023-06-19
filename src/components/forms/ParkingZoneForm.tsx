import React from "react";
import { ParkingZoneModel, createParkingZone } from "../../models/ParkingZoneModel";
import { Box, Grid, FormControl, TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


type Props = {
    submitFn: (zone: ParkingZoneModel) => void;
}
const initialParkingZone: ParkingZoneModel = createParkingZone("", 0, "", "");

const ParkingZoneForm: React.FC<Props> = ({submitFn}) => {
    const [zone, setParkingZone] = React.useState(initialParkingZone);

    function handlerParkingZoneId(event: any){
        const parkingZoneCopy = {...zone};
        parkingZoneCopy.parkingZone = event.target.value;
        setParkingZone(parkingZoneCopy);
    }

    function handlerParkingFineCost(event: any){
        const parkingZoneCopy = {...zone};
        parkingZoneCopy.fineCost = +event.target.value;
        setParkingZone(parkingZoneCopy);
    }

    function handlerParkingCity(event: any){
        const parkingZoneCopy = {...zone};
        parkingZoneCopy.city = event.target.value;
        setParkingZone(parkingZoneCopy);
    }

    function handlerParkingAddress(event: any){
        const parkingZoneCopy = {...zone};
        parkingZoneCopy.address = event.target.value;
        setParkingZone(parkingZoneCopy);
    }

    function onReset(event: any){
        setParkingZone(initialParkingZone);
    }

    function onSubmit(event: any){
        event.preventDefault();
        submitFn(zone);
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
                            id="parking-zone-id-field"
                            label="Required"
                            value={zone.parkingZone}
                            onChange={handlerParkingZoneId}
                            helperText="Enter parking zone id"
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="parking-zone-fine-cost-field"
                            label="Required"
                            value={zone.fineCost}
                            onChange={handlerParkingFineCost}
                            helperText="Enter parking zone fine cost"
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="parking-zone-city-field"
                            label="Required"
                            value={zone.city}
                            onChange={handlerParkingCity}
                            helperText="Enter parking zone city"
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="parking-zone-address-field"
                            label="Required"
                            value={zone.address}
                            onChange={handlerParkingAddress}
                            helperText="Enter parking zone address"
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

export default ParkingZoneForm;