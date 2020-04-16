class piece{
    
    //Player: white or black
    //position: x,y
    //Name: what the piece is actually called
    constructor(player,board,x,y, name){
        this.player=player;
        this.board=board;
        this.x=x;
        this.y=y;
        this.name=name;//what the piece is called
        //this.legalx=[];
        //this.legaly=[];
    }
    
    move(x,y){//Update the position of this piece on the board
        this.pos.move(x,y);
    }
    
    //Check if other pieces are in the way
    isMoveLegal(x,y,diagonal){
        if(diagonal){
            console.log("Diagonal");
            let xs=x; let ys=y;
            if(x>this.x){
                console.log("X>this.x");
                if(y>this.y){
                    while(xs>this.x && ys>this.y){
                        let spot = this.board.checkSpot(xs,ys);
                        if(spot!=null && spot.player==this.player){
                            return false;
                        }
                        xs--; ys--;
                    }
                }
                else{
                    while(xs>this.x && ys<this.y){
                        let spot = this.board.checkSpot(xs,ys);
                        if(spot!=null && spot.player==this.player){
                            return false;
                        }
                        xs--; ys++;
                    }
                }
            }
            else{
                if(y>this.y){
                    while(xs<this.x && ys>this.y){
                        let spot = this.board.checkSpot(xs,ys);
                        if(spot!=null && spot.player==this.player){
                            return false;
                        }
                        xs++; ys--;
                    }
                }
                else{
                    while(xs<this.x && ys<this.y){
                        let spot = this.board.checkSpot(xs,ys);
                        if(spot!=null && spot.player==this.player){
                            return false;
                        }
                        xs++; ys++;
                    }
                }
            }
        }
        else{
            //console.log("Moving striaght");
            if(x==this.x){
                console.log("X is the same");
                if(y>this.y){
                    //console.log("y>this.y");
                    for(var i=y; i>this.y; i--){
                        let spot=this.board.checkSpot(x,i);
                        if(spot!=null && spot.player==this.player){
                            return false;
                        }
                    }
                }
                else{
                    //console.log("y<this.y");
                    for(var i=y; i<this.y; i++){
                        let spot=this.board.checkSpot(x,i);
                        if(spot!=null && spot.player==this.player){
                            return false;
                        }
                    }
                }
            }
            if(y==this.y){
                console.log("Y is the same");
                if(x>this.x){
                    //console.log("x>this.x");
                    for(var i=x; i>this.x; i--){
                        let spot=this.board.checkSpot(i,this.y);
                        if(spot!=null && spot.player==this.player){
                            return false;
                        }
                    }
                }
                else{
                    //console.log("x>this.x");
                    for(var i=x; i<this.x; i++){
                        let spot=this.board.checkSpot(i,this.y);
                        if(spot!=null && spot.player==this.player){
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }
    
    capture(){//Piece has been captured. Move it to the side
        
    }
    
    toString(){
        return this.player+"-"+this.name;
    }
    
}