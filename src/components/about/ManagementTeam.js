import React from "react";
import "../../styles/ManagementTeam.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { teamMembers } from "../../constants/ManagementData.js";

const ManagementTeam = () => {
  return (
    <div>
      <div className="team-container">
        <h2 className="team-title">Management Team</h2>
        <div className="members-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="member-card">
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
              />
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-email">{member.email}</p>
                {member.phone && <p className="member-phone">{member.phone}</p>}
                <div className="member-icons">
                  {member.facebookUrl && (
                    <a href={member.facebookUrl} className="member-social-link facebook">
                      <FaFacebook />
                    </a>
                  )}
                  {member.linkedinUrl && (
                    <a href={member.linkedinUrl} className="member-social-link linkedin">
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;