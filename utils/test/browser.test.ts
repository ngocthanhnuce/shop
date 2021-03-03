const { Browser } = require("./../index");

test("browser simple 1", () => {
  const browser = new Browser();

  const result = {
      prevStack: [],
      nextStack: [],
  }
  expect(result).toEqual(browser.get());
});

test("browser simple 2", () => {
    const browser = new Browser();
    browser.add(1);
    const result = {
        nextStack: [],
        prevStack: [1],
    }
    expect(result).toEqual(browser.get());
  });
  
test("browser simple 3", () => {
    const browser = new Browser();
    browser.add(1);
    browser.add(2);
    browser.add(3);
    browser.add(4);
    
    const result = {
        nextStack: [],
        prevStack: [1,2,3,4],
    }
    expect(result).toEqual(browser.get());
  });
    
test("browser simple 3", () => {
    const browser = new Browser();
    browser.add(1);
    browser.add(2);
    browser.add(3);
    browser.add(4);
    browser.back();
    const result = {
        nextStack: [4],
        prevStack: [1,2,3],
    }
    expect(result).toEqual(browser.get());
  });
      
test("browser simple 4", () => {
    const browser = new Browser();
    browser.add(1);
    browser.add(2);
    browser.add(3);
    browser.add(4);
    browser.back();
    browser.back();
    browser.add(5);

    const result = {
        nextStack: [],
        prevStack: [1,2,5],
    }
    expect(result).toEqual(browser.get());
  });
  
  test("browser simple 5", () => {
    const browser = new Browser();
    browser.add(1);
    browser.add(2);
    browser.add(3);
    browser.add(4);
    browser.back();
    browser.next();
    const result = {
        nextStack: [],
        prevStack: [1,2,3,4],
    }
    expect(result).toEqual(browser.get());
  });

  test("browser simple 6", () => {
    const browser = new Browser();
    browser.add(1);
    browser.add(2);
    browser.add(3);
    browser.add(4);
    browser.back();
    browser.next();
    browser.add(5);
    browser.next();
    const result = {
        nextStack: [],
        prevStack: [1,2,3,4,5],
    }
    expect(result).toEqual(browser.get());
  });

  test("browser simple 7", () => {
    const browser = new Browser();
    browser.add(1);
    browser.add(2);
    browser.add(3);
    browser.add(4);
    browser.back();
    browser.next();
    browser.add(5);
    browser.back();
    browser.back();
    browser.next();
    const result = {
        nextStack: [5],
        prevStack: [1,2,3,4],
    }
    expect(result).toEqual(browser.get());
  });
