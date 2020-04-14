class view{
    //This class displays what the user sees
    
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
    }
    
    displayBoard(row1,row2,row3,row4,row5,row6,row7,row8){
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
        for(var i=0; i<row1.length; i++){
            let p = document.createElement("img");
            if((row1[i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board1";
            }
            else{
                p.src="./Images/" + row1[i].player + "-" + row1[i].name + ".jpg";
                //console.log(p.src);
                p.title=row1[i].name+row1[i].player;
            }
           
            this.row1.appendChild(p);
        }
        
        for(var i=0; i<row2.length; i++){
            let p = document.createElement("img");
            if((row2[i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board2";
            }
            else{
                p.src="./Images/" + row2[i].player + "-" + row2[i].name + ".jpg";
                p.title=row2[i].name+row2[i].player;
            }
            this.row2.appendChild(p);
        }
        
        for(var i=0; i<row3.length; i++){
            let p = document.createElement("img");
            if((row3[i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board3";
            }
            else{
                p.src="./Images/" + row3[i].player + "-" + row3[i].name + ".jpg";
                p.title=row3[i].name+row3[i].player;
            }
           
            this.row3.appendChild(p);
        }
        
        for(var i=0; i<row4.length; i++){
            let p = document.createElement("img");
            if((row4[i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board4";
            }
            else{
                p.src="./Images/" + row4[i].player + "-" + row4[i].name + ".jpg";
                p.title=row4[i].name+row4[i].player;
            }
            this.row4.appendChild(p);
        }
        
        for(var i=0; i<row5.length; i++){
            let p = document.createElement("img");
            if((row5[i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board5";
            }
            else{
                p.src="./Images/" + row5[i].player + "-" + row5[i].name + ".jpg";
                p.title=row5[i].name+row5[i].player;
            }
           
            this.row5.appendChild(p);
        }
        
        for(var i=0; i<row6.length; i++){
            let p = document.createElement("img");
            if((row6[i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board6";
            }
            else{
                p.src="./Images/" + row6[i].player + "-" + row6[i].name + ".jpg";
                p.title=row6[i].name+row6[i].player;
            }
           
            this.row6.appendChild(p);
        }
        
        for(var i=0; i<row7.length; i++){
            let p = document.createElement("img");
            if((row7[i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board7";
            }
            else{
                p.src="./Images/" + row7[i].player + "-" + row7[i].name + ".jpg";
                p.title=row7[i].name+row7[i].player;
            }
           
            this.row7.appendChild(p);
        }
        
        for(var i=0; i<row8.length; i++){
            let p = document.createElement("img");
            if((row8[i]) == (null)){
                p.src="./Images/board.jpg";
                p.title="Board8";
            }
            else{
                p.src="./Images/" + row8[i].player + "-" + row8[i].name + ".jpg";
                p.title=row8[i].name+row8[i].player;
            }
           
            this.row8.appendChild(p);
        }
    }
    
}