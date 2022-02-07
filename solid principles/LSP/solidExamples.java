
import java.util.*;

abstract class Employee{
	protected String name;
  	protected int age;
  	protected float salary;
  	protected String designation;
}
abstract class EmployeeWithDisplay extends Employee{
	abstract public void display(Employee t);	
}
abstract class EmployeeWithInput extends Employee{
	abstract public void input();	
}

class InputEmployee extends EmployeeWithInput{
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
}
class DisplayEmployee extends EmployeeWithDisplay{
	public void display(Employee t){
		System.out.println("---------------------------------------");
		System.out.println(t.name);
		System.out.println(t.age);
		System.out.println(t.salary);
		System.out.println(t.designation);
		}
}
class RaiseSalary extends Employee{
	public void raise(Employee e){
		float t;
		Scanner sc= new Scanner(System.in);
		System.out.println("Enter amount to raise salary of "+e.name+":");
 		t=sc.nextFloat();
        	e.salary+=t;   
		}
}
public class solidExamples{
	public static void main(String args[]){
		EmployeeWithInput ie=new InputEmployee();
		ie.input();
		EmployeeWithDisplay d=new DisplayEmployee();
		d.display(ie);
		RaiseSalary r=new RaiseSalary();
		r.raise(ie);
		d.display(ie);					
		}
}