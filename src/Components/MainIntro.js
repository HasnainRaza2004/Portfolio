import React, { useEffect } from "react";
import FrontentLogo from "../Designs,Logos & Images/FrontendLogo.png";
import BackendLogo from "../Designs,Logos & Images/BackendLogo.png";
import GraphicDesignLogo from "../Designs,Logos & Images/GraphicDesignLogo.png";
import { getAllSkills } from "../api's";

const MainIntro = () => {
  const [skills, setSkills] = React.useState([]);
  useEffect(() => {
    const skills = getAllSkills().then((res) => {
      setSkills(skills);
    });
  }, []);
  return (
    <>
      <div className="MainIntroText">
        <h2 className="Myname">Hi, I'm Hasnain. Nice to see you.</h2>
        <p className="MyDescription">
          Since beginning my journey as a freelance designer over 11 years ago,
          I've done remote <br /> work for agencies, consulted for startups, and
          collaborated with talented people to create <br /> digital products
          for both business and consumer use. I'm quietly confident, naturally{" "}
          <br /> curious, and perpetually working on improving my chops one
          design problem at a time.
        </p>
        <div className="SkillsDivMain">
          <div className="SkillsSubDiv">
            <div className="FrontendSkill">
              <a className="FrontendLogo" href="">
                <img src={FrontentLogo} alt="" />
              </a>
              <h2>Frontend Developer</h2>
              <p className="SkillDescription">
                I like to code things from scratch, and make it attractive for
                users.
              </p>
              <h3 className="AdvertiseLine">Languages I speak:</h3>
              <h2 className="Experties">Html, Css, Javascript(ES6), React</h2>

              <h3 className="AdvertiseLine">Mobile App Developement:</h3>
              <h2 className="Experties">React Native</h2>

              <h3 className="AdvertiseLine">Frontend Tools:</h3>
              <h2 className="Experties">Bootstrap</h2>
              <h2 className="Experties">Material UI</h2>
              <h2 className="Experties">Redux</h2>
              <h2 className="Experties">Firebase</h2>
              <h2 className="Experties">Github</h2>
            </div>

            <div className="BackendSkill">
              <a className="BackendLogo" href="">
                <img src={BackendLogo} alt="" />
              </a>
              <h2>Backend Developer</h2>
              <p className="SkillDescription">
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
              <h3 className="AdvertiseLine">Enviroment And Frameworks:</h3>
              <h2 className="Experties">Node Js, Express Js</h2>

              <h3 className="AdvertiseLine">Backend Tools:</h3>
              <h2 className="Experties">Mongo DB</h2>
            </div>

            <div className="GraphicSkill">
              <a className="BackendLogo" href="">
                <img src={GraphicDesignLogo} alt="" />
              </a>
              <h2>Graphic Designer</h2>
              <p className="SkillDescription">
                I value creative and simple content structure, clean design
                patterns, and thoughtful interactions.
              </p>
              <h3 className="AdvertiseLine">Design Tools:</h3>
              <h2 className="Experties">Adobe Illustrator, Photoshop, Canva</h2>

              <h3 className="AdvertiseLine">Things I enjoy designing:</h3>
              <h2 className="Experties">Logos</h2>
              <h2 className="Experties">Vectorization</h2>
              <h2 className="Experties">Custom Designs</h2>
              <h2 className="Experties">Mascot</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainIntro;
