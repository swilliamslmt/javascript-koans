describe('0. About Expects', function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it('should expect true', function() {

    // Your journey begins here: Replace the word false with true 
    expect(false).toBeTruthy();
  });

  // To understand reality, we must compare our expectations against reality.
  it('should expect equality', function() {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it('should assert equality a better way', function() {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    // toEqual() compares using common sense equality.
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type."
  it('should assert equality with ===', function() {
    var expectedValue = FILL_ME_IN;
    var actualValue = (1 + 1).toString();

    // toBe() will always use === to compare.
    expect(actualValue).toBe(expectedValue);
  });

  it("should fill in a basic expectation", function() {
    var myExpectation = 4 > 7;
    expect(myExpectation).toBe(FILL_ME_IN);
  });

  it("should fill in an expectation 2", function() {
    var myExpectation = 8 === (2*4);
    expect(myExpectation).toBe(FILL_ME_IN);
  });

  it("should make an assignment to true", function () {
    var myExpectation = FILL_ME_IN;
    expect(myExpectation).toBe(true);
  });

  it("should make up any truthy statement", function() {
    var myExpectation = FILL_ME_IN;
    expect(myExpectation).not.toBe("Fill this value in");
    expect(myExpectation).not.toBe(true);
    expect(myExpectation).toBeTruthy();
  });
  
  it("should make an assignment to false", function () {
    var myExpectation = FILL_ME_IN;
    expect(myExpectation).toBe(false);
  });

  it("should make up any falsy statement", function() {
    var myExpectation = FILL_ME_IN;
    expect(myExpectation).not.toBe("Fill this value in");
    expect(myExpectation).not.toBe(false);
    expect(myExpectation).toBeFalsy();
  });

});
