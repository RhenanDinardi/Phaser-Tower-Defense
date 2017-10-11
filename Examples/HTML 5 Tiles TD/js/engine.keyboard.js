//---------------------controla o movimento pelo teclado-------------------------------//
engine.keyboard ={};


//verifica se pode andar ou nao
engine.keyboard.canInput = false;

engine.keyboard.isUp = false;
engine.keyboard.isDown = false;
engine.keyboard.isLeft = false;
engine.keyboard.isRight = false;

//pega o valor da tecla apertada
engine.keyboard.getValue = function (key) 
{
	
	switch (key)
	{
		case 'up': 			return 38;
		case 'down':		return 40;
		case 'left':		return 37;
		case'right':		return 39;
	}//switch
};


//aplica a mudança no viewport baseada no teclado
engine.keyboard.KeyDown = function (event)
{
	
		switch (event.keyCode) 
		{
			case engine.keyboard.getValue ('up'):
			
				//engine.viewport.y--;
				//engine.player.SpriteIndex =2;
				engine.keyboard.canInput = true;
				engine.keyboard.isUp = true;
				engine.player.move('up');
				break;
			
			case engine.keyboard.getValue ('down'):
			
				//engine.viewport.y++;
				//engine.player.SpriteIndex = 0;
				engine.keyboard.canInput = true;
				engine.keyboard.isDown = true;
				engine.player.move('down');
				break;
				
			case engine.keyboard.getValue ('left'):
			
				//engine.viewport.x--;
				//engine.player.SpriteIndex =3;
				engine.keyboard.canInput = true;
				engine.keyboard.isLeft = true;
				engine.player.move('left');
				break;
				
			case engine.keyboard.getValue ('right'):
			
				//engine.viewport.x++;
				//engine.player.SpriteIndex =1;
				engine.keyboard.canInput = true;
				engine.keyboard.isRight = true;
				engine.player.move('right');
				break;
	  }//switch
	
		
}


//aplica a mudança no viewport baseada no teclado
engine.keyboard.KeyUp = function (event)
{
	
		switch (event.keyCode) 
		{
			case engine.keyboard.getValue ('up'):
			
				engine.keyboard.canInput = false;
				engine.keyboard.isUp = false;
				engine.player.move('stop');
				break;
			
			case engine.keyboard.getValue ('down'):
			
				engine.keyboard.canInput = false;
				engine.keyboard.isDown = false;
				engine.player.move('stop');
				break;
				
			case engine.keyboard.getValue ('left'):
			
				engine.keyboard.canInput = false;
				engine.keyboard.isLeft = false;
				engine.player.move('stop');
				break;
				
			case engine.keyboard.getValue ('right'):
			
				engine.keyboard.canInput = false;
				engine.keyboard.isRight = false;
				engine.player.move('stop');
				break;
			}//switch
	
}//KeyUp
