describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic

      billAmtInput.value = 1000;
      tipAmtInput.value = 350;
      
    });
  
    it('should calculate total on sumPaymentTotal(type)', function () {
      submitPaymentInfo();
      expect(sumPaymentTotal('tipAmt')).toEqual(350);
    });
  
    it('should convert the bill and tip amount into a tip percent on calculateTipPercent()', function(){
      expect(calculateTipPercent(1000, 350)).toEqual(35);
    });

    it('should append a newly created td element from the value on appendTd(tr, value)', function(){
      let newTr = document.createElement('tr');
      newTr.id = 'test-id';
    
      appendTd(newTr, '$' + billAmtInput.value);
      paymentTbody.append(newTr);

      expect(document.querySelector('#test-id td').innerHTML).toEqual('$1000');

    });

    it('should append the delete button on appendDeleteBtn(tr, objRem)', function(){
      serverNameInput.value = 'Alice';
      submitPaymentInfo();
      submitServerInfo();
      expect(document.querySelectorAll('.deleteBtn').length).toBe(2);



    })

  
    afterEach(function() {
      // teardown logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      allPayments = {};
      paymentId = 0;
      serverId = 0;

      serverNameInput.value = '';
      allServers = {};
      serverTbody.innerHTML = '';

      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      summaryTds.innerHTML = '';


  
    });
  });
  