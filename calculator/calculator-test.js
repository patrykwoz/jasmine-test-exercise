
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 100000, years: 5, rate: 0.25};
  expect(calculateMonthlyPayment(values)).toEqual('2935.13');
});


it("should return a result with 2 decimal places", function() {
  let values = {amount: 100000, years: 5, rate: 0.25};
  expect(calculateMonthlyPayment(values).toString().split('.').length).toBe(2);
});


