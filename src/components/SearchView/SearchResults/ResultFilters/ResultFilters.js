import React, { Component } from 'react';
import ResultCounter from './ResultCounter';
import SortFilter from './SortFilter';
import DateFilter from './DateFilter';
import { Box, Divider} from '@material-ui/core';
 
class ResultFilters extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <Box>
                <ResultCounter></ResultCounter>
                {/*<SortFilter></SortFilter>*/}
                {/*<DateFilter></DateFilter>*/}
            </Box>
           
        );
    }
}
 
export default ResultFilters;