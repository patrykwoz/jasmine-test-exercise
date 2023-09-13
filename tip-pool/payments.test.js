describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      serverNameInput.value = 'Alice';
      billAmtInput.value = 1000.00;
      tipAmtInput.value = 350.00;

    });
  
    it('should add a new payment to allPayments on submitPaymentInfo() ', function () {
      submitPaymentInfo();
      const serEarnings = serverTbody.querySelector('#Alice');

      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('1000');
      expect(allPayments['payment1'].tipAmt).toEqual('350');
      expect(allPayments['payment1'].tipPercent).toEqual(35);
    });

    it('should not add a new payment on submitPaymentInfo() with empty input', function () {
      billAmtInput.value = '';
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should payment update #paymentTable on appendPaymentTable()', function () {
      let curPayment = createCurPayment();
      allPayments['payment1'] = curPayment;
  
      appendPaymentTable(curPayment);
  
      let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
  
      expect(curTdList.length).toEqual(3);
      expect(curTdList[0].innerText).toEqual('$1000');
      expect(curTdList[1].innerText).toEqual('$350');
      expect(curTdList[2].innerText).toEqual('35%');
    });

    it('should create a new payment on createCurPayment()', function(){
      let newPayment = createCurPayment();
      expect(newPayment.billAmt).toEqual('1000');
      expect(newPayment.tipAmt).toEqual('350');
      expect(newPayment.tipPercent).toEqual(35);
    });

    it('update summaryTds on updateSummary()', function(){

      

    });


   

  
    afterEach(function() {
      // teardown logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      serverNameInput.value = '';
      allServers = {};
      serverTbody.innerHTML = '';

      allPayments = {};

      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      summaryTds.innerHTML = '';

  
    });
  });
  