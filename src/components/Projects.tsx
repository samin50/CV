import React from 'react'

export interface ProjectProps {
    title: string;
    description: string;
}

export const Projects: React.FC<ProjectProps> =  ({title, description}) => {
    return (
        <>
            <div className='text-2xl font-primary font-light'>{title}</div>
            <ul className='list-square text-lg font-light pl-5 pb-3'>
            <li>{description}</li>
            </ul>
        </>
    )
 }