var gitalk = new Gitalk({
  clientID: '00b7d951cbba0567e3b7',
  clientSecret: '3fbec031599fde5ee314c81869eae7fa55d88c86',
  repo: 'depletedprism.github.io',
  owner: 'DepletedPrism',
  admin: ['DepletedPrism'],
  id: location.pathname,
  distractionFreeMode: false,
  language: 'zh-CN'
})

gitalk.render('gitalk-container')
