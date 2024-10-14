import React from 'react';
import { FaBook, FaLink } from 'react-icons/fa';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">About the Project</h1>
      <p className="about-description">
        This survey paper focuses on DNS over HTTPS (DoH), exploring its impact on
        privacy, security, and overall performance. The project aims to assess the
        current state of DoH, its challenges, and potential use cases in both consumer
        and enterprise environments.
      </p>
      <p className="about-description">
        Our group, Group 4, aims to offer a comprehensive overview of DoH and provide
        solutions to current limitations. We delve deep into how DoH improves privacy and
        enhances security while reducing latency in DNS query resolution.
      </p>

      <h2 className="subheader">
        <FaBook /> Project Details:
      </h2>
      <p className="project-details">
        Topic: <b>A Survey on DNS over HTTPS: Status, Challenges, Use Cases, and Open Issues</b>
      </p>
      <p className="about-description">
        Our project explores the current state of DNS over HTTPS (DoH) and examines
        its effectiveness in enhancing user privacy, improving security, and reducing
        latency in DNS query resolution.
      </p>

      <h2 className="subheader">
        <FaLink /> Links:
      </h2>
      <ul className="link-list">
        <li>
          <a href="https://github.com/kishore7860/Web_Technologies_Group-4" target="_blank" rel="noopener noreferrer">
            GitHub Code Repository
          </a>
        </li>
        <li>
          <a href="https://kishore7860.github.io/Web_Technologies_Group-4/" target="_blank" rel="noopener noreferrer">
            Project Website
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
