import React, { useState } from 'react';
import './LiteratureReview.css'; // Import the updated CSS

const LiteratureReview = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="literature-review">
      <h1 className="section-title">Literature Review on DNS over HTTPS</h1>
      
      <div className="card">
        <h2 className="card-title" onClick={() => toggleSection('privacy')}>
          <span className="card-header">Privacy and Security Benefits</span>
          <span className="toggle-icon">{expandedSection === 'privacy' ? '−' : '+'}</span>
        </h2>
        {expandedSection === 'privacy' && (
          <div className="card-content">
            <p>
              DNS over HTTPS (DoH) encrypts DNS queries to protect users' privacy. By preventing third parties from
              eavesdropping on the user's browsing activity, DoH adds a layer of security, especially on public networks
              where surveillance or malicious interference is a concern (Ager, 2021).
            </p>
            <p>
              Major browsers, such as Chrome and Firefox, have adopted DoH by default, integrating it into their privacy
              settings and allowing users to benefit from enhanced protection against DNS-based tracking and manipulation
              (Mahajan et al., 2021).
            </p>
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="card-title" onClick={() => toggleSection('performance')}>
          <span className="card-header">Performance Impacts</span>
          <span className="toggle-icon">{expandedSection === 'performance' ? '−' : '+'}</span>
        </h2>
        {expandedSection === 'performance' && (
          <div className="card-content">
            <p>
              While DoH enhances security, it introduces latency due to the encryption process. Encrypting DNS traffic can
              slow down DNS resolution, making it take longer for a user’s device to connect to websites, especially on
              networks with limited bandwidth (Smith et al., 2022).
            </p>
            <p>
              Optimizations are needed to address this issue, particularly in large-scale deployments. Several
              performance-enhancing techniques, such as better server selection algorithms and caching improvements, are
              currently under research (Ali et al., 2021).
            </p>
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="card-title" onClick={() => toggleSection('centralization')}>
          <span className="card-header">Centralization of DNS Resolvers</span>
          <span className="toggle-icon">{expandedSection === 'centralization' ? '−' : '+'}</span>
        </h2>
        {expandedSection === 'centralization' && (
          <div className="card-content">
            <p>
              The use of centralized DNS resolvers like Google and Cloudflare introduces concerns regarding the
              concentration of internet traffic. If a few major players control the majority of DoH traffic, it could
              create a single point of control over internet activity (Barrett, 2020; Xie et al., 2021).
            </p>
            <p>
              This centralization raises privacy concerns because it allows these entities to monitor and track browsing
              activities, even if they claim to prioritize user privacy. Addressing this issue requires building more
              decentralized, trustworthy DoH infrastructure (Smith et al., 2021).
            </p>
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="card-title" onClick={() => toggleSection('usecases')}>
          <span className="card-header">Use Cases and Adoption</span>
          <span className="toggle-icon">{expandedSection === 'usecases' ? '−' : '+'}</span>
        </h2>
        {expandedSection === 'usecases' && (
          <div className="card-content">
            <p>
              DoH is particularly useful in environments where user privacy and security are paramount. Public Wi-Fi
              networks, for instance, are often insecure and vulnerable to attacks, making DoH essential in ensuring
              privacy in such environments (Nguyen & Zhang, 2022).
            </p>
            <p>
              Additionally, organizations are adopting DoH internally to secure DNS traffic and reduce the risk of DNS
              spoofing attacks (Jones et al., 2021). DoH has the potential to protect corporate networks and improve
              overall system integrity.
            </p>
          </div>
        )}
      </div>

      <div className="card">
        <h2 className="card-title" onClick={() => toggleSection('openissues')}>
          <span className="card-header">Open Issues and Future Research</span>
          <span className="toggle-icon">{expandedSection === 'openissues' ? '−' : '+'}</span>
        </h2>
        {expandedSection === 'openissues' && (
          <div className="card-content">
            <p>
              Despite the advantages of DoH, it remains a relatively new protocol, and several open research areas need
              to be addressed. One such issue is the interaction between DoH and other protocols like DNS over TLS
              (DoT) and DNSSEC. Research into improving interoperability between these protocols is vital for broader
              adoption (Ali et al., 2021).
            </p>
            <p>
              Moreover, governance over centralized DoH providers and regulatory frameworks need to be clarified, as
              the rise of monopolistic providers could raise privacy concerns (Klein et al., 2022).
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiteratureReview;
