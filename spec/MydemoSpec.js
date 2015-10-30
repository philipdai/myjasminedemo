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
	
	it("works for regular expressions the same", function(){
		var msg = "philip cen dai";
		
		expect(msg).toMatch(/cen/);
		expect(msg).toMatch(/Dai$/i);
		expect(msg).not.toMatch(/developer/);
	});
	
	it("Test on 'toBeDefined' matcher compare against 'undefined'", function() {
		var a = {
			foo: "foo"
		};
		
		expect(a.foo).toBeDefined();
		expect(a.bar).toBeUndefined();

	});
	
	it("Test on 'toBeNull' matcher compare against null", function() {
		var a = null;
		var foo = "foo";
		
		expect(null).toBeNull();
		expect(a).toBeNull();
		expect(foo).not.toBeNull();
	});
	
	it("Test on 'toBeTruthy'", function() {
		var a, me = "Philip Dai";
		expect(me).toBeTruthy();
		expect(a).not.toBeTruthy();
	});
	
	it("Test on 'toBeFalsy'", function() {
		var a, me = "Philip Dai";
		expect(a).toBeFalsy();
		expect(me).not.toBeFalsy();
	});
	
	it("Test on 'toContain'", function() {
		var arr = ['Philip', 'Cen', 'Dai'];
		
		expect(arr).toContain('Philip');
		expect(arr).not.toContain('Developer');
	});
	
	it("Test 'toBeLessThan and toBeGreatThan'", function() {
		var one = 1, two = 2;
		expect(one).toBeLessThan(two);
		expect(two).toBeGreaterThan(one);
	});
	
	it("Test 'toThrowError' matcher", function() {
		var foo = function() {
			return 2 + 1;
		};
		
		var bar = function() {
			return a + 1;
		};
		
		expect(foo).not.toThrow();
		expect(bar).toThrow();
	});
	
	it("Test 'toBeCloseTo'", function() {
		var pi = 3.14,
				e = 2.78;
		
		expect(pi).not.toBeCloseTo(e, 2);
		expect(pi).toBeCloseTo(e, 0);
	});
	
	it("Test 'toThrowError'", function() {
		var foo = function() {
			throw new TypeError("This is some type error");
		};
		
		expect(foo).toThrowError("This is some type error");
		expect(foo).toThrowError(/^this/i);
		expect(foo).toThrowError(TypeError);
		expect(foo).toThrowError(TypeError, "This is some type error");
	});
});
