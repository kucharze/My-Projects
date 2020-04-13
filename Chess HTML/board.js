class Board{
    
    constructor(){
        this.turn=1;
        this.view=new view(this);
        this.row1=[new king("black",new position(1,2)), new king("white",new position(1,2))];
        this.row2=[new pawn("black",new position(2,1)), new pawn("white",new position(2,2)), null];
        this.row3=[new queen("black",new position(2,1)),new queen("white",new position(2,1))];
        this.row4=[null];
        this.row5=[new rook("white",new position(7,1)),new rook("black",new position(7,1))];
        this.row6=[new knight("white",new position(7,1)),new knight("black",new position(7,1))];
        this.row7=[new pawn("white",new position(7,1)), new king("white",new position(7,2)), null, null];
        this.row8=[new bishop("white",new position(7,1)),new bishop("black",new position(7,1))];
    }
    
    swapTurn(){
        if(this.turn==1){//white player turn
            this.turn==2;
        }
        else{//black player turn
            this.turn==1;
        }
    }
    
    movePiece(x,y){//pending on turn move a piece on the board
        
    }
    
    checkSpot(pos){//check what is in the position at pos
        
    }
    
    performCapture(piece){//A piece has been captured, move it off the board
        
    }
    
    newGame(){//starts and sets up a new game
        this.view.displayBoard(this.row1, this.row2, this.row3, this.row4, this.row5, this.row6, this.row7,this.row8);
    }
    
}