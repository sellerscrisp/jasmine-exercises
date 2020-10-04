describe('Helpers test (with setup and tear-down)', function () {
    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
    });

    it('should accept the tip and total previous tip payments', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(40);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });

    it('should accept the bill and total previous bill payments', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(200);

        billAmtInput.value = 500;
        tipAmtInput.value = 100;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(700);
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        summaryTds[0, 1, 2] = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        summaryTds.innerHTML = '';
        allPayments = {};
        paymentId = 0;

        console.log('afterEach function completed');
    });
})