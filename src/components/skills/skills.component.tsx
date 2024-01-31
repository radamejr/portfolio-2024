import aws from '../../assets/amazonaws.png'
import django from '../../assets/django-icon.png'
import js from '../../assets/js.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import typescript from '../../assets/typescript.png'

import './skills.scss'
const Skills = () => {
    return (
        <div className='skills-wrapper'>
            <img className='technology-image' src={aws} alt='Amazon Web Services'/>
            <img className='technology-image' src={django} alt='Django'/>
            <img className='technology-image' src={js} alt='JavaScript'/>
            <img className='technology-image' src={react} alt='React'/>
            <img className='technology-image' src={python} alt='Python'/>            
            <img className='technology-image' src={redux} alt='Redux'/>
            <img className='technology-image' src={typescript} alt='TypeScript'/>
        </div>
    )
}

export default Skills