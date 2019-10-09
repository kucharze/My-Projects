
public class Pawn extends Piece{
	//private String type;
	private Board b;
	
	public Pawn(String type, Board b, Player p) {
		super(type,b,p);
	}
	
	public void move() {
		
	}
	
	public void attack() {
		if(this.canAttack) {
			
		}
	}
	
	public String toString() {
		String t="";
		String black = "Black";
		//System.out.println("The type is "+this.type);
		if(black.equals(this.type)) {
			t+="B";
		}
		else {
			t+="W";
		}
		t+="P";
		return t;
	}
}
