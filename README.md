# hash-router
A router realized by observe location.hash
一个通过监视网页hash值来跳转主页下iframe插件

插件基于jquery

背景：
最近在维护一个腾讯比较老的网站，其中有几个页面用到了iframe
其中使用的跳转方式非常的反人类，体验非常差
因此尝试写一个简单的jquery插件来解决问题

目标效果：
点击类似\<a href="#production"\>这样的a标签更改主页的hash
插件通过onhashchange事件来监视hash的变化，将配置中相应的html路径赋值给iframe
一次来实现iframe的跳转，并且将对应的a标签高亮。

这样做的优点是在通过其他页面点到这个页面时也能根据已有哈希在iframe中显示预期的内容
