import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, I'm <b>Sahil Ittan</b> and I'm from Ahmedabad, Gujarat 🇮🇳 and currently pursuing a B.E. in Computer Science and Engineering at Chandigarh University.

            I'm a MERN stack web developer passionate about building dynamic and user-focused web applications using <b>MongoDB</b>, <b>Express.js</b>, <b>React</b>, and <b>Node.js</b>. I love bringing ideas to life by connecting sleek front-end designs with efficient and scalable back-end systems.

            I'm <b>open</b> to collaborations, freelance projects, or any opportunity where I can contribute, learn, and grow. Feel free to connect with me through my <b>social media</b> links in the footer or drop me a message via the <b>contact me form</b>—I usually reply within an hour!

            Outside the tech world, I'm also into UI/UX design, and have recently started exploring it to enhance the visual side of my projects. Oh, and fun fact—I've been a team manager for a prize-winning web project and I absolutely love music and creative expression 🎶🎨
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='w-[100%] sm:w-[80%] md:w-[70%] lg:w-[80%] xl:w-[60%] flex flex-wrap justify-center mx-auto'>
        
          <Tilt>
          <Skills skill='React' classes='SkillBox1'/>
          </Tilt>
          <Tilt>
            <Skills skill='Node' classes='SkillBox1' />
          </Tilt>
          <Tilt>
            <Skills skill='Express' classes='SkillBox1' />
          </Tilt>
          <Tilt>
            <Skills skill='MongoDb' classes='SkillBox1'/>
          </Tilt>
          <Tilt>
            <Skills skill='Tailwind' classes='SkillBox1'/>
          </Tilt>
       
          <Tilt>
            <Skills skill='Git' classes='SkillBox2'/>
          </Tilt>
          <Tilt>
            <Skills skill='Github' classes='SkillBox2'/>
          </Tilt>
          <Tilt>
            <Skills skill='Javascript' classes='SkillBox2' />
          </Tilt>
          <Tilt>
            <Skills skill='C++' classes='SkillBox2' />
          </Tilt>
          <Tilt>
            <Skills skill='Java' classes='SkillBox2'/>
          </Tilt>
        <Tilt>
          <Skills skill='Python' classes='SkillBox3'/>
        </Tilt>
        <Tilt>
          <Skills skill='Html' classes='SkillBox3'/>
        </Tilt>
        <Tilt>
          <Skills skill='Css' classes='SkillBox3'/>
        </Tilt>
        <Tilt>
          <Skills skill='Postman' classes='SkillBox3'/>
        </Tilt>
        <Tilt>
          <Skills skill='Figma' classes='SkillBox3' />
        </Tilt>
        
        <Tilt>
          <Skills skill='ChakraUi' classes='SkillBox'/>
        </Tilt>
        <Tilt>
          <Skills skill='Netlify' classes='SkillBox'/>
        </Tilt>
        <Tilt>
          <Skills skill='Npm' classes='SkillBox' />
        </Tilt>
        <Tilt>
          <Skills skill='Bootstrap' classes='SkillBox'/>
        </Tilt>
       
      </div>
    </>
  )
}

export default About