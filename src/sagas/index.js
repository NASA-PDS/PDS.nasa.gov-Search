import { all, call, put, takeLatest } from 'redux-saga/effects';

function* fetchSearchResults(action){
    console.log("fetch search results action", action);
    const searchText = action.payload.input;
    const rows = action.payload.rows;
    const start = action.payload.start;
    
    const endpoint = 'https://pds-dev-el7.jpl.nasa.gov/api/v1/search/docs?q=' + 
        searchText +
        '&rows=' + rows +
        '&start=' + start;

    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    console.log("DATA", data);
    yield put({ type: 'RENDER_SEARCH_RESULTS', payload: data});
}

function* getSearchResults(){
    yield takeLatest('LOAD_SEARCH_RESULTS', fetchSearchResults);
}

function* fetchContextSearchResults(action){
    console.log("fetch context search results action", action);
    const searchText = action.payload;

    const endpoint = 'https://pds.nasa.gov/services/search/search?wt=json&q=product_class:Product_Context%20ANDtext(' + 
        searchText +
        ')&rows=3';

    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    console.log("CONTEXT DATA", data);
    yield put({ type: 'RENDER_CONTEXT_SEARCH_RESULTS', payload: data});
}

function* getContextSearchResults(){
    yield takeLatest('LOAD_CONTEXT_SEARCH_RESULTS', fetchContextSearchResults);
}

function* fetchSearchBarTargetFacetResults(action){
    console.log("fetch target facet results action", action);
    const text = action.payload.searchInput;
    const rows = 5;

    let endpoint = "";
    if(text){
        endpoint = 'https://pds.nasa.gov/services/search/search?wt=json&q=objectType:Product_Target_PDS3 and title:' + 
            text + 
            '&rows=' + rows;
    }
    else{
        endpoint = 'https://pds.nasa.gov/services/search/search?wt=json&q=objectType:Product_Target_PDS3&rows=' + rows;
    }  

    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    console.log("Targets DATA", data);
    yield put({ type: 'RENDER_SEARCH_BAR_TARGET_FACET_RESULTS', payload: data});
}

function* getSearchBarTargetFacetResults(){
    yield takeLatest('LOAD_SEARCH_BAR_TARGET_FACET_RESULTS', fetchSearchBarTargetFacetResults)
}

function* fetchSearchBarMissionFacetResults(action){
    console.log("fetch mission facet results action", action);
    const text = action.payload.searchInput;
    const rows = 5;

    let endpoint = "";
    if(text){
        endpoint = 'https://pds.nasa.gov/services/search/search?wt=json&q=objectType:Product_Mission_PDS3 and title:' + 
            text + 
            '&rows=' + rows;
    }
    else{
        endpoint = 'https://pds.nasa.gov/services/search/search?wt=json&q=objectType:Product_Mission_PDS3&rows=' + rows;
    }

    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    console.log("Missions DATA", data);
    yield put({ type: 'RENDER_SEARCH_BAR_MISSION_FACET_RESULTS', payload: data});
}

function* getSearchBarMissionFacetResults(){
    yield takeLatest('LOAD_SEARCH_BAR_MISSION_FACET_RESULTS', fetchSearchBarMissionFacetResults)
}

function* fetchSearchBarInstrumentFacetResults(action){
    console.log("fetch instrument facet results action", action);
    const text = action.payload.searchInput;
    const rows = 5;

    let endpoint = "";
    if(text){
        endpoint = 'https://pds.nasa.gov/services/search/search?wt=json&q=objectType:Product_Instrument_PDS3 and title:' + 
            text + 
            '&rows=' + rows;
    }
    else{
        endpoint = 'https://pds.nasa.gov/services/search/search?wt=json&q=objectType:Product_Instrument_PDS3&rows=' + rows;
    }

    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    console.log("Instruments DATA", data);
    yield put({ type: 'RENDER_SEARCH_BAR_INSTRUMENT_FACET_RESULTS', payload: data});
}

function* getSearchBarInstrumentFacetResults(){
    yield takeLatest('LOAD_SEARCH_BAR_INSTRUMENT_FACET_RESULTS', fetchSearchBarInstrumentFacetResults)
}

function* fetchMissionSectionContent(action){
    console.log("fetch missions section action", action);
    const rows = 5;

    let endpoint = 'https://pds.nasa.gov/services/search/search?wt=json&q=objectType:Product_Mission_PDS3&rows=' + rows;

    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    console.log("Missions section DATA", data);
    yield put({ type: 'RENDER_MISSION_SECTION_CONTENT', payload: data});
}

function* getMissionsSectionContent(){
    yield takeLatest('LOAD_MISSION_SECTION_CONTENT', fetchMissionSectionContent)
}

function* fetchTargetSectionContent(action){
    console.log("fetch targets section action", action);
    const rows = 5;

    let endpoint = 'https://pds.nasa.gov/services/search/search?wt=json&q=objectType:Product_Target_PDS3&rows=' + rows;

    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    console.log("Targets section DATA", data);
    yield put({ type: 'RENDER_TARGET_SECTION_CONTENT', payload: data});
}

function* getTargetsSectionContent(){
    yield takeLatest('LOAD_TARGET_SECTION_CONTENT', fetchTargetSectionContent)
}

function* fetchInstrumentSectionContent(action){
    console.log("fetch instruments section action", action);
    const rows = 5;

    let endpoint = 'https://pds.nasa.gov/services/search/search?wt=json&q=objectType:Product_Instrument_PDS3&rows=' + rows;

    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    console.log("Instrument section DATA", data);
    yield put({ type: 'RENDER_INSTRUMENT_SECTION_CONTENT', payload: data});
}

function* getInstrumentsSectionContent(){
    yield takeLatest('LOAD_INSTRUMENT_SECTION_CONTENT', fetchInstrumentSectionContent)
}

export default function* rootSaga(){
    yield all([
        getSearchResults(),
        getContextSearchResults(),
        getSearchBarTargetFacetResults(),
        getSearchBarMissionFacetResults(),
        getSearchBarInstrumentFacetResults(),
        getMissionsSectionContent(),
        getTargetsSectionContent(),
        getInstrumentsSectionContent()
    ]);
}

//Urls for getting items:
//
//Investigation with text
//https://pds.nasa.gov/services/search/search?wt=json&q=data_class:InvestigationANDtext(mars)&rows=10

//Just investigation
//https://pds.nasa.gov/services/search/search?wt=json&q=data_class:Investigation&rows=10

//https://pds.nasa.gov/services/search/search?wt=json&q=data_class:Instrument&rows=10
//https://pds.nasa.gov/services/search/search?wt=json&q=data_class:InstrumentANDtext(mars)&rows=10

//https://pds.nasa.gov/services/search/search?wt=json&q=data_class:Target&rows=10
//https://pds.nasa.gov/services/search/search?wt=json&q=data_class:TargetANDtext(mars)&rows=10

//PDS3 Targets
//https://pds.nasa.gov/services/search/search?wt=json&q=objectType:Product_Target_PDS3 and title:jupiter & rows=10

//https://pds.nasa.gov/services/search/search?wt=json&q=objectType:Product_Mission_PDS3 and title:jupiter & rows=10

//https://pds.nasa.gov/services/search/search?wt=json&q=objectType:Product_Instrument_PDS3 and title:jupiter & rows=10


