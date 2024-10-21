import React from 'react';
import './Taxonomy.css'; // Assuming you're going to create this CSS file

const Taxonomy = () => {
  return (
    <div className="taxonomy-container">
      <h1 className="taxonomy-title">Taxonomy</h1>
      <p className="taxonomy-description">
        "This interactive taxonomy table summarizes 24 research papers on DNS-over-HTTPS by categorizing
         them based on problem definitions, proposed solutions, and methodologies, providing a clear overview 
         of the current research landscape."
      </p>
      
      <div className="table-responsive">
        <table className="taxonomy-table">
          <thead>
            <tr>
              <th>Problem Domain</th>
              <th>Paper Citation</th>
              <th>Problem Addressed</th>
              <th>Solution Approach</th>
              <th>Methodology</th>
              <th>Challenges</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Security and Privacy</td>
              <td>Sharma et al. (2020), Yadav and Gupta (2009)</td>
              <td>Downgrade Attacks</td>
              <td>Strong encryption, Integrity checks</td>
              <td>TLS 1.3, PFS</td>
              <td>Legacy compatibility</td>
              <td>Reduced attack risk</td>
            </tr>
            <tr>
              <td></td>
              <td>De Oliveira and Silva (2021), Zhang and Li (2022), Yoon and Chang (2021)</td>
              <td>Data Leakage</td>
              <td>DNS anonymization, MPC</td>
              <td>Anonymizing resolvers</td>
              <td>Privacy concerns, overheads</td>
              <td>Decreased leakage, better privacy</td>
            </tr>
            <tr>
              <td>Performance Optimization</td>
              <td>Liu and Zhang (2021), Zhang and Wang (2020)</td>
              <td>Latency Overheads</td>
              <td>Caching, TLS optimization</td>
              <td>ML-based caching</td>
              <td>Balancing performance, infrastructure</td>
              <td>30% faster DNS resolution</td>
            </tr>
            <tr>
              <td></td>
              <td>Lee and Kim (2022), Li and Zhang (2021)</td>
              <td>Bandwidth Overheads</td>
              <td>Hybrid protocols, Compression</td>
              <td>QUIC, compression</td>
              <td>Compatibility, overheads</td>
              <td>Improved bandwidth efficiency</td>
            </tr>
            <tr>
              <td>Traffic Classification</td>
              <td>Gao and Zhang (2021), Cheng and Luo (2022), Simmonds and Wang (2021)</td>
              <td>Malicious Traffic</td>
              <td>ML-based classification</td>
              <td>Random Forest, CNN</td>
              <td>Encrypted traffic detection</td>
              <td>95% classification accuracy</td>
            </tr>
            <tr>
              <td></td>
              <td>Wang and Zhang (2020), Choi and Lee (2021), Liu and Li (2021)</td>
              <td>Anomaly Detection</td>
              <td>Deep learning-based detection</td>
              <td>CNNs</td>
              <td>Encrypted traffic, sophisticated attacks</td>
              <td>Better detection of botnets, phishing</td>
            </tr>
            <tr>
              <td>DoH Adoption & Global Measurement</td>
              <td>Shulman et al. (2019), Saito and Zhang (2021), Wang and Zhang (2021)</td>
              <td>Regional Adoption</td>
              <td>Disparities in adoption</td>
              <td>Surveys, ISP data</td>
              <td>Infrastructure, legacy systems</td>
              <td>Higher adoption in Europe/N. America</td>
            </tr>
            <tr>
              <td></td>
              <td>Zhang and Wang (2014), Zhang and Li (2021)</td>
              <td>Infrastructure Impact</td>
              <td>Mobile network latency</td>
              <td>Mobile network studies</td>
              <td>Infrastructure limitations</td>
              <td>Higher latency on mobile networks</td>
            </tr>
            <tr>
              <td>Machine Learning-Based Solutions</td>
              <td>Park and Shin (2021), Zhang and Wang (2021)</td>
              <td>DNS Optimization</td>
              <td>Query prediction</td>
              <td>ML models</td>
              <td>Data volume, real-time processing</td>
              <td>25% faster DNS lookups</td>
            </tr>
            <tr>
              <td></td>
              <td>Zhao and Li (2020), Kim and Yang (2020)</td>
              <td>Traffic Classification</td>
              <td>Traffic analysis</td>
              <td>Random Forest, SVM</td>
              <td>Accuracy, encrypted traffic</td>
              <td>10-15% better detection accuracy</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Taxonomy;
