import './App.css'
import { ProgressBar } from './components/ProgressBar';
import { Projects } from './components/Projects';

function MainPage() {
  const badges = ["UI/UX Design", "Big Data", "Quartus", "Communication", "Verilog", "FPGA", "Computer Vision", "Teamwork", "Machine Learning", "Dynamic Programming", "Leadership", "Big Data Analysis", "Sentiment Analysis", "NLP", "AWS", "PyTorch"];
  return (
    <>
      <div className='bg-white w-a4 h-a4'>
        <div className='flex h-full w-full justify-end pb-4 pt-4 print:pt-0'>
          <div className='ml-6'>
            {/* Banner */}
            <div className='bg-[#2B343D] w-full h-30 prose p-3 pt-3 pl-4 mb-4'>
              <div className='flex items-end justify-between'>
                <h1 className="font-primary text-title">Shaheen Amin</h1>
                <h2 className='font-primary font-thin text-heading pb-0'>Software/Hardware Engineer</h2>
              </div>
              <div className='bg-white w-full h-[1.5px] mb-1'></div>
              <div className="text-text font-[400]">
                Capable and confident in my work, with an excellent ability to communicate with my peers and devise complex yet efficient engineering solutions to any problem that may arise. Proficient in several languages and their associated tools and very quick to learn new skills.
              </div>
            </div>
            <div className='flex flex-row prose'>
              {/* Left pane */}
              <div className="w-3/12">
                {/* Top left icons */}
                <svg className='w-auto h-5 mb-0.5' viewBox="2 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 15L20 15" stroke="#2B343D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 9L20 9" stroke="#2B343D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <circle cx="12" cy="12" r="9" stroke="#2B343D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> <path d="M12.0004 20.8182L11.2862 21.5181C11.4742 21.7101 11.7317 21.8182 12.0004 21.8182C12.2691 21.8182 12.5265 21.7101 12.7146 21.5181L12.0004 20.8182ZM12.0004 3.18188L12.7146 2.48198C12.5265 2.29005 12.2691 2.18188 12.0004 2.18188C11.7317 2.18188 11.4742 2.29005 11.2861 2.48198L12.0004 3.18188ZM14.6004 12.0001C14.6004 15.1611 13.3373 18.0251 11.2862 20.1183L12.7146 21.5181C15.1173 19.0662 16.6004 15.7053 16.6004 12.0001H14.6004ZM11.2861 3.88178C13.3373 5.97501 14.6004 8.83903 14.6004 12.0001H16.6004C16.6004 8.29478 15.1173 4.93389 12.7146 2.48198L11.2861 3.88178ZM9.40039 12.0001C9.40039 8.83903 10.6634 5.97501 12.7146 3.88178L11.2861 2.48198C8.88347 4.93389 7.40039 8.29478 7.40039 12.0001H9.40039ZM12.7146 20.1183C10.6634 18.0251 9.40039 15.1611 9.40039 12.0001H7.40039C7.40039 15.7053 8.88348 19.0662 11.2862 21.5181L12.7146 20.1183Z" fill="#2B343D"></path> </g></svg>
                <div className='text-black text-text'>
                  <a className="text-black hover:text-black hover:mouse-pointer font-normal" href="https://samin50.github.io" target='_blank'>https://samin50.github.io</a>
                </div>
                <svg fill="#2B343D" className='w-auto h-5 mb-0.5 mt-2' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fillRule="evenodd"></path> </g></svg>
                <div className='text-black text-text'>
                  <a className="text-black hover:text-black hover:mouse-pointer font-normal" href="" target=''>shaheen.amin.uk@gmail.com</a>
                  <br />
                  <a className="text-black hover:text-black hover:mouse-pointer font-normal flex items-center" href="https://samin50.github.io/#contact" target='_blank'>Website<svg className="ml-0.5 mt-1 w-auto h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></g></svg></a>
                </div>
                <svg className='w-auto h-5 mb-0.5 mt-2' version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="4 0 64 64" enableBackground="new 0 0 64 64" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#2B343D" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> </g></svg>
                <div className='text-black font-normal text-text mb-5'>London, United Kingdom</div>
                {/* Skill section */}
                <div className='text-[#2B343D] font-bold text-heading'>SKILLS</div>
                <div className='w-full bg-[#2B343D] h-[1.5px] mb-3'></div>
                <div className='flex flex-wrap gap-1 mb-2'>
                  {
                    badges.map((badge, index) => (
                    <div key={index} className="bg-[#95999E] w-auto px-3 py-1 rounded-md font-thin text-tiny font-primary">{badge}</div>
                  ))}
                </div>
                {/* Languages */}
                <div className='text-[#2B343D] font-bold text-heading'>LANGUAGES</div>
                {/* Progress bars */}
                <div className='w-full bg-[#2B343D] h-[2px] mb-3'></div>
                  <ProgressBar name="Python" percent="100%"/>
                  <ProgressBar name="PCB Design" percent="70%"/>
                  <ProgressBar name="CAD Design" percent="70%"/>
                  <ProgressBar name="C/C++" percent="90%"/>
                  <ProgressBar name="Java" percent="70%"/>
                  <ProgressBar name="SQL" percent="95%"/>
                  <ProgressBar name="Verilog" percent="80%"/>
                  <ProgressBar name="Web Dev" percent="70%"/>
                <div className='w-full'>
                </div>
                </div>
              {/* Body  */}
              <div className="ml-2 w-10/12 mr-6">
                {/* Experience */}
                <div className='text-[#2B343D] font-secondary font-bold text-heading pl-3'>EXPERIENCE</div>
                <div className='w-full bg-[#2B343D] h-[1.5px]'></div>
                <div className="text-[#2B343D] text-heading pt-1 pl-3">Amadeus IT Group - Software Development Engineer</div>
                <div className="text-[#2B343D] text-sm pl-3 font-light"><em>09/2024 - Present</em></div>
                <ul className='list-square text-text font-light pl-10 text-black'>
                  <li>
                    Customer-facing role ensuring high-quality service and timely resolution of check-in issues for airline clients. Implements new features and supports continuous improvement efforts to maintain target performance metrics in production and test environments.
                  </li>
                </ul>
                <div className="text-[#2B343D] text-heading pt-1 pl-3">Amadeus IT Group - Software Development Intern</div>
                <div className="text-[#2B343D] text-sm pl-3 font-light"><em>04/2023 - 10/2023</em></div>
                <ul className='list-square text-text font-light pl-10 text-black'>
                  <li>
                    Developed two Python-based tools to automate Confluence page maintenance and analyze Java-based product data, saving hundreds of hours of manual effort.
                  </li>
                  <li>
                    Led multiple demos to cross-functional teams and delivered a well-received final presentation to senior leadership.
                  </li>
                </ul>
                <div className="text-[#2B343D] text-heading pl-3 pt-1">Jacobs - Software Engineer Intern</div>
                <div className="text-[#2B343D] text-sm pl-3 font-light"><em>07/2019 - 08/2019</em></div>
                <ul className='list-square text-text font-light pl-10 pb-3 text-black'>
                  <li>
                    Built a high-speed web scraper to gather and consolidate data into CSV files, reducing manual data collection from 120 websites/min (later throttled).
                  </li>
                  <li>
                    Leveraged NLP, Twitter API, AWS, SQL, Python, and Power BI to create a real-time sentiment analysis dashboard, enabling data-driven insights on public perception.
                  </li>
                </ul>
                {/* Education */}
                <div className='text-[#2B343D] font-secondary font-semibold text-heading pl-3'>EDUCATION</div>
                <div className='w-full bg-[#2B343D] h-[2px]'></div>
                <div className="text-[#2B343D] text-lg pt-2 pl-3"></div>
                <div className="text-[#2B343D] text-lg pl-3">Imperial College London - Computer Engineering MEng</div>
                <div className="text-[#2B343D] text-sm pl-3 font-light"><em>06/2020 - 07/2024</em></div>
                <div className="text-black pl-3 pt-1">
                <Projects 
                  title="Master Thesis: Vision-Assisted Mechatronic Component Sorter (09/2023 - 06/2024)" 
                  description="Developed an automated system for identifying and sorting electronic components (e.g., resistors, capacitors, LEDs) using computer vision techniques. Integrated custom 3D-printed mechanical parts, robust electronics, and multiprocessing-safe software to ensure real-time classification, concurrency management, and error handling. Designed a user-friendly interface and maintained cost-effective, modular components to streamline maintenance and future scalability."
                />
                <Projects 
                  title="Pentesting and Network Security (01/2023 - 04/2023)" 
                  description="Explored SQL injection vulnerabilities, common attack vectors, and best practices in a hands-on Capture the Flag format, gaining practical skills in threat mitigation."
                />
                <Projects 
                  title="Deep Learning (01/2024 - 04/2024)" 
                  description="Trained a CNN for image classification with hyperparameter tuning and data augmentation. Developed a DCGAN for realistic image generation and a Variational Autoencoder for image compression and reconstruction on the MNIST dataset."
                />
                 <Projects 
                  title="Building a C-Compiler (02/2022 - 03/2022)" 
                  description="Built a C compiler that generates MIPS Assembly from C code using Abstract Syntax Trees, Flex, Bison, and OOP-based C++."
                />
                <Projects 
                  title="Digital Systems Design (01/2023 - 04/2023)" 
                  description="Optimized a mathematical function in SystemVerilog for FPGA deployment, enhancing both speed and resource efficiency."
                />
                <Projects 
                  title="Group Project: Online FPGA-Controlled Motion-Based Drawing Game (02/2022 - 03/2022)" 
                  description="Utilized an Intel FPGA with a NIOS II Processor and accelerometer to create a multiplayer drawing game, featuring real-time smoothing, user controls via FPGA buttons/switches, and score displays on 8-segment LEDs."
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
