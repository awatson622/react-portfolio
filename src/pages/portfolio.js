import React from 'react';
import Project from '../components/project';

const projects = [
  { title: 'Project 1', image: 'link_to_image', deployedLink: 'deployed_link', repoLink: 'repo_link' },
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

