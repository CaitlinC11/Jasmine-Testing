describe("Loan Calculator Tests", function() {
  it('should calculate the monthly rate correctly using default values', function () {
  
    const values = { amount: 350000, years: 12, rate: 3.89 };
  
    const expectedMonthlyPayment = '3045.69'; 
    expect(calculateMonthlyPayment(values)).toEqual(expectedMonthlyPayment);
  });

  it("should return a result with 2 decimal places", function() {
    
    const values = { amount: 350000, years: 12, rate: 3.89 };
    const monthlyPayment = calculateMonthlyPayment(values);

    expect(monthlyPayment).toMatch(/^\d+\.\d{2}$/);

  });
});