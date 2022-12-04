import { createSlice } from "@reduxjs/toolkit";
const SurveyListSlice = createSlice({
    name: "form",
    initialState: {
        loading: false,
        error: null,
        surveys: [],
    },
    reducers: {
        getSurveysRequest(state, action) {
            state.loading = true;
            state.error = null;
        },
        getSurveysSuccess(state, action) {
            state.loading = false;
            state.surveys = action.payload;
            state.error = null;
        },
        getSurveysFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const surveyListActions = SurveyListSlice.actions;
export default SurveyListSlice;
