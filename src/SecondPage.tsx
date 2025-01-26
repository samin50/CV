import './App.css'
import { Projects } from './components/Projects.tsx'

function SecondPage() {
  return (
    <>
        <div className='bg-white w-a4 h-a4 text-black'>
            <div className='flex flex-col h-full w-full pb-4 pt-4 px-6'>
                <div className='text-[#2B343D] font-secondary font-semibold text-heading pl-3'>EDUCATION CONT.</div>
                <div className='w-full bg-[#2B343D] h-[2px] mb-2'></div>
                <div className='w-full ml-2 mr-6'>
                  <Projects
                    title="Self-Organizing Multi-Agent Systems (SoMAS) (10/2023 - 12/2023)"
                    description="Examined group theory concepts and personally built a Python/Pygame-based simulator. Agents competed and collaborated to maximize survival, with the simulator critical for debugging and behavioral analysis."
                  />
                  <Projects
                    title="Hardware and Software Verification (01/2024 - 04/2024)"
                    description="Utilized Yosys and Dafny to formally verify Verilog hardware designs, and employed Isabelle to prove algorithm correctness."
                  />
                  <Projects
                    title="Distributed Ledgers and Cryptography (10/2023 - 12/2023)"
                    description="Studied Proof-of-Work and Proof-of-Stake consensus mechanisms, implementing custom Solidity smart contracts to deepen practical understanding."
                  />
                  <Projects 
                    title="Portfolio Website/CV (05/2023 - Present)" 
                    description="Showcases my projects in greater detail. Built using HTML, Tailwind CSS, and ReactJS (including this CV)."
                  />
                  <Projects 
                    title="Digital Circuit Simulator and Simplifier (01/2019 - 12/2019)" 
                    description="Developed a Python-based simulator capable of generating SOP expressions, truth tables, and providing advanced features like circuit saving/loading."
                  />
                  <Projects 
                    title="Dual Core CPU Design (06/2021 - 07/2021)" 
                    description="Designed and tested a dual-core CPU at gate-level, executing a program to find the mean of an integer array in memory twice as fast as a single-core version."
                  />
                  <Projects 
                  title="Advanced Graphics and Ray Tracing (01/2023 - 04/2023)" 
                  description="Implemented vertex and fragment shaders, smooth shading via normal interpolation, and ray tracing to render primitive objects with accurate reflections and light bounces."
                  />
                  <Projects title="Group Project: Mars Rover (05/2022 - 06/2022)" description="Fully autonomous Mars Rover which scanned the environment using a Computer Vision algorithm written in Verilog and C that I developed - the Rover had the task of avoiding coloured balls as obstacles in an unevenly illuminated room. The designed algorithm was able to identify the distance to each distinct target and performed HSV conversions to find them. Additionally, the algorithm was able to perform noise rejection, and ignore any cluster of pixels that were not part of the larger body of the obstacle."/>
                  <Projects title="Group Project: Pet Feeder (10/2022 - 01/2023)" description="Developed a IoT pet feeder that could accurately weigh and dispense food into a bowl. I took charge and designed the entire mechanical workings of the system using my 3D printer and CAD software. Later, I integrated Computer Vision into the controller's camera to provide the ability of distinguishing between different pets."/>
                  <Projects title="Group Project: Embedded Piano (01/2023 - 04/2023)" description="Wrote the firmware for interconnecting piano modules to play and record piano using different piano voices. The piano supported 8 key polyphony, limited by the hardware constraints of the modules."/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SecondPage 