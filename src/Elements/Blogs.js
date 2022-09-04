import React from "react";
import './Blogs.css';
import { Button } from "./Button";

function Blogs(){

    return(
        <div className="Blogs">
            <div className="first-section">
                    <h2 id="start-heading">It's not too late</h2>
                    <p id="start-text">You! as an responsible citizen can make lot of difference.</p>
                <div className="about-cozy-earth">
                    <div id="Main-text">
                        <h1>Cozy Earth</h1>
                        <p>_________________________</p>
                    </div>
                    <div id="Main-intro">
                        <p>
                            Cozy Earth is an interactive tool that lets you learn about renewable sources, also lets you know which energy
                            source is ideal for your location. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti rerum 
                            nostrum cupiditate, eum ea eos Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, doloremque. 
                            Eius ea veritatis quasi ad eos, eum ipsum ab velit.
                        </p>
                    </div>
                </div>
                <div className="Save-Earth">
                    <div id="Main-intro">
                        <p>
                            Cozy Earth is an interactive tool that lets you learn about renewable sources, also lets you know which energy
                            source is ideal for your location. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti rerum 
                            nostrum cupiditate, eum ea eos Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, doloremque. 
                            Eius ea veritatis quasi ad eos, eum ipsum ab velit.
                        </p>
                        
                    </div>
                    <p id="Line">________________________</p>
                    <div id="Main-text">
                        <h1>Save Earth</h1>
                    </div>
                </div>
            </div>
        	<div className="Second-section">
                    {/* <Button className="Blog-button">EXPLORE</Button> */}
               <div className="General-info">
                    <div id="Second-heading"><h1>Heading 1</h1></div>
                    <div id="Second-heading"><h1>Heading 2</h1></div>
                    <div id="Second-heading"><h1>Heading 3</h1></div>  
                    <div id="Second-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, ipsam! Lorem ipsum
                                          dolor sit amet consectetur, adipisicing elit. Esse illo accusantium, quisquam fuga 
                                          perferendis labore ducimus error nam</div>
                    <div id="Second-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident eaque ad fuga deserunt rem beatae alias incidunt deleniti </div>
                    <div id="Second-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium numquam temporibus repellat tenetur dolorum fugiat saepe velit eum  </div>  
               </div>
            </div>
            
        </div>
    )
}

export default Blogs;