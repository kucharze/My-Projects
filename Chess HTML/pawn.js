class pawn extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"pawn");
        this.hasMoved=false;
        this.legalAttackx=[];
        this.legalAttacky=[];
    }
    
    move(x,y){
        if(this.player=="white"){//white player
            
        }
        else{//black player
            
        }
    }
    
    attack(x,y){
        if(this.player=="white"){//white
            
        }
        else{//black
            
        }
    }
    
    
}