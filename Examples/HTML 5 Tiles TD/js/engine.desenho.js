

		//criaçao otimizada de objetos dentro do array : {parametros}
		var map = [
					[{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:9       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:7       },{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:9       },{ground:0       }],
					[{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:6       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:4       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:6       },{ground:0       }],
					[{ground:2       },{ground:2       },{ground:2       },{ground:2       },{ground:2       },{ground:2       },{ground:2       },{ground:2       },{ground:19      },{ground:5       },{ground:6       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:4       },{ground:5       },{ground:17      },{ground:19      },{ground:5       },{ground:6       },{ground:0       }],
					[{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:4       },{ground:5       },{ground:6       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:4       },{ground:5       },{ground:6       },{ground:4       },{ground:5       },{ground:6       },{ground:0       }],
					[{ground:7       },{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:13      },{ground:5       },{ground:6       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:4       },{ground:5       },{ground:6       },{ground:4       },{ground:5       },{ground:6       },{ground:0       }],
					[{ground:4       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:6       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:4       },{ground:5       },{ground:6       },{ground:4       },{ground:5       },{ground:6       },{ground:0       }],
					[{ground:4       },{ground:5       },{ground:17      },{ground:2       },{ground:2       },{ground:2       },{ground:2       },{ground:2       },{ground:2       },{ground:2       },{ground:3       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:4       },{ground:5       },{ground:6       },{ground:4       },{ground:5       },{ground:6       },{ground:0       }],
					[{ground:4       },{ground:5       },{ground:6       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:4       },{ground:5       },{ground:6       },{ground:4       },{ground:5       },{ground:11      },{ground:8       }],
					[{ground:4       },{ground:5       },{ground:6       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:0       },{ground:4       },{ground:5       },{ground:6       },{ground:4       },{ground:5       },{ground:5       },{ground:5       }],
					[{ground:4       },{ground:5       },{ground:11      },{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:8       },{ground:9       },{ground:0       },{ground:7       },{ground:8       },{ground:8       },{ground:8       },{ground:13      },{ground:5       },{ground:6       },{ground:1       },{ground:2       },{ground:2       },{ground:2       }],
					[{ground:4       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:11      },{ground:8       },{ground:13      },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:6       },{ground:0       },{ground:0       },{ground:0       },{ground:0       }],
					[{ground:1       },{ground:2       },{ground:2       },{ground:2       },{ground:2       },{ground:2       },{ground:2       },{ground:19      },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:5       },{ground:17      },{ground:2       },{ground:2       },{ground:2       },{ground:3       },{ground:0       },{ground:0       },{ground:0       },{ground:0       }]
		];
		
		
		var cave = [
					[{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4}],
					[{ground:3,item:4},{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3,item:4}],
					[{ground:3,item:4},{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3,item:4}],
					[{ground:3,item:4},{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3,item:4}],
					[{ground:3,item:4},{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3,item:4}],
					[{ground:3,item:4},{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3,item:4}],
					[{ground:3,item:4},{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3,item:4}],
					[{ground:3,item:4},{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3,item:4}],
					[{ground:3,item:4},{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3,item:4}],
					[{ground:3,item:4},{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3,item:4}],
					[{ground:3,item:4},{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3,item:4}],
					[{ground:3,item:4},{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3,item:7},{ground:3,item:4}],
					[{ground:3,item:4},{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3       },{ground:3,item:6},{ground:3,item:4}],
					[{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4},{ground:3,item:4}]
		];
		
		
		window.addEventListener ('load', function()
		{
			engine.start ( map, 0, 0 )			// desenha o mapa passado, na posi�ao X Y especifica
		}, false );
		
		document.addEventListener ('keydown', engine.keyboard.KeyDown, false);
		
		document.addEventListener ('keyup', engine.keyboard.KeyUp, false );

