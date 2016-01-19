var expect = chai.expect;
var assert = chai.assert;

describe("Asynctest", function(){
  it('one should equal one', function(done){
    setTimeout(function(){
      expect(1).to.equal(4);
      done();
    }, 1000);
  });
});


xdescribe("Calculator", function(){
  it('should be able to divide 6 / 2', function(){
    var calc = Object.create(Calculator);
    expect(calc.divide(6,2)).to.equal(7);
  });
});

xdescribe("Calculator with BeforeEach", function(){
    var calc;
    beforeEach(function(){
       calc = Object.create(Calculator);
    });

    it('test: 6 + 2 === 8', function(){
      assert(6 + 2 === 8 , "Assert: 6 + 2 === 8");
    });

    describe("Addition", function(){
      it('should be able to add -1 + 1', function(){
        expect(calc.add(-1,1)).to.equal(0);
      });

      it('should be able to add 10 + 1', function(){
        expect(calc.add(10,1)).to.equal(11);
      });
    });

    describe("Division", function(){
      it('should be able to divide 6 / 2', function(){
        expect(calc.divide(6,2)).to.equal(3);
      });

      it('should be able to divide -10 / 2', function(){
        expect(calc.divide(-10,2)).to.equal(-5);
      });
    });
});
