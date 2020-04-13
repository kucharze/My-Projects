class bishop extends piece{
    
    constructor(player, pos){
        super(player,pos,"bishop");
    }
    
    move(){
        this.pos.move(this.pos.x+1,this.pos.y);
    }
    
}