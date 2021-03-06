
public abstract class Piece {
	protected boolean canAttack;
	protected String type;//Black or white for player
	protected Board b;//The board that this piece is on
	protected Player p;
	protected boolean special;
	
	public Piece(String type, Board b, Player p) {
		this.type=type;
		this.b=b;
		this.p=p;
	}
	
	public void move() {}
	
	public void attack() {}

	public boolean isCanAttack() {
		return canAttack;
	}

	public void setCanAttack(boolean canAttack) {
		this.canAttack = canAttack;
	}
}
