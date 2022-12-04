import { surveyListActions } from "../slices/SurveyListSlice";

export const getSurveyList=()=>async (dispatch)=>{
    dispatch(surveyListActions.getSurveysRequest());
    const res = await fetch("http://localhost:8000/display");
    const out  = await res.json();
    if (out.message === "success") {
        dispatch(surveyListActions.getSurveysSuccess(out.data.model));
    }
    else dispatch(surveyListActions.getSurveysFailure(out.error));
}