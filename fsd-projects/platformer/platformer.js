$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(400, 380, 200, 20, "hotpink");
createPlatform(500, 600, 50, 20, "hotpink");
createPlatform(700, 500, 50, 20, "hotpink");
createPlatform(600, 650, 200, 20, "hotpink");
createPlatform(700, 300, 20, 20, "hotpink");
createPlatform(850, 350, 30, 20, "hotpink");
createPlatform(1000, 340, 150, 20, "hotpink");
createPlatform(1200,300, 20, 20, "hotpink");
createPlatform(1300, 220, 150, 20, "hotpink");


    // TODO 3 - Create Collectables
createCollectable("diamond", 500, 500, 0.5, 0.9);
createCollectable("max", 850, 300, 0.5, 0.9);
createCollectable("database", 1330, 100, 0.5, 0.9);


    
    // TODO 4 - Create Cannons
createCannon("right", 2000, 

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
