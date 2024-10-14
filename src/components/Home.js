import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Overview</h1>
      <section>
        <p><strong>DNS over HTTPS (DoH)</strong> is a protocol that encrypts DNS queries, improving user privacy and security. By preventing eavesdropping and tampering, DoH provides a more secure way to resolve domain names, ensuring that users' web traffic remains private.</p>
      </section>

      <section>
        <h2>Why DNS over HTTPS?</h2>
        <p>DNS queries, by default, are sent in plaintext, which makes them vulnerable to interception and tracking. DoH addresses these issues by encrypting the DNS communication, ensuring that third parties, such as ISPs or malicious actors, cannot easily monitor the websites a user visits. As a result, DoH has been embraced by major browsers and DNS providers like Google, Cloudflare, and Mozilla.</p>
      </section>

      <section>
        <h2>Key Benefits</h2>
        <ul>
          <li><strong>Enhanced Privacy:</strong> Prevents third parties from monitoring DNS queries.</li>
          <li><strong>Data Integrity:</strong> Protects against DNS spoofing and man-in-the-middle attacks.</li>
          <li><strong>Reduced Tracking:</strong> Mitigates tracking mechanisms that rely on DNS data.</li>
        </ul>
      </section>

      <section>
        <h2>Challenges</h2>
        <p>Despite its benefits, DoH faces deployment challenges, including increased latency and potential conflicts with network monitoring systems in enterprise environments. In some cases, DoH may also complicate security measures like content filtering and parental controls.</p>
      </section>
      
    </div>
  );
};

export default Home;
