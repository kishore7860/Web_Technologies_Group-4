import React, { useState } from 'react';
import './LiteratureReview.css'; // Import the updated CSS

const literatureData = [
  {
    "id": "paper1",
    "title": "Paper 1: An Empirical Study of the Cost of DNS-over-HTTPS",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "DoH introduces additional resource consumption, impacting network efficiency and performance."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "The paper evaluates the operational costs associated with DoH, focusing on latency and bandwidth consumption."
      },
      {
        "sectionTitle": "Methodology",
        "text": "The study uses real-world experiments to measure DoH performance metrics and resource utilization."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "DoH has performance costs, but these can be mitigated with optimizations in infrastructure and configuration."
      }
    ]
  },
  {
    "id": "paper2",
    "title": "Paper 2: A Comprehensive Study of DNS-over-HTTPS Downgrade Attack",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "DoH can be vulnerable to downgrade attacks, where attackers force the use of unencrypted DNS."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "The paper investigates the mechanics of DNS-over-HTTPS downgrade attacks and proposes mitigation strategies."
      },
      {
        "sectionTitle": "Methodology",
        "text": "The study presents an analysis of attack vectors and simulates downgrade attacks in various network environments."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "While DoH provides enhanced privacy, it is vulnerable to downgrade attacks unless specific safeguards are implemented."
      }
    ]
  },

  {
    id: "paper3",
    title: 'Paper 3: Verification Method of Associated Domain Names Using Certificates by Applying DNS over TLS to Authoritative Servers',
    content: [
      {
        sectionTitle: 'Problem Definition',
        text: "The paper explores the challenge of ensuring authenticity and integrity of domain names in DNS-over-TLS (DoT) and DNS-over-HTTPS (DoH) systems."
      },
      {
        sectionTitle: 'Solution Approach',
        text: "It proposes a solution to improve domain name verification by integrating DNS-over-TLS with authoritative servers. The method includes using certificates to verify domain names."
      },
      {
        sectionTitle: 'Methodology',
        text: "The paper outlines a verification method based on DNS-over-TLS combined with certificates, ensuring secure and encrypted DNS responses."
      },
      {
        sectionTitle: 'Conclusion',
        text: "The integration of DNS-over-TLS with certificates provides stronger security for DNS resolution, protecting against spoofing and other attacks."
      }
    ]
  },
  {
    id: 'paper4',
    title: 'Paper 4:Man-in-the-Middle Attack to the HTTPS Protocol',
    content: [
      {
        sectionTitle: 'Problem Definition',
        text: "Despite HTTPS encryption, attackers can still exploit vulnerabilities, such as Man-in-the-Middle (MitM) attacks."
      },
      {
        sectionTitle: 'Solution Approach',
        text: "This paper explores methods to prevent MitM attacks on HTTPS, such as enhanced encryption techniques and better server authentication."
      },
      {
        sectionTitle: 'Methodology',
        text: "The paper simulates MitM attacks in HTTPS environments and examines scenarios where certificate weaknesses are exploited."
      },
      {
        sectionTitle: 'Conclusion',
        text: "Stronger certificate validation and DNS-over-HTTPS adoption are key to protecting against MitM attacks."
      }
    ]
  },
  {
  id: 'paper5',
  title: 'Paper 5: Measuring DNS-over-HTTPS Performance Around the World',
  content: [
    {
      sectionTitle: 'Problem Definition',
      text: "The performance of DNS-over-HTTPS (DoH) is crucial to understanding its global impact. Different regions exhibit varying performance levels due to infrastructure, network conditions, and server locations."
    },
    {
      sectionTitle: 'Solution Approach',
      text: "The paper presents a worldwide performance measurement of DoH, analyzing factors such as latency, bandwidth consumption, and reliability across different regions and network environments."
    },
    {
      sectionTitle: 'Methodology',
      text: "The study uses a large-scale measurement framework that includes both direct and passive measurements from multiple DoH providers and global locations to evaluate the performance variations."
    },
    {
      sectionTitle: 'Conclusion',
      text: "DNS-over-HTTPS performance varies significantly worldwide, with regions experiencing higher latency and lower reliability. The paper calls for improvements in DoH infrastructure and better global coverage."
    }
  ]
},
{
  id: 'paper6',
  title: 'Paper 6: Privacy of DNS-over-HTTPS: Requiem for a Dream?',
  content: [
    {
      sectionTitle: 'Problem Definition',
      text: "Although DNS-over-HTTPS (DoH) enhances privacy by encrypting DNS queries, it introduces concerns related to data retention, traffic analysis, and centralization of DNS services."
    },
    {
      sectionTitle: 'Solution Approach',
      text: "This paper discusses the privacy implications of DoH, highlighting both the benefits and limitations. It examines how DoH impacts the privacy of users compared to traditional DNS."
    },
    {
      sectionTitle: 'Methodology',
      text: "The paper conducts a detailed analysis of DoH deployments and their privacy effects, with a focus on data collection by DoH resolvers and their compliance with privacy standards."
    },
    {
      sectionTitle: 'Conclusion',
      text: "DoH significantly improves privacy over traditional DNS, but there are still challenges regarding centralization, data retention, and the ability of third parties to access DNS traffic."
    }
  ]
},
{
  id: 'paper7',
  title: 'Paper 7: Measuring DNS over TLS from the Edge: Adoption, Reliability, and Response Times',
  content: [
    {
      sectionTitle: 'Problem Definition',
      text: "While DNS over TLS (DoT) provides security benefits similar to DoH, its adoption, reliability, and response times in real-world edge environments remain underexplored."
    },
    {
      sectionTitle: 'Solution Approach',
      text: "This paper focuses on the adoption of DNS over TLS from edge networks, assessing the reliability of DoT deployments and response times in various real-world network environments."
    },
    {
      sectionTitle: 'Methodology',
      text: "The paper uses a comprehensive data collection framework to measure DoT adoption rates and analyze performance metrics, including response times and reliability in edge deployments."
    },
    {
      sectionTitle: 'Conclusion',
      text: "DNS over TLS has shown promising adoption in edge environments, but further improvements are needed to optimize reliability and response times. The paper emphasizes the need for better deployment strategies and infrastructure."
    }
  ]
},
 {
  "id": "paper8",
  "title": "Paper 8: When HTTPS Meets CDN: A Case of Authentication in Delegated Service",
  "content": [
    {
      "sectionTitle": "Problem Definition",
      "text": "How HTTPS integration with CDN impacts the authentication process in delegated services, specifically when DNS-over-HTTPS is used."
    },
    {
      "sectionTitle": "Solution Approach",
      "text": "Examines the interaction between CDN infrastructure and HTTPS, particularly in delegated service contexts."
    },
    {
      "sectionTitle": "Methodology",
      "text": "Case study focusing on CDN and authentication models in HTTPS traffic, with an emphasis on DoH integration."
    },
    {
      "sectionTitle": "Conclusion",
      "text": "Authentication mechanisms must adapt to DNS-over-HTTPS integration, with a focus on improving performance and security in delegated environments."
    }
  ]
},
{
  "id": "paper9",
  "title": "Paper 9: Summary of DNS over HTTPS Abuse",
  "content": [
    {
      "sectionTitle": "Problem Definition",
      "text": "DNS-over-HTTPS (DoH) could be abused for evading security filters and causing problems with traffic inspection."
    },
    {
      "sectionTitle": "Solution Approach",
      "text": "The paper discusses common abuses of DoH and how such abuses can affect network security and performance."
    },
    {
      "sectionTitle": "Methodology",
      "text": "Analysis of DoH abuse cases and their impact on infrastructure, with a focus on abuse detection and mitigation strategies."
    },
    {
      "sectionTitle": "Conclusion",
      "text": "DoH abuse presents significant challenges for network security and monitoring systems, which require enhanced detection methods and countermeasures."
    }
  ]
},
  {
    "id": "paper10",
    "title": "Paper 10: A Lightweight Double-Stage Scheme to Identify Malicious DNS over HTTPS Traffic Using a Hybrid Learning Approach",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "Detecting malicious DoH traffic is challenging due to encryption and large traffic volumes."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "Proposes a double-stage detection system using hybrid machine learning techniques."
      },
      {
        "sectionTitle": "Methodology",
        "text": "The system first filters traffic before applying deep learning for anomaly detection."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "The hybrid approach enhances detection accuracy while reducing computational complexity, making it suitable for real-time applications."
      }
    ]
  },
  {
    "id": "paper11",
    "title": "Paper 11: The Impact of Domain Name Server (DNS) over Hypertext Transfer Protocol Secure (HTTPS) on Cyber Security: Limitations, Challenges, and Detection Techniques",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "DoH complicates traditional cybersecurity measures by masking DNS traffic."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "Reviews limitations and presents various detection techniques for DoH."
      },
      {
        "sectionTitle": "Methodology",
        "text": "A review of literature addressing DoH's impact on security and different detection strategies."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "DoH introduces challenges but can be managed with advanced detection mechanisms."
      }
    ]
  },
  {
    "id": "paper12",
    "title": "Paper 12: Fingerprinting DNS over HTTPS (DoH)",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "Identifying DoH traffic from other encrypted traffic is difficult."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "Proposes fingerprinting methods to identify DoH based on traffic characteristics."
      },
      {
        "sectionTitle": "Methodology",
        "text": "Analyzes packet features and uses statistical models for identification."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "Fingerprinting can be effective in detecting DoH traffic, aiding in network security monitoring."
      }
    ]
  },
  {
    "id": "paper13",
    "title": "Paper 13: Insights into DoH: Traffic Classification for DNS over HTTPS in an Encrypted Network",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "Encrypted DNS traffic (DoH) makes traffic classification difficult."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "Discusses classification techniques to identify DoH traffic."
      },
      {
        "sectionTitle": "Methodology",
        "text": "Uses machine learning classifiers based on traffic attributes."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "Classification using machine learning can enhance detection capabilities for encrypted DoH traffic."
      }
    ]
  },
  {
    "id": "paper14",
    "title": "Paper 14: DNS over HTTPS Traffic Analysis and Detection",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "The widespread adoption of DoH poses risks to network monitoring and security."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "Examines traffic analysis and detection techniques tailored for DoH."
      },
      {
        "sectionTitle": "Methodology",
        "text": "Analyzes DoH traffic characteristics and proposes detection strategies."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "Effective detection of DoH traffic is critical for maintaining network security and privacy controls."
      }
    ]
  },

  {
    "id": "paper15",
    "title": "Paper 15: Detecting DNS over HTTPS based data exfiltration",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "Data exfiltration via DNS over HTTPS (DoH) can bypass traditional monitoring systems."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "The paper proposes a method to detect exfiltration over DoH by analyzing encrypted DNS traffic."
      },
      {
        "sectionTitle": "Methodology",
        "text": "The authors evaluate traffic patterns to identify suspicious DoH requests."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "While DoH enhances privacy, it also creates a new avenue for stealthy data exfiltration, requiring specialized detection techniques."
      }
    ]
  },
  {
    "id": "paper16",
    "title": "Paper 16: Detecting Malicious DNS over HTTPS Traffic Using Machine Learning",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "Identifying malicious DoH traffic is challenging due to encryption."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "Machine learning algorithms are employed to detect anomalies in DoH traffic."
      },
      {
        "sectionTitle": "Methodology",
        "text": "The paper uses machine learning to classify traffic patterns indicative of malicious activity."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "Machine learning offers promising results in detecting DoH-related threats despite encryption."
      }
    ]
  },
  {
    "id": "paper17",
    "title": "Paper 17: Analysis of Well-Known DNS over HTTPS Resolvers",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "The security and performance of DoH resolvers need evaluation."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "The study analyzes major DoH resolvers to assess their effectiveness."
      },
      {
        "sectionTitle": "Methodology",
        "text": "It examines various DoH resolvers, their privacy policies, and performance metrics."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "Not all DoH resolvers are created equal, and some may still compromise user privacy."
      }
    ]
  },
  {
    "id": "paper18",
    "title": "Paper 18: Collection of datasets with DNS over HTTPS traffic",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "Lack of publicly available datasets for DoH traffic."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "The paper introduces a collection of DoH traffic datasets."
      },
      {
        "sectionTitle": "Methodology",
        "text": "It compiles datasets from different DoH resolvers to facilitate research."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "These datasets provide a valuable resource for further DoH research."
      }
    ]
  },
  {
    "id": "paper19",
    "title": "Paper 19: DoH Insight: Detecting DNS over HTTPS by Machine Learning",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "Detecting DoH is difficult due to the encryption and lack of visibility."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "A machine-learning framework is proposed to identify DoH traffic."
      },
      {
        "sectionTitle": "Methodology",
        "text": "The study applies a classification-based approach using traffic patterns."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "Machine learning can efficiently detect DoH traffic patterns despite the challenges of encryption."
      }
    ]
  },
    {
  "id": "paper20",
  "title": "Paper 20: Generalized Classification of DNS over HTTPS Traffic with Deep Learning",
  "content": [
    {
      "sectionTitle": "Problem Definition",
      "text": "Classifying DNS over HTTPS traffic is challenging due to its encrypted nature and the variety of attack vectors."
    },
    {
      "sectionTitle": "Solution Approach",
      "text": "This paper proposes a deep learning-based model for generalized classification of DoH traffic, improving detection accuracy."
    },
    {
      "sectionTitle": "Methodology",
      "text": "The paper uses deep learning models such as CNNs for traffic classification, providing a comparison with traditional methods."
    },
    {
      "sectionTitle": "Conclusion",
      "text": "Deep learning offers improved classification performance for DoH traffic, enabling better detection of malicious traffic."
    }
  ]
},
    {
  id: 'paper21',
  title: 'Paper 21: Inline Traffic Analysis Attacks on DNS over HTTPS',
  content: [
    {
      sectionTitle: 'Problem Definition',
      text: "Inline traffic analysis attacks pose a significant risk to DNS over HTTPS (DoH), where attackers can infer user behavior and potentially compromise privacy despite the encryption."
    },
    {
      sectionTitle: 'Solution Approach',
      text: "The paper explores various inline traffic analysis techniques that can be used to break DoH's privacy guarantees, including passive monitoring and traffic pattern analysis."
    },
    {
      sectionTitle: 'Methodology',
      text: "The study involves simulated environments to analyze the effectiveness of inline traffic analysis techniques, including evaluating the ability to infer DNS queries through packet size, timing, and frequency analysis."
    },
    {
      sectionTitle: 'Conclusion',
      text: "Despite the encryption provided by DoH, traffic analysis attacks remain a potential threat. The paper suggests that further improvements in traffic obfuscation and additional privacy-preserving measures are necessary to mitigate these risks."
    }
  ]
},
    {
  "id": "paper22",
  "title": "Paper 22: An Explainable AI-Based Intrusion Detection System for DNS Over HTTPS (DoH) Attacks",
  "content": [
    {
      "sectionTitle": "Problem Definition",
      "text": "DoH attacks pose significant risks to DNS security, and traditional methods struggle to detect them accurately."
    },
    {
      "sectionTitle": "Solution Approach",
      "text": "The paper presents an AI-based system that uses explainable models to detect DoH attacks with higher accuracy."
    },
    {
      "sectionTitle": "Methodology",
      "text": "Explainable AI techniques are applied to a dataset of DoH traffic to detect and analyze potential attacks effectively."
    },
    {
      "sectionTitle": "Conclusion",
      "text": "The proposed explainable AI-based system significantly improves detection accuracy while providing transparency in decision-making."
    }
  ]
},
    {
  "id": "paper23",
  "title": "Paper 23: Classifying DNS over HTTPS Malicious/Benign Traffic Using Deep Learning Models",
  "content": [
    {
      "sectionTitle": "Problem Definition",
      "text": "The challenge of classifying DNS over HTTPS (DoH) traffic as malicious or benign has become crucial as DoH adoption grows and encrypted traffic increases."
    },
    {
      "sectionTitle": "Solution Approach",
      "text": "The paper proposes using deep learning models, specifically Convolutional Neural Networks (CNNs), to accurately classify DNS over HTTPS traffic into malicious or benign categories."
    },
    {
      "sectionTitle": "Methodology",
      "text": "The study involves training deep learning models using labeled DNS over HTTPS traffic data. The performance of CNNs is evaluated against other models, and their accuracy in detecting malicious traffic is compared."
    },
    {
      "sectionTitle": "Conclusion",
      "text": "Deep learning, particularly CNNs, provides a promising approach to classifying DNS over HTTPS traffic. The method demonstrates high accuracy in distinguishing between benign and malicious traffic, thus helping in real-time threat detection."
    }
  ]
},
    {
  "id": "paper24",
  "title": "Paper 24: Detection of Tunneling in DNS over HTTPS",
  "content": [
    {
      "sectionTitle": "Problem Definition",
      "text": "DNS over HTTPS (DoH) can be used for tunneling malicious or unauthorized traffic, making it challenging to detect such activities."
    },
    {
      "sectionTitle": "Solution Approach",
      "text": "The paper presents methods for detecting DNS tunneling traffic over DoH by analyzing traffic patterns and anomalies."
    },
    {
      "sectionTitle": "Methodology",
      "text": "The approach involves analyzing DNS over HTTPS traffic and implementing detection mechanisms using statistical and machine-learning techniques."
    },
    {
      "sectionTitle": "Conclusion",
      "text": "Effective tunneling detection is crucial for securing networks, but it requires advanced techniques to manage DoH’s encryption and evade traditional detection methods."
    }
  ]
}

];

const LiteratureReview = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleToggleContent = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className="literature-review">
      <h2>Literature Review on DNS over HTTPS</h2>
      {literatureData.map((item) => (
        <div key={item.id} className="literature-item">
          <div className="literature-header" onClick={() => handleToggleContent(item.id)}>
            <h3>{item.title}</h3>
          </div>
          {selectedId === item.id && (
            <div className="literature-content">
              {item.content.map((para, index) => (
                <div key={index}>
                  <h4>{para.sectionTitle}</h4>
                  <p>{para.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LiteratureReview;
