/**
 * Created by everton on 17/08/2017.
 */
(function(mediator){

    'use strict';

    var tileSize = 32;
    var game = {};
    var setup = {WIDTH: 900, HEIGHT: 500};
    var stage = {};
    var MAP = {};
    var groups = {};
    var elements = {};
    var map = {};
    var npcs = {};
    var phaseId = 1;
    var enemys = {};

    //gourps colliders
    var groupCollideNpcs = null;
    var groupCollideElements = null;
    var groupCollidePlayer = null;

    var controlls = {};

    // player config
    var hiro = {};
    var player = {};
    var objectPlayer = {};
    var playerName = "";

    var weapons = null;


    // variaveis do DOM
    var loading = document.getElementById('loading');

    /**
     * Contructor
     */
    function initialize() {
        addEventsMediator();
    }

    function addEventsMediator() {
        mediator.on('GAME.SET_START_PHASE', startGame);
        mediator.on('GAME.REMOVE_EVENTS_MEDIATOR', removeMediatorEvents);
        mediator.on('GAME.ADD_EVENTS_INTERACTIVE_BUTTON_A', checkInterractionButtonA);
        mediator.on('GAME.ADD_EVENTS_INTERACTIVE_BUTTON_B', checkInterractionButtonB);

        // mediator.emit('HUD.SET_GAME');
        startGame();
    }

    function removeMediatorEvents(){
        mediator.off('GAME.SET_START_PHASE', startGame);
        mediator.off('GAME.REMOVE_EVENTS_MEDIATOR', removeMediatorEvents);
    }

    function startGame() {
        getPhase(setupPhaser);
    }

    function setupPhaser() {

        //configuração do mapa
        map = stage.map;
        //configuração do player
        objectPlayer = stage.player;
        playerName = stage.player.name;

        game = new Phaser.Game(setup.WIDTH, setup.HEIGHT, Phaser.AUTO, 'game', {
            preload: preload,
            create: create,
            update: update,
            render: render
        });
    }

    function preload() {
        // mapa
        game.load.tilemap(map.name, map.url, null, Phaser.Tilemap.TILED_JSON);
        game.load.image(map.spriteSheet.name, map.spriteSheet.url);
        game.load.image('weapon', 'images/tiro1.png');

        // personagem
        game.load.spritesheet(playerName, objectPlayer.url, objectPlayer.width, objectPlayer.height);
        // virtualjoystick
        game.load.atlas('arcade', 'images/virtualjoystick/skins/arcade-joystick.png', 'images/virtualjoystick/skins/arcade-joystick.json');

        // carrega
        loadElements(stage['npcs']);
        loadElements(stage['elements']);
    }

    /**
     * TODO: prever outros tipos como image
     * */
    function loadElements(elements){

        for (var el in elements) {

            if (elements.hasOwnProperty(el)) {
                game.load.spritesheet(
                    elements[el].name,
                    elements[el].url,
                    elements[el].width,
                    elements[el].height
                );
            }
        }
    }

    /**
     * GRUPOS devem ser criados após ter o mapa em tela
     * */
    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        groupCollidePlayer = game.add.physicsGroup(Phaser.Physics.ARCADE);
        groupCollideNpcs = game.add.physicsGroup(Phaser.Physics.ARCADE);
        groupCollideElements = game.add.physicsGroup(Phaser.Physics.ARCADE);

        controlls = new CreateKeyboardEvents(game);

        // createQuests();
        createMap();
        createGroups();

        elements = new CreateElements(game, stage.elements, map, groups, groupCollideElements);
        enemys = new CreateNpcs(game, stage.npcs, map, groups, groupCollideNpcs, tileSize);
        hiro = new CreatePlayer(game, stage.player, map, groups, groupCollidePlayer, controlls);
        weapons = new Weapon.SingleBullet(this.game);

        game.world.bringToTop(groupCollideElements);
        game.world.bringToTop(groupCollideNpcs);
        game.world.bringToTop(groupCollidePlayer);

        player = hiro.player;

        // subir a camada superior do mapa
        // TODO: encontrar como mudar o z-index
        if (MAP['layer1']) {
            game.world.bringToTop(MAP['layer1']);
        }

        mediator.emit('ANIMATOR.SET_ELEMENTS', elements);
        loading.style.display = "none";
    }

    /**
     * Renderiza o mapa baseado nas layers e define áreas sem colisão
     * */
    function createMap() {

        MAP.ts = game.add.tilemap(map.name);
        MAP.ts.addTilesetImage(map.name, map.spriteSheet.name);

        for (var layer in map.layer) {
            if (map.layer.hasOwnProperty(layer)) {
                MAP[map.layer[layer].name] = MAP.ts.createLayer(map.layer[layer].name);
                MAP[map.layer[layer].name].visible = map.layer[layer].visible;

                MAP[map.layer[layer].name].resizeWorld();
            }
        }

        // tiles que não haverá colisão
        MAP.ts.setCollisionByExclusion([0]);
    }

    /**
     * Agrupamento de elementos servindo como camadas no game, facilita z-index
     * */
    function createGroups() {

        for (var group in stage.groups) {
            if (stage.groups.hasOwnProperty(group)) {
                groups[stage.groups[group].type] = game.add.group();
                groups[stage.groups[group].type].enableBody = true;
            }
        }
    }

    /**
     * Verifica se houve alguma interação válida com elementos do cenário*
     * NPC ou Achiviements
     */
    function checkInterractionButtonA() {
        // NPC
        game.physics.arcade.overlap(groupCollidePlayer, groupCollideNpcs, checkInteractiveNpc, null, this);

        // ACHIEVEMENTS
        game.physics.arcade.overlap(groupCollideElements, groupCollidePlayer, getAchievement, null, this);
    }

    function checkInterractionButtonB() {
        var name = player.animations.currentAnim.name;
        weapons.fire(player, name, 32, 10);
    }

    function setColliders(){

        // colisões
        game.physics.arcade.collide(player, MAP['Collision']);
        game.physics.arcade.collide(groupCollideNpcs, MAP['Collision']);
        game.physics.arcade.collide(groupCollideNpcs, player);

        game.physics.arcade.overlap(weapons, groupCollideNpcs, checkKillEnemy, null, this);
        enemys.checkCollider(player);
    }

    function checkKillEnemy(bullet, npc){

        npc.life = npc.life - bullet.damage;
        bullet.kill();

        if(npc.life <= 0){
            var elem = elements[npc.item];

            if(elem) {
                elem.renderable = !elem.renderable;
                elem.position.x = npc.position.x;
                elem.position.y = npc.position.y;
            }

            npc.kill();
        }
    }

    function getAchievement(_element ){
        _element.renderable = _element.renderable ? false : true;
        _element.destroy();
    }

    function checkInteractiveNpc(_npc){

        if(_npc.interactive == "interactive"){

        }
    }

    function update(){

        setColliders();
        hiro.moveWalkPlayer();
    }
    
    function render() {
        //game.debug.body(player);
    }

    /**
     * Busca os dados da fase
     * @param _callback
     */
    function getPhase(_callback) {

        var data = {url: 'json/stage' + phaseId + '.json'};

        http.get(data, function http(error, res) {
            if (error) {
                //console.error(error);
            } else {
                stage = res.data;
            }
            _callback && _callback();
        });
    }

    initialize();
})(mediator);