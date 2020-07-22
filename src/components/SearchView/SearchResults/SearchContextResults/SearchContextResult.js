import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, CardContent, CardActions, Link, Typography } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    searchResult: {
        maxWidth: '70vh',
        minWidth: '20vh',
        margin: '0 1vh 0 1vh'
    }
});

class SearchContextResult extends Component {
    componentDidMount() {
    }

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.searchResult}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {this.props.title}
                    </Typography>
                    <Typography color="textSecondary">
                        { this.props.data_class }
                    </Typography>
                </CardContent>
                <CardActions>
                    { this.props.resource_url ?
                        <Button 
                            href={this.props.resource_url} 
                            rel="noopener" 
                            target="_blank"
                            color="primary"
                        >
                            More
                        </Button>
                        :
                        <Button 
                            href={`https://sbnarchivedemo.psi.edu/?identifier=${this.props.lid}`} 
                            rel="noopener" 
                            target="_blank"
                            color="primary"
                        >
                            More
                        </Button>
                    }
                </CardActions>
            </Card>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, null)(withStyles(useStyles)(SearchContextResult));