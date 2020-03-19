const urlBuilder = (state, params) => {
    let facetString = "";
    state.facets.forEach((facet) => {
        if(facet.value === ""){
        }
        else{
            if(facetString === ""){
                facetString = facet.title + ":" + facet.value;
            }
            else{
                facetString = facetString + "," + facet.title + ":" + facet.value;
            }
        }
    });
    if(facetString !== ""){
        facetString = "&facets=" + facetString;
    }


    let searchInputString = "";
    if(state.searchInput){
        searchInputString = state.searchInput;
    }
    if(searchInputString !== ""){
        searchInputString = "&search=" + searchInputString;
    }


    let dataTypeString = "";
    if(params && params.dataType){
        if(params.dataType !== "data"){
            dataTypeString = params.dataType;
        }   
    }
    else{
        if(state.dataType !== "data"){
            dataTypeString = state.dataType;
        }
    }
    if(dataTypeString !== ""){
        dataTypeString = "&dataType=" + dataTypeString;
    } 


    let startString = "";
    if(params && Number.isInteger(params.start)){
        if(params.start !== 0){
            startString = params.start 
        }
    }
    else{
        if(state.start !== 0){
            startString = state.start;
        }
    }
    if(startString !== ""){
        startString = "&start=" + startString;
    } 
   

    
    let urlString = "";
    urlString = urlString + searchInputString + facetString + dataTypeString + startString;
    return urlString;
}
export default urlBuilder ;