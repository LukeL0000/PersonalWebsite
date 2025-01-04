import backgroundWelcome from './BGImages/2.jpg';
import backgroundHome from './BGImages/1.jpg';
import './Home.css';

function Home() {
    return (
        <div id='homescreen'>
            <div id='welcomeScreen' style={{backgroundImage: `url(${backgroundWelcome})`, backgroundSize: 'cover', minHeight: '100vh', display:"flex", justifyContent:"center"}}
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

            <div id='homeScreen' style={{display: "none", backgroundImage: `url(${backgroundHome})`, backgroundSize: 'cover', minHeight: '100vh'}}>
                <div className="navbar" style={{margin:"auto", width:"max-content", padding:"1%"}}>
                    <a href="#Home">Home</a>
                    <a href="#Experience">Experience</a>
                    <a href="#Projects">Projects</a>
                </div>
                <div id="aboutMe" style={{height:"100%", marginTop:"6%", marginLeft:"10%"}}>
                    <header className="Home-header" style={{float: "left"}}>
                        <p style={{fontSize: '100px', padding: '00px', margin: '0px'}}>
                            I'm Luke.
                            <p style={{fontSize: '30px', padding: '00px', marginRight: '45%'}}>
                                I am a contractor working with the Canadian Nuclear Laboratories to build software
                                solutions that deliver transformational changes throughout the organization.
                            </p>
                            <p style={{fontSize: '30px', padding: '00px', marginRight: '45%'}}>
                                I am also pursuing an undergraduate degree in computer science at the University of British
                                Columbia.
                            </p>

                        </p>

                    </header>
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
