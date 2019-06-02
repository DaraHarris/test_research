const expect = require("chai").expect; // require is to import the package chai which is assertion lib
const fibonacci = require("../src/fibonacci");//set access to fibonacci function that we are testing

describe("fibonacci", function(){ // define the test set
	it("should return 0", function(){//conventional naming of test case
		expect(fibonacci(0)).to.equal(0);
	}) 

	it("should return 1", function(){
		expect(fibonacci(1)).to.equal(1);
	})

	it("should fail with negative integer", function(){
		function bad(){fibonacci(-1)} //defer execution to bad() so expect can catch error
		expect(bad).to.throw();
	}) 

	it("should fail with non integer values", function(){
		function bad_form(){fibonacci(3.5)}
		expect(bad_form).to.throw();
	})

	it("should not be a string", function(){
		function bad_string(){fibonacci("hello")}
		expect(bad_string).to.throw();
	
	})
})