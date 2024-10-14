import React from 'react';
import './References.css'; // Import the custom CSS file

const References = () => {
  return (
    <div className="references">
      <h1>References</h1>
      <p className="description">Below is the list of references for the literature used in the survey.</p>
      <ul className="reference-list">
        <li>
          <a href="https://tools.ietf.org/html/rfc8484" target="_blank" rel="noopener noreferrer">
            RFC 8484: DNS over HTTPS (DoH)
          </a>
        </li>
        <li>
          <a href="https://tools.ietf.org/html/rfc7858" target="_blank" rel="noopener noreferrer">
            RFC 7858: DNS over TLS
          </a>
        </li>
        <li>
          <a href="https://www.acs.com/techpapers/DNS_over_HTTPS_Privacy_Performance.pdf" target="_blank" rel="noopener noreferrer">
            "DNS over HTTPS: Privacy & Performance in an Age of Uncertainty" by Eric Rescorla
          </a>
        </li>
        <li>
          <a href="https://developers.google.com/speed/public-dns/docs/doh" target="_blank" rel="noopener noreferrer">
            Google's Public DNS and DNS over HTTPS
          </a>
        </li>
        <li>
          <a href="https://www.mozilla.org/en-US/firefox/dns-over-https/" target="_blank" rel="noopener noreferrer">
            Mozilla's Firefox DNS over HTTPS (DoH) Blog Post
          </a>
        </li>
        <li>
          <a href="https://www.acm.org/publications/articles/the-impact-of-dns-over-https" target="_blank" rel="noopener noreferrer">
            "The Impact of DNS over HTTPS on Privacy and Security"
          </a>
        </li>
        <li>
          <a href="https://www.networksecurityjournal.com/doh-challenges" target="_blank" rel="noopener noreferrer">
            "DNS over HTTPS: A Network Security Challenge"
          </a>
        </li>
      </ul>
    </div>
  );
};

export default References;
