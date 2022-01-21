import React from 'react';

export default function Resume(props) {

    if (props.data) {
        var skillmessage = props.data.skillmessage;
        //skillmessage is overriden in the last section below in this Resume.js
        var education = props.data.education.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                <p>{education.description}</p>
                {/* <p>{education.description2}</p>
                <p>{education.description3}</p>
                <p>{education.description4}</p>
                <p>{education.description5}</p>
                <p>{education.description6}</p>
                <p>{education.description7}</p> */}
                </div>
        })
        var work = props.data.work.map(function (work) {
            return <div key={work.company}><h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <p>{work.description}</p>
                <p>&bull; {work.description2}</p>
                <p>&bull; {work.description3}</p>
                <p>&bull; {work.description4}</p>
                <p>&bull; {work.description5}</p>
                <p>&bull; {work.description6}</p>
                <p>{work.description7}</p>
                <p>{work.description8}</p>           
            </div>
        })

        var skills = props.data.skills.map((skills) => {
            var className = 'bar-expand ' + skills.name.toLowerCase();
            return (
                <li key={skills.name}>
                    <span style={{ width: skills.level, backgroundColor: '#740001' }} className={className}></span><em>{skills.name}</em>
                </li>
            )
        })
    }

    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {education}
                        </div>
                    </div>
                </div>
            </div>


            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    {work}
                </div>
            </div>



            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">
                    <p>
                        {/* {skillmessage} */}
                        &bull; Electronic Medical Record Systems  <br></br>  &bull;   Data Analysis of patient/medical/hospital data  <br></br>  &bull;   Document Creation  <br></br>  &bull;   Project management/team workflows  <br></br>  &bull;   HIPAA and compliance confidentiality  <br></br>  &bull;   Communication with 3rd party vendors  <br></br>  &bull;   Collaboration with colleagues and teams  <br></br>  &bull;   Programming  <br></br>  &bull;   Computer/Telecommunication - hardware/equipment  <br></br>  &bull;   Business Software/applications/systems  <br></br>  &bull;   Certification for intermediate/advanced technical support and system <br></br> &emsp;analysis/administration
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
