describe("2. About Functions", () => {
  it("should declare functions", () => {
    const add = (a, b) => {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
  });//done

  it("should know internal variables override outer variables", () => {
    var message = "Outer";

    var getMessage = () => {
      return message;
    }

    var overrideMessage = () => {
      var message = "Inner";
      return message;
    }

    expect(getMessage()).toBe("Outer");
    expect(overrideMessage()).toBe("Inner");
    expect(message).toBe("Outer");
  }); //done

  it("should have lexical scoping", () => {
    const variable = "top-level";
    const parentfunction = () => {
      const variable = "local";
      const childfunction = () => {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe("local");
  });
  //done

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

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
  }); //done

  it("should allow extra function arguments", () => {
    const returnFirstArg = firstArg => {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe('first');

    const returnSecondArg = (firstArg, secondArg) => {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(undefined);

    const returnAllArgs = (...arguments) => {
      let argsArray = [];
      for (let i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toBe("first,second,third");
  });//done

  it("should return undefined if no return value is specified", () => {
    const returnsUndefined = () => {

    }

    expect(returnsUndefined()).toBe(undefined);
  }); //done

  it("should pass functions as values", () => {
    const appendRules = name => {
      return name + " rules!";
    };

    const appendDoubleRules = name => {
      return name + " totally rules!";
    };

    const praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe("John rules!");
    //done

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!");
  });//done

  it("can use a function that returns a function", () =>{
    const myFunc = () =>{
      let count = 0;
      return () => {
        return count + 1;
      };
    };

    expect(myFunc()()).toEqual(0);
    expect( typeof myFunc() ).toEqual(0+1);
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
