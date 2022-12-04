import React,{useEffect} from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { getSurveyList } from "../store/actions/surveylist-actions";
import { useSelector,useDispatch } from "react-redux";
const SurveyList = () => {
const surveylist = useSelector((state) =>state.surveylist.surveys);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getSurveyList())
},[dispatch] );

    return (
        <>
            <div>
                <Table striped bordered hover variant='dark'>
                    <thead>
                        <tr>
                            <th>Timestamp</th>
                            <th>Gender</th>
                            <th>Cuisine</th>
                            <th>Current Habits</th>
                            <th>Skip breakfast</th>
                            <th>Coffee Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            surveylist.length>0 && surveylist.map(survey=>
                                <tr>
                            <td>{survey.ts}</td>
                            <td>{survey.gender}</td>
                            <td>{survey.favcuisine}</td>
                            <td>{survey.curhabits}</td>
                            <td>{survey.skipbreakfast}</td>
                            <td>{survey.coffeefreq}</td>
                        </tr>
                            )
                        }
                        
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default SurveyList;
