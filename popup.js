document.querySelector('#share-box button').addEventListener('click',
  function () {
    chrome.tabs.query({active: true}, function (tabs) {
        chrome.tabs.create({
          'url':'http://www.lukou.com/post/commodity?url='+encodeURIComponent(tabs[0].url),
          'selected':true
        });
    });
});
