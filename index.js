romd = window.romd || {cmd: []};
(function (c, cb) {
  var d = document, s = d.createElement('script'), x, t, q = [];
  s.type = 'text/javascript';
  s.async = 1;
  s.src = 'https://cdn-plus.roxot-panel.com/wrapper/js/dynamic-engine.js?v=s-856b78b2-8ed8-4739-b79a-159b35fca013';
  for (x in c) q.push(x + '=' + c[x].join(','));
  s.src += q.join('&');
  t = document.getElementsByTagName('head')[0];
  t.insertBefore(s, t.firstChild);
  if (cb) {
    cb.call();
  }
})({}, function () {
  romd.cmd.push(function () {
    romd.display([{"selector":".roxot-dynamic.afterarticle-rectangle","insertPosition":"instead","rerunTimeLimit":10,"infinityScroll":true,"placementId":"4ab726af-092f-4426-b090-a222ad484184"},{"selector":".roxot-dynamic.billboard-atf","insertPosition":"instead","rerunTimeLimit":10,"infinityScroll":true,"placementId":"21beb4a6-5304-4e01-aab2-a8551e822aa3"},{"selector":".roxot-dynamic.side-rectangle-stick-2","insertPosition":"instead","rerunTimeLimit":10,"infinityScroll":true,"placementId":"f9a5d016-4f25-4e06-8410-04e72569f43d"},{"selector":".roxot-dynamic.mobile-video-incontent","insertPosition":"instead","rerunTimeLimit":10,"infinityScroll":true,"placementId":"fa9ce3cb-09d7-4e29-ac23-ff580944721d"},{"selector":".roxot-dynamic.mobile-incontent","insertPosition":"instead","rerunTimeLimit":10,"infinityScroll":true,"placementId":"267eac83-660b-4cae-bea7-e5080a68139a"},{"selector":".roxot-dynamic.afterarticle-rectangle","insertPosition":"instead","rerunTimeLimit":10,"infinityScroll":true,"placementId":"4ab726af-092f-4426-b090-a222ad484184"},{"selector":".roxot-dynamic.main-rectangle","insertPosition":"instead","rerunTimeLimit":10,"infinityScroll":true,"placementId":"8215b8a1-3f7a-46c3-9248-0ec4d82cfdb5"},{"selector":".roxot-dynamic.side-rectangle-stick","insertPosition":"instead","rerunTimeLimit":10,"infinityScroll":true,"placementId":"253da063-6a8c-4d5c-a766-b2c205f0d47e"},{"selector":".adv.roxot-dynamic.side-rectangle-stick","insertPosition":"instead","rerunTimeLimit":10,"infinityScroll":true,"placementId":"253da063-6a8c-4d5c-a766-b2c205f0d47e"},{"selector":".roxot-dynamic.inpage-rectangle","insertPosition":"instead","rerunTimeLimit":10,"infinityScroll":true,"placementId":"11851886-2bfb-41f2-b962-95708878e049"},{"selector":".roxot-dynamic.right-rectangle-stick","insertPosition":"instead","rerunTimeLimit":10,"infinityScroll":true,"placementId":"7430245f-3d34-483a-802e-6ac5574c6c4a"}]);
  });
});
