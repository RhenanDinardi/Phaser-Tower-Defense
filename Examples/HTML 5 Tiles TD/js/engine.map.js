/*-----cria a funcao do draw do mapa--------*/
engine.map = {};

engine.map.draw = function ()
{
	var mapX = 0;
	var mapY = 0;
	var tile;
	
	//-----------------------------//
	//pra pegar só o tamanho do mapa : X = engine.currentMap[0].length e Y = engine.currentMap.length

	//eixo Y
	for( var j = 0; j < engine.screen.tileY; j++) 
	{
		//eixo X
		for (var i =0; i < engine.screen.tileX; i++ ) 
		//for (var i = -engine.viewport.overflowTile; i < iMax; i++ ) 
		{
			//pega a posi�ao do mapa
			mapX = i //+ engine.viewport.x;
			mapY = j //+ engine.viewport.y;
		
			//pega qual o tipo de tile no array, e chama a funcao para desenha-lo
			//tile = mapData[mapY][mapX];
			if(engine.currentMap[mapY] && engine.currentMap[mapY][mapX])
			{
			   tile = engine.currentMap[mapY][mapX];
			}else{
				//add tile preto na tela
			   //tile = {ground : 100};
			}//else

			
			engine.tile.draw ( i, j, tile );
		}//for i
	}//for j
	
};//draw