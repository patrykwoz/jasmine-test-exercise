describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a server to the DOM', function(){
    submitServerInfo();
    const elDOM = document.querySelector('#serverTable tbody');

    expect(elDOM.children.length).toBe(1);

  })

  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    allServers = {};
    serverTbody.innerHTML = '';
    serverId = 0;

  });
});
