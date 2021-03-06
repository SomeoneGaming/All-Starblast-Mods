var Fly_V2_101 = '{"name":"Fly_V2","level":1,"model":1,"size":1.2,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[15,20]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-43,-33,0,50,65,75,65],"z":[0,0,0,0,0,0,0,0]},"width":[0,16,25,25,20,16,0],"height":[0,16,20,18,13,9,0],"texture":[4,63,11,4,4,17],"propeller":true},"cockpit":{"section_segments":12,"offset":{"x":0,"y":20,"z":12},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-20,10,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,12,15,10,0],"height":[0,12,18,12,0],"propeller":false,"texture":[7,9,9,7]},"cannon":{"section_segments":12,"offset":{"x":0,"y":-30,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-60,-65,-60,-50,-48,-5,10],"z":[0,0,0,0,0,0,0,0]},"width":[0,2,7,10,10,15,14],"height":[0,2,7,10,10,15,14],"texture":[6,63,2,4,13,4]},"wingendtop":{"section_segments":12,"offset":{"x":64,"y":46,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-45,-50,-20,0,20,30,32],"z":[0,0,0,0,0,0,0]},"width":[0,3,4,8,8,6,0],"height":[0,3,4,8,8,6,0],"texture":[12,63,63,11,4,4],"angle":0,"laser":{"damage":[7,8],"rate":2,"type":1,"speed":[160,180],"number":1,"error":0,"recoil":15}},"shield":{"section_segments":12,"offset":{"x":24,"y":27,"z":0},"position":{"x":[-5,0,2,0,0],"y":[-40,-30,9,40,30],"z":[0,0,0,0,0]},"width":[0,10,13,10,0],"height":[0,10,15,10,0],"propeller":true,"texture":[4,4,4,17],"angle":0}},"wings":{"top":{"doubleside":true,"offset":{"x":15,"y":20,"z":0},"length":[30,20],"width":[70,50,46],"angle":[0,0],"position":[0,15,32],"texture":[63,4],"bump":{"position":10,"size":13}}},"typespec":{"name":"Fly_V2.0","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[15,20]},"ship":{"mass":60,"speed":[140,150],"rotation":[110,130],"acceleration":[100,120]}},"shape":[2.281,2.194,1.517,1.09,0.86,0.753,0.68,0.628,0.593,0.623,0.687,0.783,1.611,1.63,1.677,1.76,1.929,2.134,2.361,2.48,2.425,1.803,1.777,1.837,1.832,1.804,1.832,1.837,1.777,1.803,2.425,2.48,2.361,2.134,1.929,1.76,1.677,1.63,1.611,0.783,0.687,0.623,0.593,0.628,0.68,0.753,0.86,1.09,1.517,2.194],"lasers":[{"x":1.536,"y":-0.096,"z":0,"angle":0,"damage":[5,6],"rate":2,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":15},{"x":-1.536,"y":-0.096,"z":0,"angle":0,"damage":[7,9],"rate":2,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":15}],"radius":50.48}}';
 
sh = Fly_V2_101
//sh.typespec.shape = [];
//sh = JSON.stringify(sh);
 
ships = [];
ships.push(sh);
 
ms = 30;
 
this.options = {
  // see documentation for options reference
  root_mode: "survival",
  map_size: 40, //ms,
  ships: ships,
  invulnerable_ships: true
};
 
map = [];
 
game.removeObject();
 
/*coords = function(x,y){
  xx = (x-5)/10;
  yy = (y-5)/10;
 
  xx = xx+ms;
  yy = yy+ms;
 
  xx = Math.round(xx/2);
  yy = Math.round(yy/2);
  game.modding.terminal.echo(xx+":"+yy);
  return mapCoords(xx,yy)
}*/
 
authorize = function(id){
  game.ships[id].custom.editor = true
}
 
mapToWorldCoords = function(o){
  cc = {};
  cc.x = (o.x-ms/2)*10;
  cc.y = (-o.y+ms/2-1)*10;
  return cc;
}
 
worldToMapCoords = function(o){
  cc = {};
  cc.x = Math.round(o.x/10+ms/2)%ms
  cc.y = Math.round(o.y/10+ms/2-1)%ms;
  return cc;
}
 
parseCoords = function(o){
  return [o.x,o.y];
}
 
for(x=0;x<ms;x++){
  map[x] = [];
  for(y=0;y<ms;y++){
    if(x==ms-1||x==0||y==0||y==ms-1)
    map[x][y] = "9";
    else
    map[x][y] = "0";
  }
}
 
