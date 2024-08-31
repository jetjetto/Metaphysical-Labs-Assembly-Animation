// This function is run when the Sketchfab client has been initialized
const success = (api) => {
  // Start loading the 3D model
  api.start(() => console.log("Sketchfab scene starts loading"));

  api.addEventListener("viewerready", () => {
    console.log("Sketchfab scene is ready");

    // Reverse the animation by setting the speed to -1
    api.setSpeed(-1, (err) => {
      if (!err) {
        api.play(); // Play the animation in reverse
        console.log("Animation is now playing in reverse");
      } else {
        console.error("Error setting animation speed:", err);
      }
    });
  });
};

const loadSketchfab = (sceneuid, elementId) => {
  // Create a client object for a certain iframe in the DOM
  const iframe = document.getElementById(elementId);
  const client = new Sketchfab("1.12.1", iframe);

  // Initialize the client with a specific model and some player parameters
  client.init(sceneuid, {
    success: success,
    error: () => console.error("Sketchfab API error"),
    ui_stop: 0,
    preload: 1,
    camera: 0
  });
};

// Load the Sketchfab model
loadSketchfab("6cdf6da929644ec09bfc6ff6fe0d3528", "api-frame");

