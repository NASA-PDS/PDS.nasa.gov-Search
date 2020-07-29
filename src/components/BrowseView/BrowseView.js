import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from '../../components/SearchBar/SearchBar';

const useStyles = (theme) => ({
    fullHeight: {
        height: "100vh"
    },
    searchBarCenter: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
});
 
class BrowseView extends Component {
    componentDidMount() {
    }

    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.fullHeight}>
                <div className={classes.searchBarCenter}>
                    <SearchBar></SearchBar>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})
 
export default withStyles(useStyles)(BrowseView);