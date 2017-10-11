/*-----cria a var screen--------*/
engine.screen = {};

//puxa o width e height e aplica na screen
engine.screen.width  = engine.canvas.width;
engine.screen.height = engine.canvas.height;

//tamanho do tile 320 /32 = 10;
engine.screen.tileX = engine.canvas.width / 32;
engine.screen.tileY = engine.canvas.height / 32
