class Emp{
	constructor(name,age,designation,salary){
		this.name=name;
		this.age=age;
		this.designation=designation;
		this.salary=salary;
	}
	display(){
		console.log("==================")
		console.log("name: "+ this.name);	
		console.log("age: "+ this.age);
		console.log("Designation: "+ this.designation);
		console.log("Salary: "+ this.salary);
	}
	raiseSalary(){	
	}
}
class Clerk extends Emp{
	constructor(name,age){
		super(name,age,"CLERK",10000);
	}
	raiseSalary(){
		this.salary+=2000;
	}
}
class Programmer extends Emp{
	constructor(name,age){
		super(name,age,"Programmer",25000);
	}
	raiseSalary(){
		this.salary+=5000;
	}
}
class Manager extends Emp{
	constructor(name,age){
		super(name,age,"Manager",80000);
	}
	raiseSalary(){
		this.salary+=10000;
	}
}
p=new Programmer("ajay",33)
p.display();
p.raiseSalary();
p.display();

c=new Clerk("prateek",22)
c.display();
c.raiseSalary();
c.display();