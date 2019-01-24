describe("2. About Functions", () => {
  it("should declare functions", () => {
    const add = (a, b) => {
      return a + b;
    }

    expect(add(1, 2)).toBe(FILL_ME_IN);
  });

  it("should know internal variables override outer variables", () => {
    const message = "Outer";

    const getMessage = () => {
      return message;
    }

    const overrideMessage = () => {
      const message = "Inner";
      return message;
    }

    expect(getMessage()).toBe(FILL_ME_IN);
    expect(overrideMessage()).toBe(FILL_ME_IN);
    expect(message).toBe(FILL_ME_IN);
  });

  it("should have lexical scoping", () => {
    const variable = "top-level";
    const parentfunction = () => {
      const variable = "local";
      const childfunction = () => {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe(FILL_ME_IN);
  });

  it("should use lexical scoping to synthesise functions", () => {
    makeMysteryFunction = makerValue => {
      const newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      return newFunction;
    }

    const mysteryFunction3 = makeMysteryFunction(3);
    const mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(FILL_ME_IN);
  });

  it("should allow extra function arguments", () => {
    const returnFirstArg = firstArg => {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);

    const returnSecondArg = (firstArg, secondArg) => {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);

    const returnAllArgs = () => {
      let argsArray = [];
      for (let i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toBe(FILL_ME_IN);
  });

  it("should return undefined if no return value is specified", () => {
    const returnsUndefined = () => {

    }

    expect(returnsUndefined()).toBe(FILL_ME_IN);
  });

  it("should pass functions as values", () => {
    const appendRules = name => {
      return name + " rules!";
    };

    const appendDoubleRules = name => {
      return name + " totally rules!";
    };

    const praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);
  });

  it("can use a function that returns a function", () =>{
    const myFunc = () =>{
      let count = 0;
      return () => {
        return count + 1;
      };
    };

    expect(myFunc()()).toEqual(FILL_ME_IN);
    expect( typeof myFunc() ).toEqual(FILL_ME_IN);
  });

  it("can use functions and closures", () =>{
    const myFunc = () =>{
      let count = 0;
      return () => {
        count = count + 1;
        return count;
      };
    };

    const closure = myFunc();
    expect(closure()).toEqual(FILL_ME_IN);
    expect(closure()).toEqual(FILL_ME_IN);
  });
});
