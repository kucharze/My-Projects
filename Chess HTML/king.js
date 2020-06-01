class king extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"king");
        this.hasMoved=false;
        this.capture=false;
    }
    
    move(x,y){
        //return this.moveTest();
        
        let spot=this.board.checkSpot(x,y);
        if(!this.moved){
           if(spot!=null && spot.name=="rook"){
                //check if can castle
                return this.castle(x,y);
            } 
        }
        
        if(x>this.x+1){
            return false;
        }
        if(x<this.x-1){
            return false;
        }
        if(y>this.y+1){
            return false;
        }
        if(y<this.y-1){
            return false;
        }
        if(spot==null || spot.player!=this.player){
            return true;
        }
        
    }
    
    checkInCheck(){
        //Given a king and its position, Determine if it is in check
        //check for pawns that can attack
        if(this.player=="white"){
            let pos1=this.board.checkSpot(this.x+1,this.y+1);
            let pos2=this.board.checkSpot(this.x+1,this.y-1);
            if(pos1!=null && pos1.player!=this.player && pos1.name=="pawn"){
                return true;
            }
            if(pos2!=null && pos2.player!=this.player && pos2.name=="pawn"){
                return true;
            }
        }
        if(this.player=="black"){
            let pos1=this.board.checkSpot(this.x-1,this.y+1);
            let pos2=this.board.checkSpot(this.x-1,this.y-1);
            if(pos1!=null && pos1.player!=this.player && pos1.name=="pawn"){
                return true;
            }
            if(pos2!=null && pos2.player!=this.player && pos2.name=="pawn"){
                return true;
            }
        }
        
        //check for knight
        let pos1=this.board.checkSpot(this.x+2,this.y+1);
        let pos2=this.board.checkSpot(this.x+2,this.y-1);
        let pos3=this.board.checkSpot(this.x+1,this.y+2);
        let pos4=this.board.checkSpot(this.x+1,this.y-2);
        let pos5=this.board.checkSpot(this.x-2,this.y+1);
        let pos6=this.board.checkSpot(this.x-2,this.y-1);
        let pos7=this.board.checkSpot(this.x-1,this.y+2);
        let pos8=this.board.checkSpot(this.x-1,this.y-1);
        if(pos1!=null && pos1.name=="knight" && pos1.player!=this.player){
            return true;
        }
        if(pos2!=null && pos2.name=="knight" && pos2.player!=this.player){
            return true;
        }
        if(pos3!=null && pos3.name=="knight" && pos3.player!=this.player){
            return true;
        }
        if(pos4!=null && pos4.name=="knight" && pos4.player!=this.player){
            return true;
        }
        if(pos5!=null && pos5.name=="knight" && pos5.player!=this.player){
            return true;
        }
        if(pos6!=null && pos6.name=="knight" && pos6.player!=this.player){
            return true;
        }
        if(pos7!=null && pos7.name=="knight" && pos7.player!=this.player){
            return true;
        }
        if(pos8!=null && pos8.name=="knight" && pos8.player!=this.player){
            return true;
        }
        
        //check for rooks or queen
        for(var i=this.x+1; i<8; i++){
            let pos=this.board.checkSpot(i,this.y);
            if(pos!=null){
                //console.log("Rook check up");
                if(pos.player!=this.player){
                    //console.log("Players not the same");
                    if (pos.name=="rook" || pos.name=="queen"){
                        //console.log("in check rook");
                        return true;
                    }
                }
                break;
            }
        }
        
        for(var i=this.x-1; i>=0; i--){
            let pos=this.board.checkSpot(i,this.y);
            if(pos!=null){
                //console.log("Rook check up");
                if(pos.player!=this.player){
                    //console.log("Players not the same");
                    if (pos.name=="rook" || pos.name=="queen"){
                        //console.log("in check rook");
                        return true;
                    }
                }
                break;
            }
        }
        
        for(var i=this.y+1; i<8; i++){
            let pos=this.board.checkSpot(this.x,i);
            if(pos!=null){
                //console.log("Rook check up");
                if(pos.player!=this.player){
                    //console.log("Players not the same");
                    if (pos.name=="rook" || pos.name=="queen"){
                        //console.log("in check rook");
                        return true;
                    }
                }
                break;
            }
        }
        
        for(var i=this.y-1; i>=0; i--){
            let pos=this.board.checkSpot(this.x,i);
            if(pos!=null){
                //console.log("Rook check up");
                if(pos.player!=this.player){
                    //console.log("Players not the same");
                    if (pos.name=="rook" || pos.name=="queen"){
                        //console.log("in check rook");
                        return true;
                    }
                }
                break;
            }
        }
        
        //check for bishops or queen
        var i=this.x+1;
        var j=this.y+1;
        while(i<8 && j<8){
            let pos=this.board.checkSpot(i,j);
            if(pos!=null){
                //console.log("i+ j+ diag");
                if(pos.player!=this.player && (pos.name=="bishop" || pos.name=="queen")){
                    console.log("i+ j+ diag in check");
                    return true;
                }
                break;
            }
            i++;
            j++;
        }
        
        var i=this.x-1;
        var j=this.y-1;
        while(i>=0 && j>=0){
            let pos=this.board.checkSpot(i,j);
            if(pos!=null){
                //console.log("i- j- diag");
                if(pos.player!=this.player && (pos.name=="bishop" || pos.name=="queen")){
                    console.log("i- j- diag in check");
                    return true;
                }
                break;
            }
            i--;
            j--;
        }
        
        var i=this.x+1;
        var j=this.y-1;
        while(i<8 && j>=0){
            let pos=this.board.checkSpot(i,j);
            if(pos!=null){
                //console.log("i+ j- diag");
                if(pos.player!=this.player && (pos.name=="bishop" || pos.name=="queen")){
                    console.log("i+ j- diag in check");
                    return true;
                }
                break;
            }
            i++;
            j--;
        }
        
        var i=this.x-1;
        var j=this.y+1;
        while(i>=0 && j<8){
            let pos=this.board.checkSpot(i,j);
            if(pos!=null){
                //console.log("i- j+ diag");
                if(pos.player!=this.player && (pos.name=="bishop" || pos.name=="queen")){
                    console.log("i+ j- diag in check");
                    return true;
                }
                break;
            }
            i--;
            j++;
        }
        //console.log("done");
        return false;
    }
    
}