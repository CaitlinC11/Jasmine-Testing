describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo(); 
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo() with empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update #serverTable on updateServerTable()', function () {
    submitServerInfo(); 
    let curTdList = document.querySelectorAll('#serverTable tbody tr td');
    expect(curTdList.length).toEqual(2); // Adjusted based on provided functionality, expecting 2 cells: name, tip average
    expect(curTdList[0].innerText).toEqual('Alice');
    expect(curTdList[1].innerText).toContain('$'); 
  });

  afterEach(function() {
    allServers = {};
    serverTbody.innerHTML = '';
    serverId = 0;
    serverNameInput.value = '';
  });
});
