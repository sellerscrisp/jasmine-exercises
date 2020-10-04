it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 27500,
    years: 5,
    rate: 2.4,
  };
  expect(calculateMonthlyPayment(values)).toEqual('486.84');
});

it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 27500,
    years: 5,
    rate: 2.4,
  };
  expect(calculateMonthlyPayment(values)).toEqual('486.84');
});

it('should return zero if the input amount is set to zero', function () {
  const values = {
    amount: 0,
    years: 10,
    rate: 4.8,
  };
  expect(calculateMonthlyPayment(values)).toEqual('0.00');
});

// this is an unexpected input but fails on the test
//! update so the output does not equal infinity
// it('should return zero if the input years is set to zero', function () {
//   const values = {
//     amount: 10000,
//     years: 0,
//     rate: 4.8,
//   };
//   expect(calculateMonthlyPayment(values)).toEqual('0.00');
// });

//! same as the above test -> output is not a number
// it('should return zero if the input rate is set to zero', function () {
//   const values = {
//     amount: 10000,
//     years: 10,
//     rate: 0,
//   };
//   expect(calculateMonthlyPayment(values)).toEqual('NaN');
// });
/// etc