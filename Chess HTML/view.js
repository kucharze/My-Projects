class view{
    //This class displays what the user sees
    //This class uses resources from the following sites
    //https://stackoverflow.com/questions/5913927/get-child-node-index
    
    constructor(board){
        this.board=board;
        this.row1=document.getElementById("row1");
        this.row2=document.getElementById("row2");
        this.row3=document.getElementById("row3");
        this.row4=document.getElementById("row4");
        this.row5=document.getElementById("row5");
        this.row6=document.getElementById("row6");
        this.row7=document.getElementById("row7");
        this.row8=document.getElementById("row8");
        let self=this;
        
        this.row1.addEventListener("click",function(){
            //this.row1.childNodes;
            let child = event.target;
            var i = 0;
            while( (child = child.previousSibling) != null ) 
              i++;
            alert("Row 1 "+i);
            self.board.markPiece(0,i);
        });
        this.row2.addEventListener("click",function(){
            let child=event.target;
            var i = 0;
            while( (child = child.previousSibling) != null ) 
              i++;
            alert("Row 2 "+i);
            self.board.markPiece(1,i);
        });
        this.row3.addEventListener("click",function(){
            let child=event.target;
            var i = 0;
            while( (child = child.previousSibling) != null ) 
              i++;
            alert("Row 3 "+i);
            self.board.markPiece(2,i);
        });
        this.row4.addEventListener("click",function(){
            let child=event.target;
            var i = 0;
            while( (child = child.previousSibling) != null ) 
              i++;
            alert("Row 4 "+i);
            self.board.markPiece(3,i);
        });
        this.row5.addEventListener("click",function(){
            let child=event.target;
            var i = 0;
            while( (child = child.previousSibling) != null ) 
              i++;
            alert("Row 5 "+i);
            self.board.markPiece(4,i);
        });
        this.row6.addEventListener("click",function(){
            let child=event.target;
            var i = 0;
            while( (child = child.previousSibling) != null ) 
              i++;
            alert("Row 6 "+i);
            self.board.markPiece(5,i);
        });
        this.row7.addEventListener("click",function(){
            let child=event.target;
            var i = 0;
            while( (child = child.previousSibling) != null ) 
              i++;
            alert("Row 7 "+i);
            self.board.markPiece(6,i);
        });
        this.row8.addEventListener("click",function(){
            let child=event.target;
            var i = 0;
            while( (child = child.previousSibling) != null ) 
              i++;
            alert("Row 8 "+i);
            self.board.markPiece(7,i);
        });
    }
    
    displayBoard(gameBoard){
        while(this.row1.hasChildNodes()){
            this.row1.removeChild(this.row1.lastChild);
        }
        while(this.row2.hasChildNodes()){
            this.row2.removeChild(this.row2.lastChild);
        }
        while(this.row3.hasChildNodes()){
            this.row3.removeChild(this.row3.lastChild);
        }
        while(this.row4.hasChildNodes()){
            this.row4.removeChild(this.row4.lastChild);
        }
        while(this.row5.hasChildNodes()){
            this.row5.removeChild(this.row5.lastChild);
        }
        while(this.row6.hasChildNodes()){
            this.row6.removeChild(this.row6.lastChild);
        }
        while(this.row7.hasChildNodes()){
            this.row7.removeChild(this.row7.lastChild);
        }
        while(this.row8.hasChildNodes()){
            this.row8.removeChild(this.row8.lastChild);
        }
        
        for(var i=0; i<gameBoard[0].length; i++){
            let p = document.createElement("img");
            if((gameBoard[0][i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board1";
            }
            else{
                p.src="./Images/" + gameBoard[0][i].player + "-" + gameBoard[0][i].name + ".jpg";
                //console.log(p.src);
                p.title=gameBoard[0][i].name+gameBoard[0][i].player;
            }
           
            this.row1.appendChild(p);
        }
        
        for(var i=0; i<gameBoard[1].length; i++){
            let p = document.createElement("img");
            if((gameBoard[1][i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board2";
            }
            else{
                p.src="./Images/" + gameBoard[1][i].player + "-" + gameBoard[1][i].name + ".jpg";
                p.title=gameBoard[1][i].name+gameBoard[1][i].player;
            }
            this.row2.appendChild(p);
        }
        
        for(var i=0; i<gameBoard[2].length; i++){
            let p = document.createElement("img");
            if((gameBoard[2][i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board3";
            }
            else{
                p.src="./Images/" + gameBoard[2][i].player + "-" + gameBoard[2][i].name + ".jpg";
                p.title=gameBoard[2][i].name+gameBoard[2][i].player;
            }
           
            this.row3.appendChild(p);
        }
        
        for(var i=0; i<gameBoard[3].length; i++){
            let p = document.createElement("img");
            if((gameBoard[3][i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board4";
            }
            else{
                p.src="./Images/" + gameBoard[3][i].player + "-" + gameBoard[3][i].name + ".jpg";
                p.title=gameBoard[3][i].name+gameBoard[3][i].player;
            }
            this.row4.appendChild(p);
        }
        
        for(var i=0; i<gameBoard[4].length; i++){
            let p = document.createElement("img");
            if((gameBoard[4][i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board5";
            }
            else{
                p.src="./Images/" + gameBoard[4][i].player + "-" + gameBoard[4][i].name + ".jpg";
                p.title=gameBoard[4][i].name+gameBoard[4][i].player;
            }
           
            this.row5.appendChild(p);
        }
        
        for(var i=0; i<gameBoard[5].length; i++){
            let p = document.createElement("img");
            if((gameBoard[5][i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board6";
            }
            else{
                p.src="./Images/" + gameBoard[5][i].player + "-" + gameBoard[5][i].name + ".jpg";
                p.title=gameBoard[5][i].name+gameBoard[5][i].player;
            }
           
            this.row6.appendChild(p);
        }
        
        for(var i=0; i<gameBoard[6].length; i++){
            let p = document.createElement("img");
            if((gameBoard[6][i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board7";
            }
            else{
                p.src="./Images/" + gameBoard[6][i].player + "-" + gameBoard[6][i].name + ".jpg";
                p.title=gameBoard[6][i].name+gameBoard[6][i].player;
            }
           
            this.row7.appendChild(p);
        }
        
        for(var i=0; i<gameBoard[7].length; i++){
            let p = document.createElement("img");
            if((gameBoard[7][i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board8";
            }
            else{
                p.src="./Images/" + gameBoard[7][i].player + "-" + gameBoard[7][i].name + ".jpg";
                p.title=gameBoard[7][i].name+gameBoard[7][i].player;
            }
           
            this.row8.appendChild(p);
        }
    }
    
}