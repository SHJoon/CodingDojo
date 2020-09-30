package com.howarshin.calculator;

public class Calculator implements java.io.Serializable {
	private double operandOne;
	private String operation;
	private double operandTwo;
	private double results;
	
	public double getOperandOne() {
		return operandOne;
	}
	public void setOperandOne(double operandOne) {
		this.operandOne = operandOne;
	}
	public String getOperation() {
		return operation;
	}
	public void setOperation(String operation) {
		this.operation = operation;
	}
	public double getOperandTwo() {
		return operandTwo;
	}
	public void setOperandTwo(double operandTwo) {
		this.operandTwo = operandTwo;
	}
	public double getResults() {
		return results;
	}
	public void setResults(double results) {
		this.results = results;
	}
	
	public void performOperation(){
		if (getOperation() == "+") {
			setResults(getOperandOne() + getOperandTwo());
		}
		else if (getOperation() == "-") {
			setResults(getOperandOne() - getOperandTwo());
		}
		else {
			System.out.println("Unrecognized operation: " + getOperation());
		}
	}
}
