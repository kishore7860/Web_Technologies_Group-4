import React, { useState } from 'react';
import './Challenges.css'; // Ensure you have a separate CSS file for challenges

const ChallengesAndTrends = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="challenges-and-trends">
      <h1 className="section-title">Challenges and Trends in DNS over HTTPS</h1>

      {/* Challenges Section */}
      <div className="section-header">
        <h2 className="section-title">Challenges in DNS over HTTPS</h2>
      </div>

      <div className="card">
        <h2 className="card-title" onClick={() => toggleSection('implementation')}>
          <span className="card-header">Implementation Challenges</span>
          <span className="toggle-icon">{expandedSection === 'implementation' ? '−' : '+'}</span>
        </h2>
        {expandedSection === 'implementation' && (
          <div className="card-content">
            <p>
              Implementing DNS over HTTPS (DoH) requires extensive modifications to the existing DNS infrastructure.
              These include deploying DoH-compatible resolvers, updating client configurations, and ensuring the
              performance of DNS traffic is not adversely affected by encryption overhead (Li et al., 2021).
            </p>
            <p>
              Additionally, proper configuration of DNS server endpoints and handling failures in encrypted DNS queries
              pose challenges that need attention for a successful deployment.
            </p>
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="card-title" onClick={() => toggleSection('security')}>
          <span className="card-header">Security Vulnerabilities</span>
          <span className="toggle-icon">{expandedSection === 'security' ? '−' : '+'}</span>
        </h2>
        {expandedSection === 'security' && (
          <div className="card-content">
            <p>
              While DoH provides encryption, it also introduces potential security risks such as man-in-the-middle
              attacks if the encryption is not properly implemented. An attacker who can intercept the DoH traffic
              may be able to decrypt or tamper with DNS queries (Jiang et al., 2021).
            </p>
            <p>
              Additionally, security concerns around DNS resolvers' trustworthiness and their potential for misuse
              (such as surveillance) require further mitigation strategies.
            </p>
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="card-title" onClick={() => toggleSection('interoperability')}>
          <span className="card-header">Interoperability Issues</span>
          <span className="toggle-icon">{expandedSection === 'interoperability' ? '−' : '+'}</span>
        </h2>
        {expandedSection === 'interoperability' && (
          <div className="card-content">
            <p>
              Interoperability between DoH and other protocols such as DNS over TLS (DoT) and DNSSEC is still under
              research. Combining DoH with these protocols could help in enhancing DNS security, but compatibility
              issues need to be solved to ensure smooth operation (Ali et al., 2021).
            </p>
            <p>
              There are also concerns about the coordination of DoH with legacy systems and how older applications
              handle encrypted DNS traffic.
            </p>
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="card-title" onClick={() => toggleSection('regulation')}>
          <span className="card-header">Regulatory and Governance Challenges</span>
          <span className="toggle-icon">{expandedSection === 'regulation' ? '−' : '+'}</span>
        </h2>
        {expandedSection === 'regulation' && (
          <div className="card-content">
            <p>
              Regulatory frameworks for DNS over HTTPS are still evolving. Governments and international bodies
              need to establish rules to prevent misuse, such as surveillance by large DoH providers like Google or
              Cloudflare (Klein et al., 2022).
            </p>
            <p>
              Establishing proper governance mechanisms is crucial to ensuring that DoH does not centralize DNS
              control to a few organizations, potentially undermining the decentralized nature of the internet.
            </p>
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="card-title" onClick={() => toggleSection('privacy')}>
          <span className="card-header">Privacy Concerns</span>
          <span className="toggle-icon">{expandedSection === 'privacy' ? '−' : '+'}</span>
        </h2>
        {expandedSection === 'privacy' && (
          <div className="card-content">
            <p>
              While DoH improves encryption of DNS traffic, it may lead to concerns about the collection of
              metadata by centralized DoH providers. This concentration of data could allow these providers to
              monitor browsing activity across a wide range of users, raising privacy concerns (Barrett, 2020).
            </p>
            <p>
              Privacy preservation techniques and decentralization strategies are critical to resolving this issue
              while maintaining the benefits of encrypted DNS traffic.
            </p>
          </div>
        )}
      </div>

      {/* Trends and Future Directions Section */}
      <div className="section-header">
        <h2 className="section-title">Trends and Future Directions in DNS over HTTPS</h2>
      </div>

      <div className="card">
        <h2 className="card-title" onClick={() => toggleSection('performance')}>
          <span className="card-header">Improved Performance and Optimization</span>
          <span className="toggle-icon">{expandedSection === 'performance' ? '−' : '+'}</span>
        </h2>
        {expandedSection === 'performance' && (
          <div className="card-content">
            <p>
              As DNS over HTTPS becomes more widely adopted, advancements in performance optimization are expected.
              This includes techniques like connection reuse, server-side caching, and improvements in DNS query
              response times while maintaining security and privacy (Huang et al., 2022).
            </p>
            <p>
              New research into minimizing the overhead of encryption and reducing latency could contribute to broader
              adoption of DoH across various internet services.
            </p>
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="card-title" onClick={() => toggleSection('adoption')}>
          <span className="card-header">Wider Adoption and Industry Support</span>
          <span className="toggle-icon">{expandedSection === 'adoption' ? '−' : '+'}</span>
        </h2>
        {expandedSection === 'adoption' && (
          <div className="card-content">
            <p>
              Major internet service providers (ISPs) and browser vendors, including Mozilla, Google, and Cloudflare,
              are expected to drive the wider adoption of DoH. This will help build an ecosystem that supports secure
              and privacy-preserving DNS queries for end users (Nguyen et al., 2022).
            </p>
            <p>
              Industry standards, along with clearer regulatory policies, are key to encouraging mass adoption.
            </p>
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="card-title" onClick={() => toggleSection('security-enhancements')}>
          <span className="card-header">Enhanced Security Protocols</span>
          <span className="toggle-icon">{expandedSection === 'security-enhancements' ? '−' : '+'}</span>
        </h2>
        {expandedSection === 'security-enhancements' && (
          <div className="card-content">
            <p>
              The future of DNS over HTTPS includes enhancements in security protocols, such as tighter integration
              with DNSSEC to ensure integrity and authentication of DNS data. Additionally, efforts will be made to
              mitigate any remaining vulnerabilities in the DoH ecosystem (Xie et al., 2021).
            </p>
            <p>
              Advanced cryptographic techniques and authentication strategies will likely be developed to strengthen
              the security of encrypted DNS queries.
            </p>
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="card-title" onClick={() => toggleSection('decentralization')}>
          <span className="card-header">Decentralization and Privacy Enhancements</span>
          <span className="toggle-icon">{expandedSection === 'decentralization' ? '−' : '+'}</span>
        </h2>
        {expandedSection === 'decentralization' && (
          <div className="card-content">
            <p>
              The push for decentralization in the DoH landscape is expected to grow, as privacy concerns about
              centralized providers persist. Future directions include the development of decentralized DoH resolvers
              and protocols that minimize the data collection by a single entity (Santos et al., 2023).
            </p>
            <p>
              Privacy-preserving techniques, such as query anonymization and the use of multiple resolver endpoints,
              will further contribute to the decentralized vision of DoH.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengesAndTrends;
