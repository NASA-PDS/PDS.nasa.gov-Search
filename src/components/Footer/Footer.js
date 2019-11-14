import React, { Component } from 'react';

class Footer extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="appFooter footer">
                <div className="footerLinks">
                    <div className="footerLink">
                        <a href="http://www.nasa.gov/" target="_blank">NASA</a>
                    </div>
                    <div className="footerLink">
                        <a href="http://www.caltech.edu/" target="_blank">Caltech</a>
                    </div>
                    <div className="footerLink">
                        <a href="/copyrights.php" target="_blank">Privacy</a>
                    </div>
                    <div className="footerLink">
                        <a href="/copyrights.php" target="_blank">Privacy</a>
                    </div>
                    <div className="footerLink">
                        <a href="/imagepolicy">Image Policy</a>
                    </div>
                    <div className="footerLink">
                        <a href="/faq.php">FAQ</a>
                    </div>
                    <div className="footerLink">
                        <a href="/contact_JPL.php">Feedback</a>
                    </div>      
                </div>     
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})
 
export default Footer;