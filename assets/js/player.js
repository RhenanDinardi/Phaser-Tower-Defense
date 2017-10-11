//CLASSE DE CONTROLE DO PERSONAGEM
//CONTEM LOAD, CREATE E UPDATE DO PERSONAGEM
//CONTEM CRIAÇAO DE CURSORS
function Player(_game) {

    //valores iniciais do player
    this.game = _game;
    this.cursors;

    //referencia o player
    this._player;

    //valores inicais que podem ser reiniciados com o Init
    this.playerName ='gary';
    this.playerImg = 'player/gary.png';
    this.speed = 3;

    //tamanho do sprite, e quantos frames a folha possui
    this.spriteWidth = 32;
    this.spriteHeight = 32;
    this.animationSize = 4;
    this.frames = 12;

    //controle da animaçao
    this.frameSpeed = 10;
    this.currAnim = '';
    this.invertedFrame = false;

    this.posX = (0 * 32);  // Em tiles
    this.posY = (2 * 32);  // Em tiles

}

//seta novos valores para o player
Player.prototype.init = function ( _params) {

    if(_params.playerName) this.playerName = _params.name;
    if(_params.playerImg) this.playerImg = _params.pathImg;

    if(_params.speed) this.speed = _params.speed;

    if(_params.posX) this.posX = _params.posX;
    if(_params.posY) this.posY = _params.posY;

    if(_params.spriteWidth) this.spriteWidth = _params.spriteWidth;
    if(_params.spriteHeight) this.spriteHeight = _params.spriteHeight;
    if(_params.animationSize) this.animationSize = _params.animationSize;
    if(_params.frames) this.frames = _params.frames;

    if(_params.frameSpeed) this.frameSpeed = _params.frameSpeed;
}

//carregamento de imagens do player
Player.prototype.preload = function () {

    this.game.load.spritesheet(this.playerName, ('assets/img/' + this.playerImg), this.spriteWidth, this.spriteHeight, this.frames );
}

//criaçao dos elementos do player
Player.prototype.create = function () {

    //criando o personagem. fisica e seus valores iniciais
    this._player = this.game.add.sprite( this.posX, this.posY, this.playerName);
    this.game.physics.enable(this._player);

    //poe o centro de referencia do sprite no centro, para habilitar inversao de animaçoes
    this._player.anchor.setTo(.5,.5);

    //colidir com as extremidados do mapa
    this._player.body.collideWorldBounds = true;

    //criando os controles
    this.cursors = this.game.input.keyboard.createCursorKeys();

    //camera seguir o player
    this.game.camera.follow(this._player);

    //criando as animaçoes
    createAnimations(this);
}

//update do personagem, direcao e animaçoes
Player.prototype.update = function (_collisionLayer) {

    this.game.physics.arcade.collide(this._player, _collisionLayer);

    //movimento
    //left
    if (this.cursors.left.isDown)
    {
        //toca a animaçao da direita espalhada, nao precia criar um walkLeft
        if( !this.invertedFrame ) {
            this._player.scale.x *= -1;
            this.invertedFrame = true;
        }

        this._player.x -= this.speed;
        this._player.animations.play('walkRight');
        this.currAnim = 'walkRight';
    }
    //right
    else if (this.cursors.right.isDown)
    {
        if( this.invertedFrame ) {
            this._player.scale.x *= -1;
            this.invertedFrame = false;
        }

        this._player.x += this.speed;
        this._player.animations.play('walkRight');
        this.currAnim = 'walkRight';
    }
    //up
    else if (this.cursors.up.isDown)
    {
        if( this.invertedFrame ) {
            this._player.scale.x *= -1;
            this.invertedFrame = false;
        }

        this._player.y -= this.speed;
        this._player.animations.play('walkUp');
        this.currAnim = 'walkUp';
    }
    //down
    else if (this.cursors.down.isDown)
    {
        if( this.invertedFrame ) {
            this._player.scale.x *= -1;
            this.invertedFrame = false;
        }

        this._player.y += this.speed;
        this._player.animations.play('walkDown');
        this.currAnim = 'walkDown';
    }
    //parar animaçao no prmueiro frame daquela animaçao
    else
    {
        this._player.animations.stop(this.currAnim, true);
    }

}

//Cria as animaçoes de forma 'dinamica'
// unicas animaçoes criadas até o momento: movimento nas 4 direçoes
function createAnimations (_self) {

    //4 animaçoes serao criaadas, movimento das 4 direçoes
    var arrAnimations = ['walkDown', 'walkUp', 'walkRight'];
    var countAnimation = -1;

    // cria as animaçoes dinamicamente, baseado no numero de frames, tamanho da animaçao e numero de animaçoes
    for ( var i = 0; i< arrAnimations.length; i++) {

        var loopingAnimation = [];
        for ( var j = 0; j < _self.animationSize; j++) {
            countAnimation++;
            loopingAnimation.push(countAnimation);
        }

        console.log(  arrAnimations[i], loopingAnimation);
        _self._player.animations.add(arrAnimations[i], loopingAnimation, _self.frameSpeed, true);
    }

}
