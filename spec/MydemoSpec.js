describe("My demo suite", function() {
	it("contains spec with my demo expectation", function() {
		expect(1).toBe(1);
	});
});

describe("My suite is just a function", function() {
	var a = false;
	
	it("and so is a spec", function(){
		expect(a).toBe(false);
	});
	
	it("the spec is using not matcher", function() {
		expect(a).not.toBe(true);
		expect(a).not.toBe(null);
	});
});

describe("My suite on toBe", function() {
	it("also work for object", function() {
		var person = {
			name: "Philip",
			age: 36
		};
		
		var me = {
			name: "Philip",
			age: 36
		};
		
		expect(person).toEqual(me);
	});
	
	
});
