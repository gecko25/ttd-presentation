describe("Calculator", function(){
  it('should be able to divide 6 / 2', function(){
    var calc = Object.create(Calculator);
    expect(calc.divide(6,2)).toBe(3);
  });
});

describe("Calculator with BeforeEach", function(){
    var calc;
    beforeEach(function(){
       calc = Object.create(Calculator);
    });

    it('should be able to add 6 + 2', function(){
      expect(calc.add(6,2)).toBe(8);
    });

    describe("Addition", function(){
      it('should be able to add -1 + 1', function(){
        expect(calc.add(-1,1)).toBe(0);
      });

      it('should be able to add 10 + 1', function(){
        expect(calc.add(10,1)).toBe(11);
      });

    });

    describe("Division", function(){
      it('should be able to divide 6 / 2', function(){
        expect(calc.divide(6,2)).toBe(3);
      });

      it('should be able to divide -10 / 2', function(){
        expect(calc.divide(-10,2)).toBe(-5);
      });
    });
});
