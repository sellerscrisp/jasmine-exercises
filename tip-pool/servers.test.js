describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server to allServers on submitServerInfo()', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update server table when updateServerTable() is called', function () {
    submitServerInfo();
    updateServerTable();

    let serverTable = document.querySelectorAll('#serverTable tbody tr td');
    expect(serverTable.length).toEqual(2);
    expect(serverTable[0].innerText).toEqual('Alice');
    expect(serverTable[1].innerText).toEqual('$0.00');
  });

  afterEach(function () {
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = '';
  });
});