stringifyMap = function(){
  s = "";
  for(y=ms-1;y>=0;y--){
    for(x=0;x<ms;x++){
      s += map[x][y]
    }
    s+="\n"
  }
  return s;
}
 
exportMap = function(){
  s = "var map = \"";
  for(y=ms-1;y>=0;y--){
    for(x=0;x<ms;x++){
      s += map[x][y]
    }
    s+="\\n\""
    if(y>0)
    s+="+\n"
  }
  return s;
}
 
switchToTesting = function(){
  game.removeObject();
  editing = false;
  game.setCustomMap(stringifyMap());
}
 
switchToEditing = function(){
  game.setCustomMap("");
  editing = true;
  for(y=ms-1;y>=0;y--){
    for(x=0;x<ms;x++){
      c = mapToWorldCoords({x:x,y:y});
      if(map[x][y]=="9")
        game.setObject({
          id: "asteroid"+x+":"+y,
          type: asteroidMarker,
          position: {x:c.x,y:-c.y,z:0},
          rotation: {x:Math.PI/2,y:0,z:0},
          scale: {x:5,y:5,z:5}
        }) ;
      game.setObject({
          id: "grid"+x+":"+y,
          type: gridTile,
          position: {x:c.x,y:-c.y,z:0},
          rotation: {x:Math.PI/2,y:0,z:0},
          scale: {x:5,y:5,z:5}
        }) ;
    }
  }
}
 
asteroidMarker = {
  id: "asteroidMarker",
  obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
  emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/AOE.png",
  transparent:true,
  emissiveColor: 0xFFFFFF,
} ;
 
gridTile = {
  id: "gridTile",
  obj: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/plane.obj",
  emissive: "https://raw.githubusercontent.com/rvan-der/Starblast.io-modding/master/images/textures/gridTile.png",
  transparent:true,
  emissiveColor: 0xFFFFFF,
} ;
 
loaded = false;
editing = true;
 
this.tick = function(game) {
  if(!loaded){
    loaded = true;
    game.setCustomMap("");
  }
  if(game.ships.length<1)return;
  for(i=0; i<game.ships.length; i++){
    ship = game.ships[i];
    if(!ship.custom.init){
      //authorize(i);
      ship.setUIComponent({
        id:"toggleAsteroid",
        position:[2,25,5,5],
        clickable: true,
        shortcut: "X",
        visible: true,
        components: [
          { type:"box",position:[0,0,100,100],fill:"#456",stroke:"#CDE",width:2},
          { type: "text",position: [0,0,100,50],color: "#FFF",value: "Toggle asteroid"},
        ]
      })
      ship.setUIComponent({
        id:"toggleEditing",
        position:[9,25,5,5],
        clickable: true,
        shortcut: "E",
        visible: true,
        components: [
          { type:"box",position:[0,0,100,100],fill:"#456",stroke:"#CDE",width:2},
          { type: "text",position: [0,0,100,50],color: "#FFF",value: "Toggle editing"},
        ]
      })
    }
  }
}
 
this.event = function(event,game) {
  //  echo(event.name);
  switch (event.name)
  {    
    case "ui_component_clicked":
      var ship = event.ship ;
      var component = event.id ;
      if (component == "toggleAsteroid")
      {try{
        if(!ship.custom.editor)
          return;
        if(!editing)
          return;
        c = worldToMapCoords({x:ship.x, y:ship.y});
 
        ship.setUIComponent({
        id:"lastCoords",
        position:[9,35,10,5],
        visible: true,
        components: [
            { type: "text",position: [0,0,100,50],color: "#FFF",value: c.x+":"+c.y},
          ]
        })
 
        wc = mapToWorldCoords(c);
        //log(c.x+":"+c.y)
        if(map[c.x][c.y]=="9"){
          map[c.x][c.y] = "0";
          game.removeObject("asteroid"+c.x+":"+c.y)
 
        }else{
          map[c.x][c.y] = "9"
          game.setObject({
            id: "asteroid"+c.x+":"+c.y,
            type: asteroidMarker,
            position: {x:wc.x,y:-wc.y,z:0},
            rotation: {x:Math.PI/2,y:0,z:0},
            scale: {x:5,y:5,z:5}
          }) ;
        }
 
 
      }catch(e){game.modding.terminal.echo(e.message);}
 
      }
 
      if (component == "toggleEditing")
      {
        if(!ship.custom.editor)
          return;
 
        if(editing)
          switchToTesting();
        else switchToEditing();
      }
      break ;
 
  }
} ;
