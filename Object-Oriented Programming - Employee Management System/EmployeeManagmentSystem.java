package com.java.testsolutions;

import java.util.ArrayList;
import java.util.List;

class Employee {
	private int id;
	private String name;
	private double salary;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	
	//method to display details of an employee
	public void displayDetails() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }
	
	
}
public class EmployeeManagmentSystem {
	 public static void main(String[] args) {
	        List<Employee> employees = new ArrayList<>();
	        
	        Employee emp1 = new Employee();
	        emp1.setId(1);
	        emp1.setName("Anusha");
	        emp1.setSalary(50000);
	        
	        Employee emp2 = new Employee();
	        emp2.setId(2);
	        emp2.setName("Bhuvana");
	        emp2.setSalary(60000);
	        
	        Employee emp3 = new Employee();
	        emp3.setId(3);
	        emp3.setName("Charan");
	        emp3.setSalary(55000);
	        
	        employees.add(emp1);
	        employees.add(emp2);
	        employees.add(emp3);
            
	        for (Employee emp : employees) {
	            emp.displayDetails();
	        }
	    }
	}

