/*----------------------controla as ações do personagem------------------------------*/
engine.player = {};


engine.player.SpriteSize = 32;

//guarda o index da img com os sprites daquela direçao
//0 como padrao, começa olhando pra baixo
engine.player.SpriteIndex = 1;

//posiçao atual da animaçao daquela direçao
engine.player.CurrPos = 0;

//guarda a posiçao do personagem (setada uma posiçao incial aqui)
engine.player.CurrX =  0 * engine.player.SpriteSize ;
engine.player.CurrY =  1 * engine.player.SpriteSize ;

//sabe qual direção o personagem esta indo naquele momento
engine.player.DirX = 0;
engine.player.DirY = 0;

//array das imagens
engine.player.sprites =[];

//intervalo de animaçao dos passos
engine.player.FrameRate = 0;

//variavel da speed do personagem
engine.player.speed = 2;


//puxa e armazena a imagem do personagem no array, com a booleana para verificar se ja foi feito load
engine.player.store = function (index, imgSrc)
{
	
	var sprite = [new Image(), false];
	
	sprite[0].src = imgSrc;
	
	sprite[0].onload = function ()
	{
		sprite[1] = true;
	}
	
	engine.player.sprites [index] = sprite; 
	
};


//-----------------puxa as imagens----------------------
engine.player.retrieve = function (index)
{
	
	return engine.player.sprites[index][0];
};


//-----------verifica se todas as imagens ja foram carregadas -------------------
engine.player.allLoaded = function ()
{
	for (var i=0; i < engine.player.sprites.length; i++) 
	{
		if (engine.player.sprites[i][1] == false )
		{
			return false;
		}
	}
	
	//fora do for porque? por se passou por todas as imgs e nao retornou false, é pq todas estao carregadas
	return true;

}

//----------calcula a localizaçao do player, para centraliza-lo no meio da tela
engine.player.getLoc = function ()
{
	//pega a altura e largura do tile
	var character = {
						//width: Math.ceil(engine.player.sprite[0][0].width),
						//height:	Math.ceil(engine.player.sprite[0][0].height)
						width: 32,
						height: 32
	};
	
	var screen = {
					width: engine.screen.width,
					height: engine.screen.height
	};
	
	//var x = (screen.width /2 ) - (character.width /2 );
	//var y = (screen.height /2 )  - (character.height/2 );
	
	var x = (screen.width /2 ) ;
	var y = (screen.height /2 )  ;
	

//alert ( x, y );

	return {left: x, top: y};
	
}


//*----------------------------desenha o player-------------------------------------
engine.player.draw = function ()
{
	var loc = engine.player.getLoc();
					
	var SpritePos = engine.player.SpriteSize * engine.player.CurrPos;
	
	
	//----------------------altera aqui pra mexer na animaçao da imagem-------------------------
	// imagem a ser impressa, posX a ser exibida da img, posY a ser exibida da img, Widht exibido dela, height exibido dela, posX na tela, posY na tela, width da img ja cortada, height da img ja cortada
	
	engine.handle.drawImage( engine.player.sprites[engine.player.SpriteIndex][0], SpritePos, 0, engine.player.SpriteSize, engine.player.SpriteSize, engine.player.CurrX, engine.player.CurrY, engine.player.SpriteSize, engine.player.SpriteSize);
	
}

/*-----------------------------------------------------------*/
engine.player.move = function ( direction)
{
	var x = 0;
	var y = 0;
	var index = 0;
	
	switch( direction )
	{
		case 'down':
		
			y = 1;
			index = 0;
		break;
		
		case 'right':
		
			 x = 1;
			index = 1;
		break;
		
		case 'up':
		
			y = -1;
			index = 2;
		break;
		
		case 'left':
		
			x = -1;
			index = 3;
		break;
		
		case 'stop':
		
			index = engine.player.SpriteIndex;
		break;
	}
	
	engine.player.DirX = x;
	engine.player.DirY = y;
	
	engine.player.SpriteIndex = index;	
};


/*-----------------------------------------------*/
engine.player.walk = function ()
{
	
	//tile atual
	var tileX = Math.round ( engine.player.CurrX  / engine.player.SpriteSize );
	var tileY = Math.round ( engine.player.CurrY  / engine.player.SpriteSize );
	
		//console.log ( "Tile atual ", tileX , tileY, "     apertei a direcao  x:", x,'  y:', y);
	
	//tile de destino
	var toX = tileX + engine.player.DirX;
	var toY = tileY + engine.player.DirY; 
	
	//aplicando speed em movimento
	console.log( toX, toY );
	if(  limiteCenario( toX, toY ) ){
		console.log( engine.currentMap[ toY ][ toX ] );
		if(  colizao( tileX, tileY ) ){
			
			engine.player.CurrX += (engine.player.DirX * engine.player.speed );		
			engine.player.CurrY += (engine.player.DirY * engine.player.speed );
			
		}else 
		
		if( engine.currentMap[ tileY ][ tileX ] != 5  )
		{
			engine.player.CurrX += (engine.player.DirX * 8 );		
			engine.player.CurrY += (engine.player.DirX * 8 );	
		}
	}//if
	
}//walk

function colizao ( x, y )
{	

	 if( engine.currentMap[ y ][ x ].ground == 5 )
	 {
		 return true;
	 }else{
		 return false;
	 }//else
	
}//colizao

function limiteCenario ( x, y )
{

	 if( ( x > -1 && x <= 21 ) && ( y > -1 && y <= 11 ) )
	 {
		 return true;
	 }else{
		 return false;
	 }//else
	 
}//colizao


/*------------------------------------------*/
engine.player.animate = function ()
{
	
	if ( engine.keyboard.canInput)
	{
		if ( engine.player.CurrPos <= 3)
		{
			
			if( engine.player.FrameRate < 10) {
				
				engine.player.FrameRate++;
			}
			else
			{
				
				if ( engine.player.CurrPos != 3)
				{
					engine.player.CurrPos++;
				}
				else
				{
					engine.player.CurrPos = 0;
				}
				engine.player.FrameRate = 0;
			}
			
		}
		else
		{
			
			engine.player.CurrPos = 0;
			engine.player.FrameRate = 0;
		}
	}
	else
	{
		engine.player.CurrPos = 0;
	}
	
	//troca o index
	//engine.player.SpriteIndex += 
}

/*-----------------------------------------*/
engine.player.reset = function ()
{
	
	var x = engine.viewport.x;
	var y = engine.viewport.y;
	
	var index = 0;
	
	switch ( engine.player.SpriteIndex )
	{
		
		//down
		case 0:
		
			y++;
			index = 0;
		break;
		
		//right
		case 1:
		
			x++;
			index = 1;
		break;
		
		
		//up
		case 2:
		
			y--;
			index = 2;
		break;
		
		//left
		case 3:
		
			x--;
			index = 3;
		break;
	}
	
	
	engine.viewport.x = x;
	engine.viewport.y = y;
	
	engine.keyboard.canIput = true;
	
	engine.viewport.playerOffsetX = 0;
	engine.viewport.playerOffsetY = 0;
	
	engine.player.SpriteIndex = index;
	
	engine.draw();
	
	
}


