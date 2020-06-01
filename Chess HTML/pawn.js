class pawn extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"pawn");
        this.hasMoved=false;
        this.capture=false;
        
        this.legalAttackx=[];
        this.legalAttacky=[];
    }
    
    move(x,y){
        //console.log(this.x+" " + this.y);
        //console.log(x+" " + y);
        if(y!=this.y){
            return this.attack(x,y);
        }
        if(this.player=="white"){//white player
            //console.log("white");
            if(!this.hasMoved){//has not moved yet
                //console.log("Hasn't moved");
                if(x>this.x+2){
                    return false;
                }
            }
            else{
                //console.log("Has moved");
                if(x>this.x+1){
                    return false;
                }
            }
        }
        else{//black player
            ///console.log("black");
            if(!this.hasMoved){//has not moved yet
                //console.log("Hasn't moved");
                if(x<this.x-2){
                    return false;
                }
            }
            else{
                //console.log("Has moved");
                if(x<this.x-1){
                    return false;
                }
            }
        }
        if(this.board.checkSpot(x,y)==null || this.board.checkSpot(x,y).player!=this.player){
            this.hasMoved=true;
            return true;
        }
        
    }
    
    attack(x,y){
        //console.log("Attacking");
        if(y>this.y+1){
            return false;
        }
        if(y<this.y-1){
            return false;
        }
        
        if(this.player=="white"){//white
            if(x<this.x-1){
                return false;
            }
        }
        else{//black
            if(x<this.x-1){
                false;
            }
        }
        
        if((this.board.checkSpot(x,y)==null) || (this.board.checkSpot(x,y).player==this.player)){
            return false;
        }
        return true;
    }
    
    upgrade(){
        
    }
    
}