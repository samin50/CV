import './App.css'
import { Projects } from './components/Projects.tsx'

function SecondPage() {
  return (
    <>
        <div className='bg-white w-a4 h-a4 text-black'>
            <div className='flex flex-col h-full w-full pb-4 pt-4 px-6'>
                <div className='text-[#2B343D] font-secondary font-semibold text-heading pl-3'>EDUCATION</div>
                <div className='w-full bg-[#2B343D] h-[2px] mb-2'></div>
                <Projects title="Group Project: Mars Rover (05/2022 - 06/2022)" description="Fully autonomous Mars Rover which scanned the environment using a Computer Vision algorithm written in Verilog and C that I developed - the Rover had the task of avoiding coloured balls as obstacles in an unevenly illuminated room. The designed algorithm was able to identify the distance to each distinct target and performed HSV conversions to find them. Additionally, the algorithm was able to perform noise rejection, and ignore any cluster of pixels that were not part of the larger body of the obstacle."/>
                <Projects title="Group Project: Pet Feeder (10/2022 - 01/2023)" description="Developed a IoT pet feeder that could accurately weigh and dispense food into a bowl. I took charge and designed the entire mechanical workings of the system using my 3D printer and CAD software. Later, I integrated Computer Vision into the controller's camera to provide the ability of distinguishing between different pets."/>
                <Projects title="Group Project: Embedded Piano (01/2023 - 04/2023)" description="Wrote the firmware for interconnecting piano modules to play and record piano using different piano voices. The piano supported 8 key polyphony, limited by the hardware constraints of the modules."/>
            </div>
        </div>
    </>
  )
}

export default SecondPage