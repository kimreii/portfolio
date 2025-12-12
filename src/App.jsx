import DataImage from "./data";
import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProject } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {

  return ( 
    <>
     <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div>
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src="./assets/logo.png" alt="logo" className="w-10 rounded-md" loading="lazy" />
          <q>less talk do more</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Kireina Putri Untari</h1>
        <p className="text-base/loose mb-6 opacity-50">
        As a Digital Business student, I am passionate about how technology and data can shape consumer behavior. With hands-on experience in UI/UX design, front-end development, and digital content creation, I actively contribute to projects that combine creativity with technology. I am eager to apply my skills in website development, data analysis, and digital strategy to help organizations achieve their goals. I thrive in collaborative environments and I am highly motivated to keep learning and adapting.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="./assets/CV Kireina Putri Untari.pdf" 
          className="bg-pink-900 p-4 rounded-2xl hover:bg-pink-600">

            My CV 
            <i className="ri-download-line ri-lg"></i>
          </a>
          <a href="project" 
          className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
            My Project 
            <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>

      </div>
      
      <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 10]} gravity={[0, -30, 0]} />
            </div>
      </div>

{/* about */}
<div className="about mt-32 py-10">
  <div className="xl:w-2/3 lg:w3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">

    <p className="text-base/loose mb-10">
      Hi, my name is Kireina Putri Untari. I am a Full Stack Web Developer with additional expertise in UI/UX Design, Graphic Design, as well as basic knowledge in IoT and AI/ML.
I believe that every digital product should combine an appealing visual design, intuitive user experience, and solid performance. That’s why I develop projects with a balanced approach between design and functionality to deliver the best possible results.
    </p>
    <div className="flex items-center justify-between">
      
                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1 text-center">
                      2<span className="text-pink-800"></span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.84<span className="text-pink-800">/4.00</span>
                    </h1>
                    <p className="text-center">GPA</p>
                  </div>
                </div>

    </div>
  </div>

  <div className="tools mt-32">
    <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      Tools used
    </h1>
    <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Here are the tools I commonly use for Website Development and Design</p>
    <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

    {listTools.map((tool)=>(
           <div key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
           className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg">
        <img 
        src={tool.gambar} 
        alt="Tools Image" 
        className="w-16 h-16 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
        <div>
          <h4 className="font-bold">
          {tool.nama}
          </h4>
          <p className="opacity-50">{tool.ket}</p>
        </div>
      </div>
    ))}
    </div>
  </div>
</div>
{/* about */}

{/* Project and Design */}
<div className="Project mt-32 py-10">
  <h1 className="text-center text-4xl fot-bold mb-2">Project & Design</h1>
  <p className="text-base/loose text-center opacity-50">Here are some projects and design I have created.</p>
  <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

    {listProject.map((project) =>(
      <div key={project.id} className="p-4 bg-zinc-800 rounded-md">
        <img src={project.gambar} alt="Proyek Image" loading="lazy"/>
        <div>
          <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
          <p className="text-base/loose mb-4">{project.desk}</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={project.url} 
            target="_blank" 
            className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold">
              Take a look
              </a>
          </div>
          </div>
      </div>
    ))}
  </div>
</div>
{/* Project */}

{/* Contact */}
<div className="contact mt-32 sm:p-10 p-0" id="contact">
  <h1 
  className="text-4xl mb-2 font-bold text-center"
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-once="true">
    Contact</h1>

  <p className="text-base/loose text-center mb-10 opacity-50"
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-delay="300"
  data-aos-once="true">
  Get in touch with me</p>


  <div className="flex flex-col md:flex-row gap-8" data-d={true}>
    
    <div className="flex-1 bg-zinc-800 p-6 rounded-md" 
    data-aos="fade-up" 
    data-aos-duration="1000" 
    data-aos-delay="400" 
    data-aos-once="true">
      <ChatRoom />
    </div>

  <form 
  action="https://formsubmit.co/kireina1365@gmail.com" 
  method="POST" 
  className="bg-zinc-800 p-10  rounded-md" 
  autoComplete="off"
  data-aos-duration="1000"
  data-aos-delay="500"
  data-aos-once="true">

 <div className="flex flex-col gap-6">
  <div className="flex flex-col gap-2">
    <label className="font-semibold">Full Name</label>
    <input 
    type="text" 
    name="Name" 
    placeholder="Input Name..." 
    className="border border-zinc-500 p-2 rounded-md" 
    required/>

  </div>
    <div className="flex flex-col gap-2">
    <label className="font-semibold">Email</label>
    <input 
    type="email" 
    name="Email" 
    placeholder="Input Email..." 
    className="border border-zinc-500 p-2 rounded-md" 
    required/>

  </div>
    <div className="flex flex-col gap-2">
    <label htmlFor="message" className="font-semibold">
      Message
    </label>
    <textarea 
    type="message" 
    id="message" 
    cols="45" 
    rows="7" 
    placeholder="Message..." 
    className="border border-zinc-500 p-2 rounded-md" 
    data-p={true}
    required>
    </textarea>
  </div>

    <div >
    <button 
    type="submit" 
    className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold">
      Send
    </button>
  </div>
 </div>
  </form>
   </div>
</div>
{/* Contact */}
    </>
  );
}

export default App;
