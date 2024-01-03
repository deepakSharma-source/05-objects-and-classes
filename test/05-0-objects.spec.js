describe("(I) babyPrototype and createBaby Function", function () {
  it("should define an object named babyPrototype", function () {
    expect(babyPrototype).toBeDefined();
  });

  it("should correctly speak 'goo goo ga ga'", function () {
    expect(babyPrototype.speak()).toEqual("goo goo ga ga");
  });
});

describe("(I) createBaby Function", function () {
  it("should create a baby with given name and age", function () {
    let babyWarfa = createBaby("Warfa", 1);
    expect(babyWarfa.name).toEqual("Warfa");
    expect(babyWarfa.age).toEqual(1);
  });
});

describe("(I) makeBabyAndSpeakOne Function", function () {
  it("should create Warfa and call speak method", function () {
    const phrase = makeBabyAndSpeakOne();
    expect(phrase).toEqual("goo goo ga ga");
  });
});

describe("(I) sayName Method on babyPrototype", function () {
  it("should have a sayName method on babyPrototype", function () {
    expect(babyPrototype.sayName).toBeDefined();
  });
  it("should return the correct name of the baby", function () {
    let babyWarfa = createBaby("Warfa", 1);
    expect(babyWarfa.sayName()).toEqual("My name is Warfa");
  });
});

describe("(I) makeBabyAndSayNameOne", function () {
  it("should create baby Warfa with age 1 and return 'My name is Warfa'", function () {
    let resonse = makeBabyAndSayNameOne();
    expect(resonse).toEqual("My name is Warfa");
  });
});

describe("(II) Baby Constructor Function", function () {
  it("should create a baby with given name and age", function () {
    let babyWarfa = new Baby("Warfa", 1);
    expect(babyWarfa.name).toEqual("Warfa");
    expect(babyWarfa.age).toEqual(1);
  });
});

describe("(II) makeBabyAndSpeakTwo Function", function () {
  it("should create Warfa using Baby constructor and call speak method", function () {
    let phrase = makeBabyAndSpeakTwo();
    expect(phrase).toEqual("goo goo ga ga");
  });
});

describe("(II) sayName Method on babyPrototype", function () {
  it("should have a sayName method on babyPrototype", function () {
    expect(Baby.prototype.sayName).toBeDefined();
  });
  it("should return the correct name of the baby", function () {
    let babyWarfa = new Baby("Warfa", 1);
    expect(babyWarfa.sayName()).toEqual("My name is Warfa");
  });
});

describe("(II) makeBabyAndSayNameTwo Function", function () {
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

describe("makeBabyClassAndSpeak Function", function () {
  beforeEach(function () {
    spyOn(console, "log");
  });

  it("should create Warfa using BabyClass and call speak method", function () {
    const response = makeBabyClassAndSpeak();
    expect(response).toEqual("goo goo ga ga");
  });
});
