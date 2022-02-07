import java.util.*;

abstract class Employee{
	protected String name;
  	protected int age;
  	protected float salary;
  	protected String designation;
	abstract public void input();
	abstract public void display(Employee t);
}
class InputEmployee extends Employee{
	public void input(){
		Scanner sc= new Scanner(System.in);
		System.out.println("Enter name:");
		this.name=sc.nextLine();
		System.out.println("Enter age:");
		this.age=sc.nextInt();
		System.out.println("Enter salary:");
		this.salary= sc.nextFloat();
		System.out.println("Enter designation:");
		this.designation= sc.next();
	}
	public void display(Employee t){}

}
class DisplayEmployee extends Employee{
	public void display(Employee t){
		System.out.println("---------------------------------------");
		System.out.println(t.name);
		System.out.println(t.age);
		System.out.println(t.salary);
		System.out.println(t.designation);
		}
	public void input(){}	
}
public class solidExamples{
	public static void main(String args[]){
		Employee ie=new InputEmployee();
		ie.input();
		Employee d=new DisplayEmployee();
		d.display(ie);
		}
}