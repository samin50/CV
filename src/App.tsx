import './App.css'
import { ProgressBar } from './components/ProgressBar';
import { Projects } from './components/Projects';

function App() {
  const badges = ["UI/UX Design", "Big Data", "Quartus", "Communication", "Verilog", "FPGA", "Computer Vision", "Teamwork", "Machine Learning", "Dynamic Programming", "Leadership", "Big Data Analysis", "Sentiment Analysis", "NLP", "Excel", "AWS"];
  return (
    <>
      <div className='bg-white'>
        <div className='flex h-full w-full justify-end py-4'>
          <div className='ml-6'>
            {/* Banner */}
            <div className='bg-[#2B343D] w-full h-30 prose p-4 pt-3 pl-4 mb-6'>
              <h1 className="font-primary text-4xl pb-0">Shaheen Amin</h1>
              <h2 className='font-primary font-thin text-xl pb-1'>Software/Hardware Engineer</h2>
              <div className='bg-white w-full h-[1.5px] mb-1'></div>
              <div className="text-xs font-light">
                Capable and confident in my work, with an excellent ability to communicate with my peers and devise complex yet efficient
                engineering solutions to any problem that may arise. Proficient in several languages and their associated tools and very quick to
                learn new skills.
              </div>
            </div>
            <div className='flex flex-row prose'>
              {/* Left pane */}
              <div className="w-3/12">
                {/* Top left icons */}
                <svg className='w-auto h-5 mb-0.5' viewBox="2 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 15L20 15" stroke="#2B343D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 9L20 9" stroke="#2B343D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12" r="9" stroke="#2B343D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M12.0004 20.8182L11.2862 21.5181C11.4742 21.7101 11.7317 21.8182 12.0004 21.8182C12.2691 21.8182 12.5265 21.7101 12.7146 21.5181L12.0004 20.8182ZM12.0004 3.18188L12.7146 2.48198C12.5265 2.29005 12.2691 2.18188 12.0004 2.18188C11.7317 2.18188 11.4742 2.29005 11.2861 2.48198L12.0004 3.18188ZM14.6004 12.0001C14.6004 15.1611 13.3373 18.0251 11.2862 20.1183L12.7146 21.5181C15.1173 19.0662 16.6004 15.7053 16.6004 12.0001H14.6004ZM11.2861 3.88178C13.3373 5.97501 14.6004 8.83903 14.6004 12.0001H16.6004C16.6004 8.29478 15.1173 4.93389 12.7146 2.48198L11.2861 3.88178ZM9.40039 12.0001C9.40039 8.83903 10.6634 5.97501 12.7146 3.88178L11.2861 2.48198C8.88347 4.93389 7.40039 8.29478 7.40039 12.0001H9.40039ZM12.7146 20.1183C10.6634 18.0251 9.40039 15.1611 9.40039 12.0001H7.40039C7.40039 15.7053 8.88348 19.0662 11.2862 21.5181L12.7146 20.1183Z" fill="#2B343D"></path> </g></svg>
                <div className='text-black font-secondary text-sm'>
                  <a className="text-black hover:text-black hover:mouse-pointer font-normal" href="https://samin50.github.io" target='_blank'>https://samin50.github.io</a>
                </div>
                <svg fill="#2B343D" className='w-auto h-5 mb-0.5 mt-2' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd"></path> </g></svg>
                <div className='text-black font-secondary text-sm'>
                  <a className="text-black hover:text-black hover:mouse-pointer font-normal" href="https://samin50.github.io" target='_blank'>Contact on Website!</a>
                </div>
                <svg className='w-auto h-5 mb-0.5 mt-2' version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="4 0 64 64" enable-background="new 0 0 64 64" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#2B343D" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> </g></svg>
                <div className='text-black font-secondary font-normal text-sm mb-5'>London, United Kingdom</div>
                {/* Skill section */}
                <div className='text-[#2B343D] font-secondary font-semibold text-xl'>SKILLS</div>
                <div className='w-full bg-[#2B343D] h-[1.5px] mb-3'></div>
                <div className='flex flex-wrap gap-3 mb-5'>
                  {
                    badges.map((badge, index) => (
                    <div key={index} className="bg-[#95999E] w-auto px-3 py-1 rounded-md font-thin text-xs font-primary">{badge}</div>
                  ))}
                </div>
                {/* Languages */}
                <div className='text-[#2B343D] font-secondary font-semibold text-xl'>LANGUAGES</div>
                {/* Progress bars */}
                <div className='w-full bg-[#2B343D] h-[2px] mb-3'></div>
                  <ProgressBar name="Python" percent="100%"/>
                  <ProgressBar name="C/C++" percent="90%"/>
                  <ProgressBar name="Java" percent="40%"/>
                  <ProgressBar name="SQL" percent="95%"/>
                  <ProgressBar name="Verilog" percent="80%"/>
                <div className='w-full'>
                </div>
                </div>
              {/* Body  */}
              <div className="mx-6 w-10/12">
                {/* Education */}
                <div className='text-[#2B343D] font-secondary font-semibold text-xl pl-5'>EDUCATION</div>
                <div className='w-full bg-[#2B343D] h-[2px]'></div>
                <div className="text-[#2B343D] text-lg pt-2 pl-5 font-bold">Electronics and Information/Computer Engineering MEng</div>
                <div className="text-[#2B343D] text-lg pl-5">Imperial College London</div>
                <div className="text-[#2B343D] text-sm pl-5 font-light"><em>06/2020 - Present</em></div>
                <div className="text-[#2B343D] text-sm pl-5 font-light"><em>Learned skills include, but not limited to:</em></div>
                <div className='flex flex-wrap flex-row text-black pl-5 pt-1'>
                  <ul className="space-y-1 list-square pl-5 text-xs font-light pb-5">
                    <li>Computer Architecture</li>
                    <li>Quartus + Intel FPGA</li>
                    <li>Dynamic Programming</li>
                    <li>Web Development</li>
                  </ul>
                  <ul className="space-y-1 list-square pl-36 text-xs font-light">
                    <li>Machine Learning</li>
                    <li>Verilog-based Computer Vision</li>
                    <li>Linear Algebra</li>
                    <li>OpenGL and Raytracing</li>
                  </ul>
                </div>
                {/* Projects */}
                <div className='text-[#2B343D] font-secondary font-semibold text-xl pl-5'>PROJECTS</div>
                <div className='w-full bg-[#2B343D] h-[1.5px] mb-2'></div>
                <div className="text-black pl-5">
                  <Projects title="Portfolio Website (05/2023 - Present)" description="On my website you will be able to see my projects in much greater detail. Developed using HTML, Tailwind CSS and ReactJS."/>
                  <Projects title="Digital Circuit Simulator and Simplifier (01/2019 - 12/2019)" description="Developed a digital circuit simulator and simplifier in C++"/>
                  <Projects title="Dual Core CPU Design (06/2021 - 07/2021)" description="Successfully designed and tested a working dual-core CPU at gate-level and executed a program to find the mean value of integers in an array in memory. The program was hardcoded into the simulated RAM and performed twice as fast as its single-core counterpart."/>
                  <Projects title="Building a C-Compiler (02/2022 - 03/2022)" description="Working with one other pair, we built a functioning C Compiler to generate MIPS Assembly from C code, represented using Abstract Syntax Trees and lexing/parsing using Flex, Bison and High-Level C++ OOP."/>
                  <Projects title="Group Project: Online FPGA-Controlled Motion-Based Drawing Game (02/2022 - 03/2022)" description="Using a NIOS II Processor and Accelerometer on an Intel FPGA, we created a multiplayer drawing game (each client on different networks) that used the FPGA as a drawing tool/stylus. The accelerometer data passed through a moving-average filter, to enable smoother inputs for the user - all drawing tools were made available to the user through the FPGA's buttons and switches, and the user's score was shown clearly on the 8-segment displays."/>
                  <Projects title="Group Project: Mars Rover (05/2022 - 06/2022)" description="Fully autonomous Mars Rover which scanned the environment using a Computer Vision algorithm written in Verilog and C that I developed - the Rover had the task of avoiding coloured balls as obstacles in an unevenly illuminated room. The designed algorithm was able to identify the distance to each distinct target and performed HSV conversions to find them. Additionally, the algorithm was able to perform noise rejection, and ignore any cluster of pixels that were not part of the larger body of the obstacle."/>
                </div>
                {/* Experience */}
                <div className='text-[#2B343D] font-secondary font-semibold text-xl pl-5'>EXPERIENCE</div>
                <div className='w-full bg-[#2B343D] h-[1.5px]'></div>
                <div className="text-[#2B343D] text-xl pt-2 pl-5 font-medium">Software Engineer Intern</div>
                <div className="text-[#2B343D] text-xl pl-5">Jacobs</div>
                <div className="text-[#2B343D] text-sm pl-5 font-light"><em>07/2019 - 08/2019</em></div>
                <ul className='list-square text-xs font-light pl-5 pb-3 text-black'>
                  <li>
                    Designed a webscraper that was used to gather and extract the necessary data and condense
                    it into a CSV (to be edited in Excel) for my peers who would have otherwise undertaken this
                    manually. The achieved throughput was 120 websites/minute, (then intentionally
                    bottlenecked to prevent overloading the server).
                  </li>
                  <li>
                    Used a combination of Natural Language Processing, Twitter API, PowerBI, SQL, AWS and
                    Python to create a program that would elegantly display the public's 'sentiment' towards any
                    specific keyword or phrase. A database was used to store the anonymized data and queried to
                    show the graphs on the PowerBI interface.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
