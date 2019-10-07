
public class Knight extends Piece{

	public Knight(String type, Board b) {
		super(type, b);
	}
	
	public void move() {
		
	}
	
	public String toString() {
		String t="";
		if(type.equals("Black")) {
			t+="B";
		}
		else {
			t+="W";
		}
		t+="KN";
		
		return t;
	}
}
