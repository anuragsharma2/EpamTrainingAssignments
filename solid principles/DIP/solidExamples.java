
import java.util.*;


interface EmployeeWithDisplay{
	void display(Employee t);	
}
interface EmployeeWithInput{
	void input(Employee e);	
}
class Employee{
	protected String name;
  	protected int age;
  	protected float salary;
  	protected String designation;
}
class InputEmployee extends Employee implements EmployeeWithInput {
	public void input(Employee e){
		Scanner sc= new Scanner(System.in);
		System.out.println("Enter name:");
		e.name=sc.nextLine();
		System.out.println("Enter age:");
		e.age=sc.nextInt();
		System.out.println("Enter salary:");
		e.salary= sc.nextFloat();
		System.out.println("Enter designation:");
		e.designation= sc.next();
	}
}
class DisplayEmployee extends Employee implements EmployeeWithDisplay{
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
		Employee e=new Employee();
		EmployeeWithInput ie=new InputEmployee();
		ie.input(e);
		EmployeeWithDisplay d=new DisplayEmployee();
		d.display(e);
		RaiseSalary r=new RaiseSalary();
		r.raise(e);
		d.display(e);					
		}
}