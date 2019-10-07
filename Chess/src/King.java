
public class King extends Piece{
	public boolean canCastle;
	public boolean inCheck;
	
	public King(String type, Board b) {
		super(type, b);
	}
	
	public void move() {
		this.canCastle=false;
	}
	
	public void castle() {
		if(!this.canCastle) {
			return;
		}
	}
	
	public boolean isInCheck() {
		//Determine if the King is in check or not
		//TODO
		return false;
	}
	
	public String toString() {
		String t="";
		if(type.equals("Black")) {
			t+="B";
		}
		else {
			t+="W";
		}
		t+="K";
		return t;
	}
}
