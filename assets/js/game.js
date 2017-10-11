var game = new Phaser.Game(832,672, Phaser.AUTO, 'phaser TD', {preload:preload, create:create, update:update});

var player = new Player(game);


function preload () {

    //carregamento de json e imagens
    game.load.tilemap('grass', 'assets/map/grass.json', null, Phaser.Tilemap.TILED_JSON );
    game.load.image('grassfield', 'assets/img/maps/grass.png');

    //player
    player.preload();
}

var map;
var layer;
var collision;

function create () {

    //fisica
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //adiiconado o mapa de json e setando a imagem do mapa, e criando as layers
    map = game.add.tilemap('grass');
    map.addTilesetImage('grassfield');
    layer = map.createLayer('Ground');
    map.createLayer('Objects');
    layer.resizeWorld();
    collision = map.createLayer('Collision');

    //tiles de colisao
    map.setCollision(1, true, collision);


    //player
    player.create();

    console.log( collision, player._player );
}

function update () {

    //player
    player.update(collision);
}