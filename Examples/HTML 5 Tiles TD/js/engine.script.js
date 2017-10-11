/*-----------------------gerencia eventos----------------------------------------*/
engine.script = {};


//---guardaremos as funções dos eventos em um array chamado 'call'	que sera chamado de acordo com o index de sua funçao
engine.script.call = [];

/*------desenha o primeiro mapa, saindo da caverna-----------*/
engine.script.call[0] = function()
{
	
	engine.output('calling map change to field');
	engine.setMap(map);
	
	engine.draw();
}//call

/*------desenha o segundo mapa, entrando pelo campo-----------*/
engine.script.call[1] = function()
{
	engine.output('calling map change to cave');
	engine.setMap(cave);
	
	engine.draw();
}//call