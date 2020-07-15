import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    fullHeight: {
        height: "100vh"
    }
});
 
class BrowseView extends Component {
    componentDidMount() {
    }

    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.fullHeight}>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})
 
export default withStyles(useStyles)(BrowseView);