import React from 'react';
import './Members.css';

// Sample data for the group members
const members = [
  {
    name: 'Nandini Reddy Bhumula',
    role: 'Content Validator',
    major: 'Computer Science',
    imageUrl: process.env.PUBLIC_URL + '/images/nandini_profilephoto.jpg', // Change to use PUBLIC_URL
  },
  {
    name: 'Saiesh Reddy Chittireddy',
    role: 'Content Validator',
    major: 'Computer Science',
    imageUrl: process.env.PUBLIC_URL + '/images/saiesh_pp.png',
  },
  {
    name: 'Joseph Hansen',
    role: 'Web Developer',
    major: 'Computer Science',
    imageUrl: process.env.PUBLIC_URL + '/images/josephHansen_pp.png',
  },
  {
    name: 'Mohammed Fazil Khasim',
    role: 'Web Developer',
    major: 'Computer Science',
    imageUrl: process.env.PUBLIC_URL + '/images/fazil_pp.jpeg',
  },
  {
    name: 'Kishore Reddy Mamidi',
    role: 'Delivery Lead',
    major: 'Computer Science',
    imageUrl: process.env.PUBLIC_URL + '/images/kishorereddy_pp.jpeg',
  },
  {
    name: 'Maniteja Vemunoori',
    role: 'Delivery Lead',
    major: 'Computer Science',
    imageUrl: process.env.PUBLIC_URL + '/images/maniteja_pp.png',
  },
];

const Members = () => {
  return (
    <div className="members">
      <h1>Group Members</h1>
      <p>Meet our talented group members who contributed to the survey paper.</p>
      <div className="members-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <img src={member.imageUrl} alt={member.name} className="member-img" />
            <h2>{member.name}</h2>
            <p><b>Role:</b> {member.role}</p>
            <p><b>Major:</b> {member.major}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
