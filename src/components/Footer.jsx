import React,{Component} from "react";

class Footer extends Component {
render(){
    return(
    <>     
    <footer className="container margin-left: 10%  mt-4" >
        <div className="row">
            <div className="col-12 col-md">
            </div>
            <div className="col-6 col-md">
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Audio and Subtitles</a></li>
                    <li><a className="text-muted" href="#">Media Center</a></li>
                    <li><a className="text-muted" href="#">Privacy</a></li>
                    <li><a className="text-muted" href="#">Contact Us</a></li>
                    <small className=" mt-5 text-muted">&copy; 1997-2019 Netflix,Inc. </small>
                </ul>
            </div>
            <div className="col-6 col-md">
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Audio Description</a></li>
                    <li><a className="text-muted" href="#">Investor Relations</a></li>
                    <li><a className="text-muted" href="#">Legal Notices</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Help Center</a></li>
                    <li><a className="text-muted" href="#">Jobs</a></li>
                    <li><a className="text-muted" href="#">Cookie Preferences</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Gift Cards</a></li>
                    <li><a className="text-muted" href="#">Terms of Use</a></li>
                    <li><a className="text-muted" href="#" >Corporate Information</a>
                    </li>
                </ul>
            </div>
        </div>
        </footer>
</>    

    );
}
}

export default Footer;