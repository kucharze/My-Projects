class king extends piece{
    
    constructor(player, pos){
        super(player,pos,"king");
    }
    
    move(){
        this.pos.move(this.pos.x+1,this.pos.y);
    }
}