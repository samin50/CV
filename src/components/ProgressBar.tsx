import React from 'react'

export interface ProjectProps {
    name: string;
    percent: string;
}

export const ProgressBar: React.FC<ProjectProps> =  ({name, percent}) => {
    const progressBarStyles = {
        width: percent,
      };
    return (
        <>
            <div className='text-black mb-2 font-secondary text-sm font-medium'>{name}</div>
            <div className="h-[8px] w-full mb-2 bg-gray-300 rounded-md">
                <div className="bg-[#2B343D] rounded-md h-full" style={progressBarStyles}></div>
            </div>
        </>
    )
 }