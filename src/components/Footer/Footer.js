import React, { Component } from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    footerBackground: {
        paddingTop: "25px",
        paddingBottom: "25px",
        backgroundColor: theme.palette.primary.main
    },
    footerLinks: {
        color: theme.palette.primary.contrastText,
        marginRight: theme.spacing(2)
    }
});

class Footer extends Component {
    componentDidMount() {
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.footerBackground}>
                <Container>
                    <Typography >
                        <Link 
                            className={classes.footerLinks}
                            href="http://www.nasa.gov/" 
                            target="_blank" 
                            rel="noopener"
                        >
                            NASA
                        </Link>
                        <Link 
                            className={classes.footerLinks}
                            href="http://www.caltech.edu/" 
                            target="_blank" 
                            rel="noopener"
                        >
                            Caltech
                        </Link>
                        <Link
                            className={classes.footerLinks}
                        >
                            Privacy
                        </Link>
                        <Link
                            className={classes.footerLinks}
                        >
                            Image Policy
                        </Link>
                        <Link
                            className={classes.footerLinks}
                        >
                            FAQ
                        </Link>
                        <Link
                            className={classes.footerLinks}
                        >
                            Feedback
                        </Link>
                    </Typography>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})
 
export default (withStyles(useStyles)(Footer));