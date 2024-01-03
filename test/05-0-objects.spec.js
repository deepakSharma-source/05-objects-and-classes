describe("babyPrototype and createBaby Function", function () {
  it("should define an object named babyPrototype", function () {
    expect(babyPrototype).toBeDefined();
  });

  it("should correctly speak 'goo goo ga ga'", function () {
    expect(babyPrototype.speak()).toEqual("goo goo ga ga");
  });
});

describe("createBaby", function () {
  it("should create a baby with given name and age", function () {
    let babyWarfa = createBaby("Warfa", 1);
    expect(babyWarfa.name).toEqual("Warfa");
    expect(babyWarfa.age).toEqual(1);
  });
});

describe("makeBabyAndSpeakOne", function () {
  it("should create Warfa and call speak method", function () {
    const phrase = makeBabyAndSpeakOne();
    expect(phrase).toEqual("goo goo ga ga");
  });
});

describe("sayName Method on babyPrototype", function () {
  it("should have a sayName method on babyPrototype", function () {
    expect(babyPrototype.sayName).toBeDefined();
  });
  it("should return the correct name of the baby", function () {
    let babyWarfa = createBaby("Warfa", 1);
    expect(babyWarfa.sayName()).toEqual("My name is Warfa");
  });
});

describe("makeBabyAndSayNameOne", function () {
  it("should create baby Warfa with age 1 and return 'My name is Warfa'", function () {
    let resonse = makeBabyAndSayNameOne();
    expect(resonse).toEqual("My name is Warfa");
  });
});

describe("Baby Constructor", function () {
  it("should create a baby with given name and age", function () {
    let babyWarfa = new Baby("Warfa", 1);
    expect(babyWarfa.name).toEqual("Warfa");
    expect(babyWarfa.age).toEqual(1);
  });
});

describe("makeBabyAndSpeakTwo", function () {
  it("should create Warfa using Baby constructor and call speak method", function () {
    let phrase = makeBabyAndSpeakTwo();
    expect(phrase).toEqual("goo goo ga ga");
  });
});

describe("sayName Method on babyPrototype", function () {
  it("should have a sayName method on babyPrototype", function () {
    expect(Baby.prototype.sayName).toBeDefined();
  });
  it("should return the correct name of the baby", function () {
    let babyWarfa = new Baby("Warfa", 1);
    expect(babyWarfa.sayName()).toEqual("My name is Warfa");
  });
});

describe("makeBabyAndSayNameTwo", function () {
  it("should create Warfa using Baby constructor and call sayName method", function () {
    let resonse = makeBabyAndSayNameTwo();
    expect(resonse).toEqual("My name is Warfa");
  });
});

describe("BabyClass", function () {
  it("should create a baby with given name and age", function () {
    let babyWarfa = new BabyClass("Warfa", 1);
    expect(babyWarfa.name).toEqual("Warfa");
    expect(babyWarfa.age).toEqual(1);
  });

  it("should correctly speak 'goo goo ga ga'", function () {
    let babyWarfa = new BabyClass("Warfa", 1);
    expect(babyWarfa.speak()).toEqual("goo goo ga ga");
  });

  it("should return the correct name of the baby", function () {
    let babyWarfa = new BabyClass("Warfa", 1);
    expect(babyWarfa.sayName()).toEqual("My name is Warfa");
  });
});

describe("makeBabyClassAndSpeak", function () {
  it("should create Warfa using BabyClass and call speak method", function () {
    const response = makeBabyClassAndSpeak();
    expect(response).toEqual("goo goo ga ga");
  });
});

describe("makeBabyClassAndSayName", function () {
  it("should create Warfa using BabyClass and call sayName method", function () {
    const response = makeBabyClassAndSayName();
    expect(response).toEqual("My name is Warfa");
  });
});

describe("ToddlerClass", function () {
  it("should create a toddler with given name and age", function () {
    let toddlerTina = new ToddlerClass("Tina", 2);
    expect(toddlerTina.name).toEqual("Tina");
    expect(toddlerTina.age).toEqual(2);
  });

  it("should correctly speak with overridden speak method", function () {
    let toddlerTina = new ToddlerClass("Tina", 2);
    expect(toddlerTina.name).toEqual("Tina");
    expect(toddlerTina.age).toEqual(2);
    expect(toddlerTina.speak()).toEqual("I can talk now!");
  });

  it("should have a growUp method that increments age", function () {
    let toddlerTina = new ToddlerClass("Tina", 2);
    expect(toddlerTina.name).toEqual("Tina");
    expect(toddlerTina.age).toEqual(2);
    toddlerTina.growUp();
    expect(toddlerTina.age).toEqual(3);
  });
});

describe("makeToddlerClassAndSpeak", function () {
  it("should create Tina using ToddlerClass and call overridden speak method", function () {
    const response = makeToddlerClassAndSpeak();
    expect(response).toEqual("I can talk now!");
  });
});

describe("makeToddlerClassAndGrowUp", function () {
  it("should create Tina, call growUp method, and return updated age", function () {
    const ageAfterGrowUp = makeToddlerClassAndGrowUp();
    expect(ageAfterGrowUp).toEqual(3);
  });
});
