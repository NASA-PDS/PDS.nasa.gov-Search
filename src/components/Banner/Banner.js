import React, { Component } from 'react';
import { AppBar, IconButton, InputLabel, Link, MenuItem, Select, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import logo from '../../assets/images/pdsLogo.png';

const useStyles = (theme) => ({
    title: {
        marginRight: theme.spacing(5)
    },
    headerLogo: {
        maxHeight: "6vh"
    },
    pdsBanner: {
        background: "#000000"
    },
    pdsBannerText:{
        color: "#ffffff"
    },
    pdsBannerSelect:{
        '&:before': {
        borderColor: "#000000",
        },
        '&:after': {
        borderColor: "#000000",
        },
        color: 'white'
    },
    whiteColor: {
        color: 'white'
    }
});

class Banner extends Component {
    handleSelect = (event) => {
        const selection = event.target.value;

        if(selection === "atmospheres"){
            window.open("https://pds-atmospheres.nmsu.edu", "_self");
        }
        if(selection === "geosciences"){
            window.open("https://pds-geosciences.wustl.edu", "_self");
        }
        if(selection === "cartography"){
            window.open("https://pds-imaging.jpl.nasa.gov", "_self");
        }
        if(selection === "planetaryplasma"){
            window.open("https://pds-ppi.igpp.ucla.edu", "_self");
        }
        if(selection === "rings"){
            window.open("https://pds-rings.seti.org", "_self");
        }
        if(selection === "smallbodies"){
            window.open("https://pds-smallbodies.astro.umd.edu", "_self");
        }
        if(selection === "Navigation And Ancillary Information Facility"){
            window.open("https://naif.jpl.nasa.gov/naif/", "_self");
        }
        if(selection === "engineering"){
            window.open("https://pds-engineering.jpl.nasa.gov/", "_self");
        }
        if(selection === "projectmanagement"){
            window.open("https://pdsmgmt.gsfc.nasa.gov", "_self");
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <AppBar position="static" className={classes.pdsBanner}>
                <Toolbar className={classes.pdsBannerText}>
                    <IconButton edge="start" aria-label="">
                        <Link
                            href="https://pds.nasa.gov" 
                            rel="noopener"
                        >
                            <img 
                                src={logo}
                                className={classes.headerLogo}
                                alt=""
                            />
                        </Link>
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        Planetary Data System
                    </Typography>
                    
                    <InputLabel id="demo-simple-select-outlined-label">
                        <Typography variant="body1" className={classes.pdsBannerText}>
                            Find A Node
                        </Typography>
                    </InputLabel>

                    <Select
                        classes={{
                            icon: classes.whiteColor
                        }}
                        className={classes.pdsBannerSelect}
                        onChange={this.handleSelect}
                        label="Find A node"
                        value=""
                    >
                        <MenuItem value="atmospheres">
                            Atmospheres
                        </MenuItem>
                        <MenuItem value="geosciences">
                            Geosciences
                        </MenuItem>
                        <MenuItem value="cartography">
                            Cartography And Imaging Sciences
                        </MenuItem>
                        <MenuItem value="planetaryplasma">
                            Planetary Plasma Interactions
                        </MenuItem>
                        <MenuItem value="rings">
                            Ring-Moon Systems
                        </MenuItem>
                        <MenuItem value="smallbodies">
                            Small Bodies
                        </MenuItem>
                        <MenuItem value="engineering">
                            Engineering Support
                        </MenuItem>
                        <MenuItem value="projectmanagement">
                            Project Management
                        </MenuItem>
                    </Select>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(useStyles)(Banner);