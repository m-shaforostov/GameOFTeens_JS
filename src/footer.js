import './footer.css';

function Footer() {

    return (
        <div className="footer-main">
            <div className="footer-logo">
                <div className="logo">GoITeens Lab</div>
            </div>
            <div className="footer-creator">
                <div className="creator"><b>Created by DoubleM</b></div>
            </div>
            <div className={"social-website-buttons"}>
                <button className="ui facebook button"><i aria-hidden="true" className="facebook icon"></i> Facebook
                </button>
                <button className="ui twitter button"><i aria-hidden="true" className="twitter icon"></i> Twitter
                </button>
                <button className="ui google plus button"><i aria-hidden="true" className="google plus icon"></i> Google
                    Plus
                </button>
                <button className="ui linkedin button"><i aria-hidden="true" className="linkedin icon"></i> LinkedIn
                </button>
                <button className="ui instagram button"><i aria-hidden="true" className="instagram icon"></i> Instagram
                </button>
                <button className="ui youtube button"><i aria-hidden="true" className="youtube icon"></i> YouTube
                </button>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 DoubleM Website. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;