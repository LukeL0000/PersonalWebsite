import backgroundWelcome from './BGImages/2.jpg';
import backgroundHome from './BGImages/3.jpg';
import linkGithub from './Logos/Github_dark.png';
import linkLinkedin from './Logos/Linkedin.png';
import linkEmail from './Logos/Email.png';
import resume from './Resume/LukeLu_Resume.pdf';
import './Home.css';

function Home() {
    return (
            <div id='homeScreen' style={{
                backgroundImage: `url(${backgroundHome})`,
                backgroundSize: 'cover',
                minHeight: '100vh'
            }}>
                <div className="navbar" style={{margin: "auto", width: "max-content", padding: "1%"}}>
                    <a href="/Home">Home</a>
                    <a href="/Experience">Experience</a>
                    <a href="/Projects">Projects</a>
                    <a href={resume} target={"_blank"}>Resume</a>
                </div>
                <div id="aboutMe" style={{height: "100%", marginTop: "3%", marginLeft: "10%"}}>
                    <header className="Home-header" style={{float: "left", color:"black"}}>
                        <p style={{fontSize: '100px', padding: '00px', margin: '0px'}}>
                            I'm Luke.
                            <p style={{fontSize: '30px', padding: '00px', marginRight: '45%'}}>
                                I am a contractor working with the Canadian Nuclear Laboratories to build software
                                solutions that deliver transformational changes throughout the organization.
                            </p>
                            <p style={{fontSize: '30px', padding: '00px', marginRight: '45%'}}>
                                I am also pursuing an undergraduate degree in computer science at the University of
                                British Columbia.
                            </p>
                        </p>
                    </header>
                </div>
                <div style={{marginLeft: "10%"}}>
                    <a href={'https://github.com/LukeL0000'} style={{paddingRight: "1%"}}>
                        <img src={linkGithub} style={{width: "6%", height: "6%", margin: "0px"}}></img>
                    </a>
                    <a href={'https://www.linkedin.com/in/lukeyanglu/'} style={{padding: "1%"}}>
                        <img src={linkLinkedin} style={{width: "7%", height: "7%", margin: "0px"}}></img>
                    </a>
                    <a href={'mailto:luke.yanglu@outlook.com'} style={{padding: "1%"}}>
                        <img src={linkEmail} style={{width: "6%", height: "6%", margin: "0px"}}></img>
                    </a>
                </div>
            </div>
    );
}


export default Home;
