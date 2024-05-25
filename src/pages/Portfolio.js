import React from 'react';
import Project from '../components/Project';

const projects = [
  { title: 'Professional Business Profile', deployedLink: 'https://awatson622.github.io/professional-business-profile/'}, 
  {repoLink: 'https://github.com/awatson622/professional-business-profile' },
];

const Portfolio = () => {
  return (
    <section>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;

