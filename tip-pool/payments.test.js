describe('Payments test (with setup and tear-down)', function () {
    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        tipPercent = 20;
    });

    it('should add a payment to an allPayments key when submitPaymentInfo() is called', function () {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('200');
        expect(allPayments['payment1'].tipAmt).toEqual('40');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('should not add a payment when submitPaymentInfo() is called if the value is undefined', function () {
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should create a payment when createCurPayment() is called', function () {
        createCurPayment();
        expect(createCurPayment()).toEqual(Object({
            billAmt: '200',
            tipAmt: '40',
            tipPercent: 20,
        }));
    });

    it('should not create a payment when createCurPayment() is called if the inputs are empty', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';

        expect(createCurPayment()).toEqual(undefined);
    });

    it('should update table and create a new row when appendPaymentTable() is called', function () {
        const payment = createCurPayment();
        allPayments['payment1'] = payment;
        appendPaymentTable(payment);

        let paymentTable = document.querySelectorAll('#paymentTable tbody tr td');

        expect(paymentTable.length).toEqual(3);
        expect(paymentTable[0].innerText).toEqual('$200');
        expect(paymentTable[1].innerText).toEqual('$40');
        expect(paymentTable[2].innerText).toEqual('20%');
    });

    it('should update the shift summary when updateSummary() is called', function () {
        submitPaymentInfo();
        updateSummary();

        expect(summaryTds.length).toEqual(3);
        expect(summaryTds[0].innerText).toEqual('$200');
        expect(summaryTds[1].innerText).toEqual('$40');
        expect(summaryTds[2].innerText).toEqual('20%');
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