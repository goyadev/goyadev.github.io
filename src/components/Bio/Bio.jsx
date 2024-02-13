import "./style.css";

export function Bio() {
  return (
    <main class="mainpages" id="biomain">
      <section class="section">
        <div class="backgroundcircle">
          <img
            src="public/pssmile_SheCodesPortraitGoya cropped.png"
            class="circleimage"
            id="bioheadshot"
            alt="Goya, an Asian woman with dark short hair, smiling wearing a bright pink shirt"
          />
          <h2 id="bioheading">Bio</h2>
          <p class="pagetextblack" id="biotext">
            Goya Zheng, an emerging developer, is actively immersed in the
            SheCodes Plus program and pursuing a CertIV in WebDev, showcasing
            skills in HTML/CSS, Python, and Javascript, with a touch of C# for
            Unity. Fueled by a creative flair, she navigates the realms of web
            dev, game dev and programming.
            <br />
            <br />A strategic planner at heart, Goya thrives on devising
            innovative solutions, with a strengths-based approach. Beyond the
            code, her musical background adds a unique rhythm to her endeavors,
            amplifying her multifaceted passion for creativity, technology, and
            the harmonious synergy of programming languages.
          </p>
        </div>
      </section>
    </main>
  );
}
