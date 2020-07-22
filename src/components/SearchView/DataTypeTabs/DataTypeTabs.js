import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTypeTab from './DataTypeTab';
import { Route } from 'react-router-dom'
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    container:{
        padding: '4px'
    }
});
 
class DataTypeTabs extends Component {
    componentDidMount() {
    }
    render() {
        const { classes } = this.props;

        return (
            <Paper variant="outlined" className={classes.container}>
                <Route path="/" render={(props) => 
                    <DataTypeTab
                        {...props}
                        title="data"
                        isActive={
                            this.props.appReducer.dataType === 'data'
                        }
                        isLeftmost={true}
                    />}
                />
                <Route path="/" render={(props) => 
                    <DataTypeTab
                        {...props}
                        title="documentation"
                        isActive={
                            this.props.appReducer.dataType === 'documentation'
                        }
                    />}
                />
            </Paper>
        );
    }
}
 
const mapStateToProps = state => ({
    ...state
});
 
export default connect(mapStateToProps, null)(withStyles(useStyles)(DataTypeTabs));  