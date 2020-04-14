class king extends piece{
    
    constructor(player,x,y){
        super(player,x,y,"king");
    }
    
    move(){
        this.pos.move(this.pos.x+1,this.pos.y);
    }
}