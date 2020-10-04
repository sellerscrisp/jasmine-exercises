describe('Helpers test (with setup and tear-down)', function () {
    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
    });

    it('should accept the tip and sum previous tip payments', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(40);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });

    it('should accept the bill and sum previous bill payments', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(200);

        billAmtInput.value = 500;
        tipAmtInput.value = 100;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(700);
    });

    it('should add current and previous tip percentages', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 40;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(60);
    });

    it('should calculate the tip percent on a single payment', function () {
        expect(calculateTipPercent(200, 15)).toEqual(8);
        expect(calculateTipPercent(250, 100)).toEqual(40);
    });

    it('should create a new td from value and append to the existing table', function () {
        let row = document.createElement('tr');
        appendTd(row, 'appended');
        //expect(row.children.length).not.toEqual(0); 
        expect(row.children.length).toEqual(1);
        expect(row.firstChild.innerText).toEqual('appended');
    });

    it('should create a td with X and append to the existing table', function () {
        let row = document.createElement('tr');
        appendDeleteBtn(row);
        expect(row.children.length).toEqual(1);
        expect(row.firstChild.innerText).toEqual('X');
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

        console.log('afterEach function completed');
    });
})