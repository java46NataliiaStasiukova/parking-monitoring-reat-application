import React from "react";
import { useDispatch } from "react-redux";
import { ReportModel } from "../../models/ReportModel";
import { addReport } from "../../redux/actions";
import ReportForm from "../forms/ReportForm";


const AddReportPage: React.FC = () => {
    const dispatch = useDispatch();
    function onSubmit(report: ReportModel){
        console.log(`adding report: ${report}`);
        dispatch(addReport(report));
    }
    return <>
        <ReportForm submitFn={onSubmit}></ReportForm>
    </>
    
}

export default AddReportPage;