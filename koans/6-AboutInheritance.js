function Muppet(age, hobby) {
  this.age = age;
  this.hobby = hobby;

  this.answerNanny = () =>{
    return "Everything's cool!";
  };
}

function SwedishChef(age, hobby, mood) {
  Muppet.call(this, age, hobby);
  this.mood = mood;

  this.cook = () => {
    return "Mmmm soup!";
  };
}

SwedishChef.prototype = new Muppet();

describe("6. About inheritance", () => {
  beforeEach(() =>{
    this.muppet = new Muppet(2, "coding");
    this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  it("should be able to call a method on the derived object", () => {
    expect(this.swedishChef.cook()).toEqual(FILL_ME_IN);
  });

  it("should be able to call a method on the base object", () => {
    expect(this.swedishChef.answerNanny()).toEqual(FILL_ME_IN);
  });

  it("should set constructor parameters on the base object", () => {
    expect(this.swedishChef.age).toEqual(FILL_ME_IN);
    expect(this.swedishChef.hobby).toEqual(FILL_ME_IN);
  });

  it("should set constructor parameters on the derived object", () => {
    expect(this.swedishChef.mood).toEqual(FILL_ME_IN);
  });
});