/**
 * Created by everton on 23/08/2017.
 */
'use strict';
function CreateElements (_game, _properties, _map, _groups, _groupCollideElements ){

    this.game = _game;
    this.properties = _properties;
    this.spriteSheet = _map.spriteSheet;
    this.groups = _groups;
    this.groupCollideElements = _groupCollideElements;

    this.positions = null;
    this.elements = {};

    return this.create();
}

CreateElements.prototype.create = function __create(){

    var properties = null,
        positions = null;

    for (var el in this.properties) {

        if (this.properties.hasOwnProperty(el)) {

            positions = this.properties[el].positions;

            for (var thing in positions) {

                if (positions.hasOwnProperty(thing)) {

                    // se o elemento tiver um ID
                    if (positions[thing]['id']) {

                        properties = positions[thing];

                        this.groups[properties.group] =  this.groupCollideElements;

                        // cria e armazena o elemento (npc, animal, objeto)
                        this.elements[properties['id']] = this.groups[properties.group].create(
                            properties['posCol'] * this.spriteSheet.tileWidth,
                            properties['posRow'] * this.spriteSheet.tileHeight,
                            this.properties[el].name
                        );

                        this.addProperties(properties);
                    }
                }
            }
        }
    }
    this.groupCollideElements.setAll('body.immovable', true);
    return this.elements;
};

CreateElements.prototype.addProperties = function (properties){

    // // verifica se renderiza ou não os objetos na tela
    if (properties.hasOwnProperty('renderable')) {
        this.elements[properties.id].renderable = properties.renderable;
    }

    // informações adicionais
    this.elements[properties.id].id = properties['id'];

    mediator.emit('ANIMATOR.CREATE_SPRITE_ANIMATOR', this.elements[properties.id], properties['animations']);
};