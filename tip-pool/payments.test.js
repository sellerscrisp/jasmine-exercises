describe('Payments test (with setup and tear-down)', function () {
    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        summaryTds.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});