import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Box, Divider, Grid, Link, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    descriptionText:{
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    }
});

class SearchResult extends Component {
    componentDidMount() {
    }

    render() {
        const { classes } = this.props;

        let timeStamp = this.props.timestamp;
        let targetIds = this.props.target_id;
        if(Array.isArray(targetIds)){
            targetIds = targetIds[targetIds.length - 1];
        }

        return (
            <Box >
                <Box className={classes.root}>
                    <Link href={`https://sbnarchivedemo.psi.edu/?identifier=${this.props.lid}`} target="_blank" rel="noopener">
                        <Box variant="span" fontWeight="fontWeightBold">{this.props.title}</Box>
                    </Link> 

                    <Grid container>
                        <Grid item sm={4} spacing={3}>
                            <Box>
                                <Box component="span" fontWeight="fontWeightBold">
                                    Investigation:&nbsp;
                                </Box> 
                                <Box component="span">
                                    {this.props.investigation_id}
                                </Box>
                            </Box>
                            <Box>
                                <Box component="span" fontWeight="fontWeightBold">
                                    Target:&nbsp;
                                </Box> 
                                <Box component="span">
                                    {targetIds}
                                </Box>
                            </Box>
                            <Box>
                                <Box component="span" fontWeight="fontWeightBold">
                                    Instrument:&nbsp;
                                </Box> 
                                <Box component="span">
                                    {this.props.instrument_id}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item sm={4} spacing={3}>
                            <Box>
                                <Box component="span" fontWeight="fontWeightBold">
                                    Purpose:&nbsp;
                                </Box> 
                                <Box component="span">
                                    {this.props.purpose}
                                </Box>
                            </Box>
                            <Box>
                                <Box component="span" fontWeight="fontWeightBold">
                                    Data Type:&nbsp;
                                </Box> 
                                <Box component="span">
                                    {this.props.collection_type}
                                </Box>
                            </Box>
                            <Box>
                                <Box component="span" fontWeight="fontWeightBold">
                                    Processing Level:&nbsp;
                                </Box> 
                                <Box component="span">
                                    {this.props.processing_level}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Typography className={ classes.descriptionText }>
                        {this.props.description}
                    </Typography>
                </Box>
            <Divider />
        </Box>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, null)(withStyles(useStyles)(SearchResult));