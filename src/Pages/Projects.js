import backgroundWelcome from './BGImages/2.jpg';
import backgroundHome from './BGImages/3.jpg';
import linkGithub from './Logos/Github_dark.png';
import linkLinkedin from './Logos/Linkedin.png';
import linkEmail from './Logos/Email.png';
import resume from './Resume/LukeLu_Resume.pdf';
import './Home.css';

function Projects() {
    return (
        <div id='homescreen'>

            <div id='homeScreen' style={{
                backgroundImage: `url(${backgroundHome})`,
                backgroundSize: 'cover',
                minHeight: '100vh'
            }}>
                <div className="navbar" style={{margin: "auto", width: "max-content", padding: "1%"}}>
                    <a href="#Home">Home</a>
                    <a href="Experience">Experience</a>
                    <a href="#Projects">Projects</a>
                    <a href={resume} target={"_blank"}>Resume</a>
                </div>
                <div id="aboutMe" style={{height: "100%", marginTop: "3%", marginLeft: "10%"}}>
                    <header className="Home-header" style={{float: "left", color:"black"}}>
                        <p style={{fontSize: '100px', padding: '00px', margin: '0px'}}>
                            Hang Tight!
                            <p style={{fontSize: '30px', padding: '00px', marginRight: '45%'}}>
                                This page (Projects) is work in progress, and will be live soon.
                            </p>
                        </p>
                        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="small"
                             data-theme="light" data-type="VERTICAL" data-vanity="lukeyanglu" data-version="v1"></div>
                    </header>
                </div>
            </div>
        </div>
    );
}


export default Projects;
