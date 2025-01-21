import backgroundWelcome from './BGImages/2.jpg';
import backgroundHome from './BGImages/3.jpg';
import linkGithub from './Logos/Github_light.png';
import linkLinkedin from './Logos/Linkedin.png';
import linkEmail from './Logos/Email.png';
import linkResume from './Logos/Resume.png';
import resume from './Resume/LukeLu_Resume.pdf';
import './Home.css';

function Home() {
    return (
        <div id='homescreen'>
            <div id='welcomeScreen' style={{
                backgroundImage: `url(${backgroundWelcome})`,
                backgroundSize: 'cover',
                minHeight: '100vh',
                display: "flex",
                justifyContent: "center"
            }}
                 onClick={e =>
                     transition(document.getElementById("welcomeScreen"), document.getElementById("homeScreen"), 250)}>
                <header className="Home-header">
                    <p style={{fontSize: '100px', padding: '00px', margin: '0px'}}>
                        Welcome.
                    </p>
                    <p style={{padding: '00px', margin: '0px'}}>
                        Click anywhere to begin.
                    </p>
                </header>
            </div>

            <div id='homeScreen' style={{
                display: "none",
                backgroundImage: `url(${backgroundHome})`,
                backgroundSize: 'cover',
                minHeight: '100vh'
            }}>
                <div style={{height:"10vh"}}></div>
                <div style={{background:"#000000a5", borderRadius:"50px", width:"50%", padding:"2%", marginInline:"5%"}}>
                    <div id="aboutMe">
                        <header className="Home-header" style={{float: "left", color:"white"}}>
                            <p style={{fontSize: '100px', padding: '00px', margin: '0px'}}>
                                Hi, I'm Luke.
                                <p style={{fontSize: '30px', padding: '00px'}}>
                                    I'm a contractor working with the Canadian Nuclear Laboratories to build software
                                    solutions that deliver transformational changes throughout the organization. 
                                    <br></br><br></br>
                                    Academically, I pursue an undergraduate degree in computer science at the University of
                                    British Columbia.
                                    <br></br>
                                </p>
                            </p>
                        </header>
                    </div>
                    <div>
                        <a href={'https://github.com/LukeL0000'} target={"_blank"} style={{paddingRight: "1%"}}>
                            <img src={linkGithub} style={{width: "6.1%", height: "6.1%", margin: "0px"}}></img>
                        </a>
                        <a href={'https://www.linkedin.com/in/lukeyanglu/'} target={"_blank"} style={{padding: "1%"}}>
                            <img src={linkLinkedin} style={{width: "6%", height: "6%", margin: "0px"}}></img>
                        </a>
                        <a href={'mailto:luke.yanglu@outlook.com'} target={"_blank"} style={{padding: "1%"}}>
                            <img src={linkEmail} style={{width: "6%", height: "6%", margin: "0px"}}></img>
                        </a>
                        <a href={resume} target={"_blank"} style={{padding: "1%"}}>
                            <img src={linkResume} style={{width: "4.65%", height: "4.65%", margin: "0px"}}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );


    function transition(element_out, element_in, duration) {
        let opacity_out = 1; // initial opacity
        let opacity_in = 0;
        const interval = 10; // interval in milliseconds
        const step = (interval / duration) * opacity_out;

        function animate_out() {
            if (opacity_out <= 0) { // then transition in
                opacity_out = 0;
                element_out.style.display = 'none';
                element_in.style.display = 'block';
                element_in.style.opacity = opacity_in;
                requestAnimationFrame(animate_in);
            }
            if (opacity_out > 0) { // first transition out
                opacity_out -= step;
                element_out.style.opacity = opacity_out;
                requestAnimationFrame(animate_out);
            }
        }
        function animate_in() {
            if (opacity_in >= 1) {
                opacity_in = 1;
                element_in.style.opacity = opacity_in;
            }
            if (opacity_in < 1) {
                opacity_in += step;
                element_in.style.opacity = opacity_in;
                requestAnimationFrame(animate_in);
            }
        }

        requestAnimationFrame(animate_out);
    }
}


export default Home;
