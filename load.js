function Load(set,map){
    for(var i=0;i<map[level].length;i++){
        for(var j=0;j<map[level][i].length;j++){
            switch(map[level][i][j]){
                case '1':
                    set[level].push(new Block(j*50,i*50,1,1,1,1));
                break;
                case 'P':
                    player.x=j*50;
                    player.y=i*50;
                    player.respawn.x=j*50;
                    player.respawn.y=i*50;
                break;
                case 'O':
                    set[level].push(new Block(j*50,i*50,3,1,1,1))
                break;
                case 'X':
                    set[level].push(new Block(j*50,i*50,2,1,1,1));
                break;
            }
        }
    }
}
function Erase(set){
    set.length=0;
}