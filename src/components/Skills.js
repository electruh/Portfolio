import React from 'react';
import htmlImage from '../assets/skills/html.png';
import cssImage from '../assets/skills/css.png';
import javascriptImage from '../assets/skills/js.png';
import javaImage from '../assets/skills/java.png';
import reactImage from '../assets/skills/react.png';
import pythonImage from '../assets/skills/python.png';
import phpImage from '../assets/skills/php.png';
import androidImg from '../assets/skills/android.png';
import swiftImg from '../assets/skills/swift.png';
import csharpImg from '../assets/skills/csharp.png';
import netImg from '../assets/skills/net.png';
import nodeImg from '../assets/skills/node.png';
import springImg from '../assets/skills/spring.png';
import gitImg from '../assets/skills/git.png';
import githubImg from '../assets/skills/github.png';


const SkillsPage = () => {
    const skillsData = [
        { name: 'HTML', image: htmlImage },
        { name: 'CSS', image: cssImage },
        { name: 'JavaScript', image: javascriptImage },
        { name: 'React', image: reactImage },
        { name: 'Python', image: pythonImage },
        { name: 'Php', image: phpImage },
        { name: 'Android', image: androidImg },
        { name: '', image: javaImage },
        { name: 'Swift', image: swiftImg },
        { name: 'C#', image: csharpImg },
        { name: '.Net', image: netImg },
        { name: 'Spring', image: springImg },
        { name: 'Node', image: nodeImg },
        { name: 'Git', image: gitImg },
        { name: 'GitHub', image: githubImg },
    ];

    return (
        <div className="skills-page">
            <h2>Programming Skills & Languages</h2>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <img className="skill-image" src={skill.image} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsPage;
