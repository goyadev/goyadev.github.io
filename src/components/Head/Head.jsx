import "./style.css";

export function Head() {
  return (
    <header>
      <h1 id="headingname">Goya Zheng</h1>

      <a href="https://github.com/goyadev" id="logo">
        <img
          src="public/GZlogo.png"
          class="social-logos"
          alt="GZ developer logo"
        />
      </a>

      <a href="https://www.linkedin.com/in/goya-zheng-615b54111/" id="linkedin">
        <img
          src="../../public/In-White-72.png"
          class="social-logos"
          alt="linkedin
        logo in white"
        />
      </a>

      <a href="https://github.com/goyadev" id="github">
        <img
          src="../../public/github-mark-white.png"
          class="social-logos"
          alt="github logo in white"
        />
      </a>
    </header>
  );
}
