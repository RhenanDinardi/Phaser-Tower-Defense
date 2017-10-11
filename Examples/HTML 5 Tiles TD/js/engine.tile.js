/*-----------------------imprime o tile do array-----------------------------*/
engine.tile = {};

//array que guardará as imagens
engine.tile.images = [];

//-------------armazena as imagens usadas--------------------
engine.tile.store = function (id, imgSrc) 
{
	var NewId = engine.tile.images.length;
	var tile = [id, new Image(), false];
	
	tile[1].src = imgSrc;
	
	tile[1].onload = function () 
	{
		tile[2] = true;
	}//onload
	
	engine.tile.images[NewId] = tile;		//armazena no array
	
};//store

//------------------puxa as imagens-----------------------------
engine.tile.retrieve = function (id)
{
	
	for ( i=0; i< engine.tile.images.length; i++ ) {
		
		//console.log ("e ae ");
		if ( engine.tile.images[i][0] == id) 
		{
			return engine.tile.images[i][1];	//retorna o objeto image	
		}//if
	}//for 
	
};//retrieve

//---------------faz a verificaçao se as imgs foram carregadas --------------------
engine.tile.allLoaded = function () 
{
	for (var i=0; i < engine.tile.images.length; i++) 
	{
		if (engine.tile.images[i][2] == false )
		{
			return false;
		}//if
	}//for
	
	//fora do for porque? por se passou por todas as imgs e nao retornou false, é pq todas estao carregadas
	return true;
};//allLoaded



//------------------desenha o tile--------------------------------
engine.tile.draw = function (x, y, tile )
{
	var img = engine.tile.retrieve(tile.ground); //puxa a img referente ao ground tile
	
	engine.handle.drawImage (img, x * 32, y * 32);
	
	if (tile.item)
	{
		
		var img2 = engine.tile.retrieve(tile.item); //puxa a img referente ao item do tile
		
		engine.handle.drawImage (img2, x * 32, y * 32);
		
	}//if
	
};//draw