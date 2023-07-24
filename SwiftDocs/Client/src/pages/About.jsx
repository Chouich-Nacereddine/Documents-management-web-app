import React from "react";
import Menu from "../components/Menu";
import Img1 from '../assets/checklist.png'
import Img2 from '../assets/documents.png'
import Img3 from '../assets/file-management.png'
import Img4 from '../assets/folder.png'
import Img5 from '../assets/folders.png'
import Img6 from '../assets/online-learning.png'
import Img7 from '../assets/planning.png'


const About = () => {
    return (

        <>
            <section id="about" className="pt-[15vh] text-white w-[100vw] h-[100vh] relative z-[-2]" >
                <span className="absolute animate-ping top-[15vh] left-[5vw] z-[-3] "><img src={Img1} alt="IMG" className="h-[10vh]" /></span>
                <span className="absolute animate-ping top-[85vh] left-[15vw] z-[-3]"><img src={Img2} alt="IMG" className="h-[10vh]" /></span>
                <span className="absolute animate-ping top-[50vh] left-[2vw] z-[-3]"><img src={Img4} alt="IMG" className="h-[10vh]" /></span>
                <span className="absolute animate-ping top-[58vh] left-[90vw] z-[-3]"><img src={Img5} alt="IMG" className="h-[10vh]" /></span>
                <span className="absolute animate-ping top-[85vh] left-[80vw] z-[-3]"><img src={Img6} alt="IMG" className="h-[10vh]" /></span>
                <span className="absolute animate-ping top-[15vh] left-[90vw] z-[-3]"><img src={Img7} alt="IMG" className="h-[10vh]" /></span>

                <Menu/>
            </section>
        </>
    );
};

export default About;
