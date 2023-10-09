import React from 'react'

export interface ProjectProps {
    title: string;
    description: string;
}

export const Projects: React.FC<ProjectProps> =  ({title, description}) => {
    return (
        <>
            <div className='text-text font-primary font-light'>{title}</div>
            <ul className='list-square text-xs font-light pl-3 pb-3'>
            <li>{description}</li>
            </ul>
        </>
    )
 }