import React, { Component } from 'react';

import 'normalize.css'
import './App.css';

import Project from './Project'

class App extends Component {
  render() {
    return (
      <div className="cv">
        <header className="header">
          <div className="header-left">
            <h1 className="my-name">Asaf Katz</h1>
            <div className="my-linkedin">https://il.linkedin.com/in/asaf-katz-99a2b812</div>
          </div>
          <div className="header-right contact-details">
            <h2 className="contact-details-title">Contact details:</h2>
            <div className="phone">050-7351342</div>
            <div className="email">asf.ktz@gmail.com</div>
            <div className="address">Ramat David</div>
          </div>
        </header>
        <main className="cv-main"> 
          <section className="skills section">
              <h2 className="skills-title">Skills</h2>
              <ul className="skills-list">
                {skills.map(skill => (
                  <li dangerouslySetInnerHTML={{ __html: skill }}></li>
                ))}
              </ul>
          </section>
          <section className="jobs section">
              <h2 className="jobs-title">History</h2>
              <div className="job">
                <div className="job-header">
                  <h3 className="job-title">
                    <b>Front End Developer</b> at <b>dooble group ltd</b>
                  </h3>
                  <div className="job-timerange">
                    2010 – 2015
                  </div>
                </div>

                <section className="projects">
                  {/*<h4 className="projects-title">Projects</h4>*/}
                  <div className="projects-list">
                  {projects.map(project => (
                    <div className="project">
                      <p className="project-title">{project.title}</p>
                      {project.link && (
                      <p className="project-link"><a target="_blank" href={`http://${project.link}`}>{project.link}</a></p>
                      )}
                      <p className="project-year">{project.year}</p>
                    </div>
                  ))}
                  </div>
                </section>
              </div>
          </section>

          <section className="languages section">
            <h2 className="languages-title">Languages</h2>
            <div className="languages-list">
            {languages.map(lang => (
              <div className="language">
                <div className="language-title">{lang.title}</div>
                <div className="language-level">{lang.level}</div>
              </div>
            ))}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

const skills = [
  'Developing web apps with <b>React</b> & <b>Redux</b>',
  'Familiar with the ins and out of <b>Angular</b>',
  'Crafting Interactive animations on <br /> different contexts <b>CANVAS</b> / <b>SVG</b> / <b>DOM</b>',
  'Working closely with designers to bring the their most craziest ideas to life',
  'In-depth Knowledge of <b>Photoshop</b> & <b>Illustrator</b>',
  'Using <b>node.js</b> for my server side needs',
  'Automate my workflow with <b>Webpack</b>',
  'Developing Hybrid Mobile Applications using <b>Cordova</b>',
  'Deeply care for my CSS, which compiled from <b>Sass</b><br /> and <b>Autoprefixer</b>, and recently, <b>CSS modules</b>',
  'Solving <b>Rendering Performance</b> with Chrome’s Devtools',
]

const projects = [
  {
    title: 'Deep Instinct’s Website',
    link: 'deepinstinct.com',
    year: '2015'
  },
  {
    title: 'Real Time B2B Application for Mobile, Tablet, Desktop for MWC 2015',
    year: '2015'
  },
  {
    title: 'Mako - 2D Game for the Big Brother TV Show',
    link: 'bigbrother-game.mako.co.il',
    year: '2015'
  },
  {
    title: 'ynet - New Year\'s Special Project 2013 & 2014',
    link: 'shanatova.ynet.co.il',
    year: '2013 / 2014'
  },
  {
    title: 'Text Messaging, Audio & Video Calls Application for MWC 2014',
    year: '2014'
  },
  {
    title: 'Comverse - Campaign manager',
    year: '2014'
  },
  {
    title: 'Bluran 3D Home Visualizer, Interactive web app',
    link: 'bluran.co.il/חדר-ילדים',
    year: '2013'
  },
  {
    title: 'Tolip winery',
    link: 'tulip-winery.co.il',
    year: '2013'
  },
  {
    title: 'GoMobile - eCommerce',
    year: '2013'
  },
  {
    title: 'Piculi - Canvas Prints Web Application',
    year: '2012'
  }
]

const languages = [
  {
    title: 'English',
    level: 'Professional working proficiency'
  },
  {
    title: 'Hebrew',
    level: 'Native'
  }
]

export default App;
