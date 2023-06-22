import React from "react";
import { ReportModel, createReport } from "../../models/ReportModel";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


type Props = {
    submitFn: (report: ReportModel) => void;
}
const initialReport: ReportModel = createReport(0, 0, 0, '', '', 0, '', '');

const ReportForm: React.FC<Props> = ({submitFn}) => {
    const [report, setReport] = React.useState(initialReport);

    function handlerReportId(event: any){
        const reportCopy = {...report};
        reportCopy.id = +event.target.value;
        setReport(reportCopy);
    }

    function handlerReportCarNumber(event: any){
        const reportCopy = {...report};
        reportCopy.carNumber = +event.target.value;
        setReport(reportCopy);
    }

    function handlerReportDriverId(event: any){
        const reportCopy = {...report};
        reportCopy.driverId = +event.target.value;
        setReport(reportCopy);
    }

    function handlerReportParkingZone(event: any){
        const reportCopy = {...report};
        reportCopy.parkingZone = event.target.value;
        setReport(reportCopy);
    }

    function handlerReportDate(event: any){
        const reportCopy = {...report};
        reportCopy.date = event.target.value;
        setReport(reportCopy);
    }

    function handlerReportCost(event: any){
        const reportCopy = {...report};
        reportCopy.cost = +event.target.value;
        setReport(reportCopy);
    }

    function handlerReportStatus(event: any){
        const reportCopy = {...report};
        reportCopy.status = event.target.value;
        setReport(reportCopy);
    }

    function handlerReportName(event: any){
        const reportCopy = {...report};
        reportCopy.driverName = event.target.value;
        setReport(reportCopy);
    }

    function onReset(event: any){
        setReport(initialReport);
    }

    function onSubmit(event: any){
        event.preventDefault();
        submitFn(report);
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
                            id="report-id-field"
                            label="Required"
                            value={report.id}
                            onChange={handlerReportId}
                            helperText="Enter report id"
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="report-car-number-field"
                            label="Required"
                            value={report.carNumber}
                            onChange={handlerReportCarNumber}
                            helperText="Enter car number using 6 digits"
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="report-driver-id-field"
                            label="Required"
                            value={report.driverId}
                            onChange={handlerReportDriverId}
                            helperText="Enter driver id using 6 digits"
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="report-parking-zone-field"
                            label="Required"
                            value={report.parkingZone}
                            onChange={handlerReportParkingZone}
                            helperText="Enter parking zone"
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="report-date-field"
                            label="Required"
                            value={report.date}
                            onChange={handlerReportDate}
                            helperText="Enter date in format yyyy/mm/dd"
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="report-cost-field"
                            label="Required"
                            value={report.cost}
                            onChange={handlerReportCost}
                            helperText="Enter fine cost"
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="report-status-field"
                            label="Required"
                            value={report.status}
                            onChange={handlerReportStatus}
                            helperText="Enter report status"
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="report-driver-name-field"
                            label="Required"
                            value={report.driverName}
                            onChange={handlerReportName}
                            helperText="Enter driver name"
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

export default ReportForm;