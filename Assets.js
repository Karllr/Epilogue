function Block(x,y,type1,type2,type3,type4,x2,y2){
    this.x=x;
    this.y=y;
    this.Sz=50;
    this.type1=type1;
    this.type2=type2;
    this.type3=type3;
    this.type4=type4;
    this.BlocktoLeft=false;
    this.BlocktoRight=false;
    this.BlockAbove=false;
    this.BlockBelow=false;
    this.x2=x2;
    this.y2=y2;
    this.hue=BG[0];
    if(this.hue>180){
        this.color=color(this.hue-180,70,360);
    }
    if(this.hue<180){
        this.color=color(this.hue+180,70,360);
    }
    this.updateTextures=function(blocks){
        this.BlocktoLeft=false;
        this.BlocktoRight=false;
        this.BlockAbove=false;
        this.BlockBelow=false;
        for(var i=0;i<blocks.length;i++){
            var b=blocks[i];
            switch(this.type2){
                case 1:
                    if(this.type1===b.type1){
                    if(dist(this.x,this.y,b.x,b.y)===50){
                        if(this.x-b.x===-50){
                          this.BlocktoRight=true;
                        }
                        if(this.x-b.x===50){
                          this.BlocktoLeft=true;
                        }
                        if(this.y-b.y===50){
                          this.BlockAbove=true;
                        }
                        if(this.y-b.y===-50){
                          this.BlockBelow=true;
                        }
                    }
                }
                break;
                case 2:
                    if(this.type1===b.type1){
                        if(dist(this.x,this.y,b.x,b.y)===50){
                        if(this.x-b.x===-50){
                          this.BlocktoRight=true;
                        }
                        if(this.x-b.x===50){
                          this.BlocktoLeft=true;
                        }
                        if(this.y-b.y===50){
                          this.BlockAbove=true;
                        }
                        if(this.y-b.y===-50){
                          this.BlockBelow=true;
                        }
                    }
                break;

            }

            }
        switch(this.type2){
            case 1:
                if(this.BlockAbove&&!this.BlockBelow&&!this.BlocktoRight&&!this.BlocktoLeft){
                    this.type3=2;
                    this.type4=1;
                }
                if(this.BlockAbove&&this.BlockBelow&&!this.BlocktoRight&&!this.BlocktoLeft){
                    this.type3=2;
                    this.type4=2;
                }
                if(this.BlockAbove&&this.BlockBelow&&this.BlocktoRight&&!this.BlocktoLeft){
                    this.type3=2;
                    this.type4=2;
                }
                if(this.BlockAbove&&this.BlockBelow&&this.BlocktoRight&&this.BlocktoLeft){
                    this.type3=2;
                    this.type4=2;
                }
                if(this.BlockAbove&&!this.BlockBelow&&this.BlocktoRight&&!this.BlocktoLeft){
                    this.type3=2;
                    this.type4=1;
                }
                if(this.BlockAbove&&!this.BlockBelow&&!this.BlocktoRight&&this.BlocktoLeft){
                    this.type3=2;
                    this.type4=1;
                }
                if(this.BlockAbove&&this.BlockBelow&&!this.BlocktoRight&&this.BlocktoLeft){
                    this.type3=2;
                    this.type4=2;
                }
                if(!this.BlockAbove&&!this.BlockBelow&&!this.BlocktoRight&&!this.BlocktoLeft){
                    this.type3=1;
                    this.type4=1;
                }
            break;
        }
        }
    };
    this.show=function(){
        switch(this.type1){
            case 1:
                //Normal Block
                switch(this.type2){
                    case 1:
                        //First Style
                        switch(this.type3){
                            case 1:
                                    switch(this.type4){
                                        case 1:
                                            fill(0,0,360);
                                            strokeWeight(2);
                                            stroke(0,0,360);
                                            line(this.x,this.y,this.x+this.Sz,this.y);
                                            rect(this.x,this.y+10,this.Sz,this.Sz-10)
                                        break;
                                        case 2:
                                            fill(0,0,360);
                                            strokeWeight(2);
                                            stroke(0,0,360);
                                            line(this.x+this.Sz,this.y,this.x+this.Sz,this.y+this.Sz);
                                            rect(this.x,this.y,this.Sz-10,this.Sz);
                                        break;
                                        case 3:
                                            fill(0,0,360);
                                            strokeWeight(2);
                                            stroke(0,0,360);
                                            line(this.x,this.y,this.x,this.y+this.Sz);
                                            rect(this.x+10,this.y,this.Sz-10,this.Sz);
                                        break;
                                    }
                            break;
                            case 2:
                                switch(this.type4){
                                    case 1:
                                        //Grad ending
                                        for(var i=0;i<50;i++){
                                            var c=lerpColor(color(0,0,360,360),color(0,0,360,0),i/50);
                                            stroke(c);
                                            strokeWeight(2);
                                            line(this.x,this.y+i,this.x+this.Sz,this.y+i);
                                        }
                                    break;
                                    case 2:
                                        //Filler
                                        fill(0,0,360);
                                        stroke(0,0,360);
                                        strokeWeight(2);
                                        rect(this.x,this.y,this.Sz,this.Sz);
                                    break;
                                }
                            break;
                        }
                    break;
                    case 2:
                        switch(this.type3){
                            case 1:
                                
                            break;
                            case 2:
                            break;
                            case 3:
                            break;
                            case 4:
                            break;
                        }
                    break;
                    case 3:
                        //Third Style
                    break;
                }
            break;
            case 2:
                //Death Block
                switch(this.type2){
                    case 1:
                        switch(this.type3){
                            case 1:
                                switch(this.type4){
                                    case 1:
                                        fill(255);
                                        strokeWeight(2);
                                        stroke(255);
                                        line(this.x,this.y,this.x+this.Sz,this.y);
                                        rect(this.x,this.y+10,this.Sz,this.Sz-10)
                                        triangle(this.x+5,this.y,this.x+10,this.y-10,this.x+15,this.y);
                                        triangle(this.x+5+30,this.y,this.x+10+30,this.y-10,this.x+15+30,this.y);
                                    break;
                                    case 2:
                                    break;
                                    case 3:
                                }
                            break;
                        }
                    break
                }
            break;
            case 3:
                noStroke();
                fill(BG[0],BG[1],BG[2]*0.6);
                rect(this.x,this.y,this.Sz,this.Sz);
            break;
            case 4:
                noStroke();
                fill(93, 104, 255);
                rect(this.x,this.y,this.Sz,this.Sz,10,10,10,10);
                fill(255, 139, 61);
                rect(this.x2,this.y2,this.Sz,this.Sz,10,10,10,10);
            break;
        }
    };

}