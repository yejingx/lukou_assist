document.querySelector('#share-box button').addEventListener('click',
  function () {
    chrome.tabs.getSelected(function (tab) {
        chrome.tabs.create({
          'url':'http://www.lukou.com/post/commodity?url='+encodeURIComponent(tab.url),
          'selected':true
        });
    });
    window.close();
});
