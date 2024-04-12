import React from "react";
import "./Pages.css";

function Projects() {
  return (
    <div>
      <div id="projectsmain">
        <section className="projectsection" id="planidea">
          <div className="backgroundcircle">
            <h2 className="pagetext">planidea</h2>
            {/* <img
              src="./public/lazy_greyhound_project.jpg"
              class="circleimage"
              id="lazygreyhoundimage"
              alt="website screenshot of purple pixel art landscape with pixel art greyhound at top."
            /> */}
            <p className="pagetext" id="planideatext">
              A group project as a part of the SheCodes Plus program.
              <a href="https://planidea.netlify.app/" className="projectlink">
                planidea
              </a>
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
            {/* <img
              src="./public/lazy_greyhound_project.jpg"
              class="circleimage"
              id="lazygreyhoundimage"
              alt="website screenshot of purple pixel art landscape with pixel art greyhound at top."
            /> */}
            <p className="pagetext" id="artstartertext">
              A crowdfunding project with an artistic spin,
              <a href="https://artstarter.netlify.app/" className="projectlink">
                Artstarter
              </a>
              was created as a React project where both the back and and front
              end were developed by Goya.
              <br />
              <br />
              Using DRF and React, this project showcases a javascript darkmode
              added as an extra.
            </p>
          </div>
        </section>
        <section className="projectsection" id="peoplewatching">
          <div className="backgroundcircle">
            <h2 className="pagetext">"People" Watching</h2>
            {/* <img
              src="./public/people_watching_project.jpg"
              class="circleimage"
              id="peoplewatchingimage"
              alt="pixel art cafe background with the coffee cup logo of People Watching as foam art. There is a play button on screen which looks like a small wooden plank"
            /> */}
            <p className="pagetext" id="peoplewatchingtext">
              In the midst of the 2023
              <a href="https://levelherup.com.au/" className="projectlink">
                Level Her Up
              </a>
              48h Game Jam, Goya played a key role in bringing "People" Watching
              to life. Inspired by the simple act of observing café life, she
              delved into the world of C# coding using Unity and Yarn Spinner to
              create the narrative game based on the theme of 'connection'.
              <br />
              <br />
              Beyond the coding challenges, Goya also created the game's
              atmospheric theme music, adding a personal touch to the project.
            </p>
          </div>
        </section>

        <section className="projectsection" id="lazygreyhound">
          <div className="backgroundcircle">
            <h2 className="pagetext">lazy greyhound</h2>
            {/* <img
              src="./public/lazy_greyhound_project.jpg"
              class="circleimage"
              id="lazygreyhoundimage"
              alt="website screenshot of purple pixel art landscape with pixel art greyhound at top."
            /> */}
            <p className="pagetext" id="lazygreyhoundtext">
              What began as a conceptual exercise in web design evolved into
              <a
                href="https://www.lazygreyhoundgame.com"
                className="projectlink"
              >
                lazy greyhound
              </a>
              game website, a tangible website that mirrors the love for these
              elegant canines and the allure of cozy games.
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
            <h2 className="pagetext">DRF SheCodes News</h2>
            {/* <img
              src="./public/people_watching_project.jpg"
              class="circleimage"
              id="drfshecodesimage"
              alt=""
            /> */}
            <p className="pagetext" id="shecodesnewstext">
              An exercise in DRF, this news site allowed for exploration of DRF
              to create a backend. Minimal styling was created for the
              front-end, with a basic comic books style implemented.
            </p>
          </div>
        </section>
        <section className="projectsection" id="pythonweatherapp">
          <div className="backgroundcircle">
            <h2 className="pagetext">Weather App</h2>
            {/* <img
              src="./public/people_watching_project.jpg"
              class="circleimage"
              id="drfshecodesimage"
              alt=""
            /> */}
            <p className="pagetext" id="weatherapptext">
              A weather app written in python. This app isn't quite BOM, but
              there are 8 different functions that were coded. These cover a
              variety of aspects such as for loops, string concatenation,
              methods and reusing functions in other functions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
