describe("TEST of toEqual", function() {
 
  

  
  it("Equal string Test", function() {
      var obj= new Stringaddition();
    var test='<h1>test for</h1>';
    expect(obj.stringAdd()).toEqual(test);
    
  });
 
})



describe("TEST for toThrowError", function() {
 var add;
   beforeEach(function() {
    add = new ThrowExceptionExample();   
    
  });

  it("exception",function(){  
  expect(function(){ add.exceptionThrow();}).toThrowError("I am an Error");
  });

})



describe("Test of toContain",function(){

  beforeEach(function(){
    contains=new contains();
  })
  it("is word contain ?",function(){
   
   
    expect(contains.cont()).toContain("roy");
  })
})




describe("Test of toBeTruthy",function(){
   beforeEach(function(){
    checking=new checking();
    })
   it("is it true",function(){
    expect(checking.check()).toBeTruthy();
   })
})




describe("Test of toBeFalsy",function(){
  beforeEach(function(){
    checkingFalse=new checkingFalse();
  })
  it("is it false",function(){
    expect(checkingFalse.checkFal()).toBeFalsy();
  })
})




describe("Test of toBeNull",function(){
  beforeEach(function(){
    nullChecking=new nullChecking();
  })
  it("is it null",function(){
    expect(nullChecking.nulls()).toBeNull();
  })
})




describe("Test of toBeUndefined",function(){
  beforeEach(function(){
    undefine= new undefine();
  })
  it("checking if undefined",function(){
    expect(undefine.und()).toBeUndefined();
  })
})


describe("Test for toBeDefined",function(){
  beforeEach(function(){
    define= new define();
  })
  it("checking if defined",function(){
    expect(define.defi()).toBeDefined();
  })
})


describe("Test for toBeGreaterThan",function(){
  beforeEach(function(){
    greaterThan = new greaterThan();
  })
  it("checking which one greater",function(){
    expect(greaterThan.bigger()).toBeGreaterThan(5);
  })
})



describe("Test of toBeLessThan",function(){
  beforeEach(function(){
    lesserThan = new lesserThan();
  })
  it("checking which one lesser",function(){
    expect(lesserThan.lesser()).toBeLessThan(10);
  })
})



describe("Test of toBe",function(){
  beforeEach(function(){
   being = new being();
  })
  it("checking which one greater",function(){
    expect(being.be()).toBe("5");
  })
})



describe("Test of toEqual",function(){
  beforeEach(function(){
   being1 = new being1();
  })
  it("checking which one greater",function(){
    expect(being1.be1()).toEqual("5");
  })
})


describe("Test of toMatch ",function(){
  beforeEach(function(){
   matching = new matching();
  })
  it("checking any match",function(){
   expect(matching.match()).toMatch(/\d{3}-\d{2}-\d{2}/);
  })
});

describe("Test of tobeclseto ",function(){
it("The 'toBeCloseTo' matcher is for precision math comparison", function() {
    var pi = 3.1465926,
      e = 3.142;

    expect(pi).toBeCloseTo(e, 3);
    expect(pi).toBeCloseTo(e, 0);
  });
});

describe("Exception handlimg",function(){



it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
    var foo = function() {
      return 1 + 2;
    };
    var bar = function() {
      return a + 1;
    };

    expect(foo).not.toThrow();
    expect(bar).toThrow();
  });

  it("The 'toThrowError' matcher is for testing a specific thrown exception", function() {
    var foo = function() {
      throw new TypeError("foo bar baz");
    };

    expect(foo).toThrowError("foo bar baz");
    expect(foo).toThrowError(/bar/);
    expect(foo).toThrowError(TypeError);
    expect(foo).toThrowError(TypeError, "foo bar baz");
  });

});

describe("A spec using beforeAll and afterAll", function() {
  var foo;

  beforeAll(function() {
    foo = 1;
    console.log("beforall parent");
  });

  afterAll(function() {
    foo = 0;
    console.log("afterall parent");
  });


beforeEach(function() {
    
    console.log("beforeEach");
  });
afterEach(function() {
    
    console.log("afterEach");
  });


  it("does not reset foo between specs", function() {
    
    console.log("Secondfunction");
  });
  it("does not reset foo between specs", function() {
  
    console.log("Thirdfunction");
  });
  it("does not reset foo between specs", function() {
    
    console.log("Foyrthfunction");
  });

  describe("internal describe", function() {
     
beforeAll(function() {
    
    console.log("beforall child");
  });

  afterAll(function() {
   
    console.log("afterall Child");
  });

     

        beforeEach(function() {
    
    console.log("beforeEach nested ");
  });
afterEach(function() {
    
    console.log("afterEach nested ");
  }); 

       it("sets the initial value of foo before specs run", function() {
          
          console.log("under Nested Describe 1");
        });


        it("sets the initial value of foo before specs run", function() {
          
          console.log("under Nested Describe 2");
        });

      });



  




});



xdescribe("A spec", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });
});


describe("checking matching by  custom function",function(){
  beforeEach(function(){
   customMatcher=new customMatcher();
   jasmine.addMatchers({
      toAddNumber :function(){
        return {
          compare:function(actual,expected){
            var x= actual;
            //var y= x.split(" ");
             for (var i=0;i < x.length;i++)
             {
              if (x[i]===expected) {
                return { pass: x[i] === expected }
                }
            }
          }           
        }
      }
    })
})

  it("checking any match",function(){
   expect(customMatcher.havingWord().split(" ")).toAddNumber("am");
  })
  })
  




describe("spying a method",function(){ 
  
  beforeEach(function(){
      spying =new spyingAFunction();   
     
      
  });  

  it ("childFunction is calling",function(){ 
      spyOn(spying,"childFunction").and.callThrough();  
      expect(spying.parentFunction()).toBe("Addition of 5+6=11")   
      expect(spying.childFunction).toHaveBeenCalled();     
   });

 })

