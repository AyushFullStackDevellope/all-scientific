import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"; // Import icons
import "../../styles/EthosBoard.css";
import { boardMembers } from "../../constants/EthosboardData.js";

const EthosBoard = () => {
  return (
    <div className="ethos-container">
      <h2 className="ethos-title">Ethos Board</h2>
      <div className="board-members">
        {boardMembers.map((member, index) => (
          <div key={index} className="board-member">
            <img
              src={member.image}
              alt={member.name}
              className="member-image"
            />
            <h3 className="member-name">{member.name}</h3>
            <div className="social-icons">
              <a href="#" className="social-link">
                {" "}
                <FaFacebookF />
              </a>
              <a href="#" className="social-link">
                {" "}
                <FaLinkedinIn />
              </a>
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EthosBoard;
