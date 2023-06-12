import React from "react";
import { useSelector } from "react-redux";
import { ReportsStateType } from "../../redux/store";
import { ReportModel } from "../../models/ReportModel";

const ReportsPage: React.FC = () => {

    const reports: ReportModel[] = useSelector<ReportsStateType, ReportModel[]>(state => state.reports);
    
    return <>
    <div>
        <ul>{reports.map(c => <li key={c.id}>{JSON.stringify(c)}</li>)}</ul>
    </div>
    </>
}

export default ReportsPage;