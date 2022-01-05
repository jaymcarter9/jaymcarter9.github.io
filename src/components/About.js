import React from 'react';

export default function About(props) {

    if (props.data) {
        var name = props.data.name;
        var profilepic = 'images/' + props.data.image;
        var badge1 = 'images/' + props.data.badge;
        var cert = 'images/' + props.data.cert;
        var bio = props.data.bio;
        var street = props.data.address.street;
        var city = props.data.address.city;
        var state = props.data.address.state;
        var phone = props.data.phone;
        var email = props.data.email;
        var resumeDownload = props.data.resumedownload;
    }

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profilepic} alt="Jay Carter Profile Picture" />
                    <img className="cert" src={cert} alt="Jay Carter Badge" />
                    <img className="badge1" src={badge1} alt="Jay Carter Badge" />
                    </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{name}</span><br />
                                <span>{street}<br />
                                    {city} {state}
                                </span><br />
                                <span>{phone}</span><br />
                                <span>{email}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

