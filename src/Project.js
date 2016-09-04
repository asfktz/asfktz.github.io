import React from 'react'

const Project = ({ title, link, year }) => (
  <div className="project">
    <div className="project-title">{title}</div>
    <div className="project-link">{link}</div>
    <div className="project-year">{year}</div>
  </div>
)

export default Project

