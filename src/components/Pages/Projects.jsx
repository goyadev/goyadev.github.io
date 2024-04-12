import React from "react";
import "./Pages.css";

function Projects() {
  return (
    <div>
      <div id="projectsmain">
        <section className="projectsection" id="planidea">
          <div className="backgroundcircle">
            <h2 className="pagetext">planidea</h2>
            <a href="https://planidea.netlify.app/">
              <img
                src="./logo-planidea-dark.png"
                className="circleimage"
                id="planideaimage"
                alt="planidea planet and target logo with coloured border"
              />
            </a>
            <p className="pagetext" id="planideatext">
              A group project as a part of the SheCodes Plus program. planidea
              was created in collaboration to meet client needs for a platform
              to allow workshop ideas to come to life, with organisers knowing
              that there was interest before moving forward on planning.
              <br />
              <br />
              Goya worked on the design and front-end of this project. DRF,
              React and Tailwind were used in it's creation.
            </p>
          </div>
        </section>
        <section className="projectsection" id="artstarter">
          <div className="backgroundcircle">
            <h2 className="pagetext">Artstarter</h2>
            <a href="https://artstarter.netlify.app/">
              <img
                src="./artstarter.png"
                className="circleimage"
                id="artstarterimage"
                alt="artstarter logo and street art painted on wall."
              />
            </a>
            <p className="pagetext" id="artstartertext">
              A crowdfunding project with an artistic spin, Artstarter was
              created as a React project where both the back and and front end
              were developed by Goya. Using DRF and React, this project
              showcases a javascript darkmode added as an extra feature.
            </p>
          </div>
        </section>
        <section className="projectsection" id="peoplewatching">
          <div className="backgroundcircle">
            <h2 className="pagetext">"People" Watching</h2>
            <a href="https://levelherup.com.au/" className="projectlink">
              <img
                src="./people_watching_project.jpg"
                className="circleimage"
                id="peoplewatchingimage"
                alt="pixel art cafe background with the coffee cup logo of People Watching as foam art. There is a play button on screen which looks like a small wooden plank"
              />
            </a>
            <p className="pagetext" id="peoplewatchingtext">
              In the midst of the 2023
              <a href="https://levelherup.com.au/" className="projectlink">
                Level Her Up
              </a>
              48h Game Jam, Goya played a key role in bringing "People" Watching
              to life. Inspired by the simple act of observing café life, she
              delved into the world of C# coding using Unity and Yarn Spinner to
              create the narrative game based on the theme of 'connection'.
              Beyond the coding challenges, Goya also created the game's
              atmospheric theme music, adding a personal touch to the project.
            </p>
          </div>
        </section>

        <section className="projectsection" id="lazygreyhound">
          <div className="backgroundcircle">
            <h2 className="pagetext">lazy greyhound</h2>
            <a href="https://www.lazygreyhoundgame.com" className="projectlink">
              <img
                src="./lazy_greyhound_project.jpg"
                className="circleimage"
                id="lazygreyhoundimage"
                alt="website screenshot of purple pixel art landscape with pixel art greyhound at top."
              />
            </a>
            <p className="pagetext" id="lazygreyhoundtext">
              What began as a conceptual exercise in web design evolved into the
              lazy greyhound game website, a tangible website that mirrors the
              love for these elegant canines and the allure of cozy games.
              <br />
              <br />
              The website's construction posed an intriguing challenge—an
              HTML/CSS framework built without any div - only one was allowed,
              emphasizing the significance of semantics and design
              opportunities.
            </p>
          </div>
        </section>
        <section className="projectsection" id="peoplewatching">
          <div className="backgroundcircle">
            <h2 className="pagetext">Django SheCodes News</h2>
            <a href="https://github.com/goyadev/django">
              <img
                src="./SheCodesNewsDjango.png"
                className="circleimage"
                id="drfshecodesimage"
                alt="snippet of news website"
              />
            </a>
            <p className="pagetext" id="shecodesnewstext">
              An exercise in Django, this news site allowed for exploration of
              to create a backend with a database. Minimal styling was created
              for the front-end, with a basic comic books style implemented.
            </p>
          </div>
        </section>
        <section className="projectsection" id="pythonweatherapp">
          <div className="backgroundcircle">
            <h2 className="pagetext">Weather App</h2>
            <a href="https://github.com/goyadev/sc-python">
              <img
                src="./python-code-snippet.png"
                className="circleimage"
                id="drfshecodesimage"
                alt="lines of python tests"
              />
            </a>
            <p className="pagetext" id="weatherapptext">
              A weather app written in python. This app isn't quite BOM, but
              there are 8 different functions that were coded. These cover a
              variety of aspects such as for loops, string concatenation,
              methods and reusing functions in other functions.
            </p>
          </div>
        </section>

        <section className="projectsection" id="portfolio">
          <div className="backgroundcircle">
            <h2 className="pagetext">This Portfolio Site</h2>
            <a href="/">
              <img
                src="./portfoliosite.png"
                className="circleimage"
                id="drfshecodesimage"
                alt="lines of python tests"
              />
            </a>
            <p className="pagetext" id="portfoliotext">
              This website was originally created for a HTML/CSS project. But at
              the end of SheCodes Goya decided to rebuild her portfolio in
              React. Despite the temptation to use Tailwind again, it still uses
              CSS as a return to basics.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
