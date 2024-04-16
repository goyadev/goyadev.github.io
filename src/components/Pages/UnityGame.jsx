import { Unity, useUnityContext } from "react-unity-webgl";

function UnityGame() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/build/People_watching_webGLApril1.loader.js",
    dataUrl: "/build/People_watching_webGLApril1.data",
    frameworkUrl: "/build/People_watching_webGLApril1.framework.js",
    codeUrl: "/build/People_watching_webGLApril1.wasm",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className="container">
      <div style={{ margin: "auto" }}>
        {isLoaded === false && (
          <div className="loading-overlay">
            <p>Loading... ({loadingPercentage}%)</p>
          </div>
        )}
        <Unity
          className="unity"
          unityProvider={unityProvider}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default UnityGame;
