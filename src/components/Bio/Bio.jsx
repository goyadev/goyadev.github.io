import "./style.css";

export function Bio() {
  return (
    <main className="mainpages" id="biomain">
      <section className="section">
        <div className="backgroundcircle">
          <img
            src="/pssmile_SheCodesPortraitGoya cropped.png"
            className="circleimage"
            id="bioheadshot"
            alt="Goya, an Asian woman with dark short hair, smiling wearing a bright pink shirt"
          />
          <h2 id="bioheading">Bio</h2>
          <p className="pagetextblack" id="biotext">
            Goya Zheng has background as both a people leader and a former
            business owner. She is venturing into the coding realm armed with a
            Bachelor of Music and a Master of Music Therapy. After recently
            finishing the SheCodes Plus program, she is now sharpening her
            skills as she wraps up a Cert IV in Web Development this year.
            <br />
            <br />
            Proficient in HTML/CSS, Python, JavaScript, Django Rest Framework,
            and React, Goya infuses her coding journey with a playful spirit.
            During her downtime, she enjoys pursuing side projects, including
            crafting games in Unity using C#. Currently, she's working on a cosy
            game that aims to promote awareness of greyhounds in need of
            fostering or rescue.
            <br />
            <br />
            Fuelled by a strategic approach, Goya thrives on devising innovative
            solutions that are sprinkled with creativity. Beyond the technical
            realm, her musical background infuses her tech adventures with a
            delightful rhythm, embodying her deep-seated passion for merging
            creativity and technology.
          </p>
        </div>
      </section>
    </main>
  );
}
