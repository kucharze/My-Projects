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
        this.displayrowone(row1);
        this.displayrowtwo(row2);
        this.displayrowthree(row3);
        this.displayrowfour(row4);
        this.displayrowfive(row5);
        this.displayrowsix(row6);
        this.displayrowseven(row7);
        this.displayroweight(row8);
    }
    
    displayrowone(row){
        
        for(var i=0; i<row.length; i++){
            let p = document.createElement("img");
            if((row[i]) == (null)){
                //console.log("Printing board");
                p.src="./Images/board.jpg";
                p.title="Board1";
            }
            else{
                //console.log("printing a piece");
                p.src="./Images/" + row[i].player + "-" + row[i].name + ".jpg";
                console.log(p.src);
                p.title=row[i].name+row[i].player;
            }
           
            this.row1.appendChild(p);
        }
    }
    
    displayrowtwo(row){
        
        for(var i=0; i<row.length; i++){
            let p = document.createElement("img");
            if((row[i]) == (null)){
                //console.log("Printing board");
                p.src="./Images/board.jpg";
                p.title="Board2";
            }
            else{
                //console.log("printing a piece");
                p.src="./Images/" + row[i].player + "-" + row[i].name + ".jpg";
                console.log(p.src);
                p.title=row[i].name+row[i].player;
            }
           
            this.row2.appendChild(p);
        }
    }
    
    
    displayrowthree(row){

        for(var i=0; i<row.length; i++){
            let p = document.createElement("img");
            if((row[i]) == (null)){
                //console.log("Printing board");
                p.src="./Images/board.jpg";
                p.title="Board3";
            }
            else{
                //console.log("printing a piece");
                p.src="./Images/" + row[i].player + "-" + row[i].name + ".jpg";
                console.log(p.src);
                p.title=row[i].name+row[i].player;
            }
           
            this.row3.appendChild(p);
        }
    }
    displayrowfour(row){

        for(var i=0; i<row.length; i++){
            let p = document.createElement("img");
            if((row[i]) == (null)){
                //console.log("Printing board");
                p.src="./Images/board.jpg";
                p.title="Board4";
            }
            else{
                //console.log("printing a piece");
                p.src="./Images/" + row[i].player + "-" + row[i].name + ".jpg";
                //console.log(p.src);
                p.title=row[i].name+row[i].player;
            }
           
            this.row4.appendChild(p);
        }
    }
    
    displayrowfive(row){
        for(var i=0; i<row.length; i++){
            let p = document.createElement("img");
            if((row[i]) == (null)){
                //console.log("Printing board");
                p.src="./Images/board.jpg";
                p.title="Board5";
            }
            else{
                //console.log("printing a piece");
                p.src="./Images/" + row[i].player + "-" + row[i].name + ".jpg";
                console.log(p.src);
                p.title=row[i].name+row[i].player;
            }
           
            this.row5.appendChild(p);
        }
    }
    
    displayrowsix(row){
        for(var i=0; i<row.length; i++){
            let p = document.createElement("img");
            if((row[i]) == (null)){
                //console.log("Printing board");
                p.src="./Images/board.jpg";
                p.title="Board6";
            }
            else{
                //console.log("printing a piece");
                p.src="./Images/" + row[i].player + "-" + row[i].name + ".jpg";
                console.log(p.src);
                p.title=row[i].name+row[i].player;
            }
           
            this.row6.appendChild(p);
        }
    }
    
    displayrowseven(row){
        for(var i=0; i<row.length; i++){
            let p = document.createElement("img");
            if((row[i]) == (null)){
                //console.log("Printing board");
                p.src="./Images/board.jpg";
                p.title="Board7";
            }
            else{
                //console.log("printing a piece");
                p.src="./Images/" + row[i].player + "-" + row[i].name + ".jpg";
                console.log(p.src);
                p.title=row[i].name+row[i].player;
            }
           
            this.row7.appendChild(p);
        }
    }
    
    
    displayroweight(row){
        for(var i=0; i<row.length; i++){
            let p = document.createElement("img");
            if((row[i]) == (null)){
                //console.log("Printing board");
                p.src="./Images/board.jpg";
                p.title="Board8";
            }
            else{
                //console.log("printing a piece");
                p.src="./Images/" + row[i].player + "-" + row[i].name + ".jpg";
                console.log(p.src);
                p.title=row[i].name+row[i].player;
            }
           
            this.row8.appendChild(p);
        }
    }
    
}