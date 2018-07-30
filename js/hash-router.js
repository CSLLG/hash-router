var HashRouter = (function(){
  function HashRouter (option) {
    option = option || {};
    this.routers = option.routers;
    this.autoHeight = option.autoHeight;
    this.ele = viewBox = document.getElementById(option.ele);
    var _this = this, Robj = {};
    
    //遍历router配置，把数组转换成对象便于查找
    for(var i=0,len=_this.routers.length;i<len;i++){
      Robj['#'+_this.routers[i].path] = _this.routers[i].component;
    };
    this.Robj = Robj;

    if(this.autoHeight){
      this.calcHeight();
    };

    window.onhashchange = this.hashChanged.bind(this);
    this.hashChanged();
  };

  HashRouter.prototype.calcHeight = function (){
    var _this = this;
    this.ele.onload = function (){
      var ifraHeight = $(_this.ele).contents().find('body').height()+60;
      $(_this.ele).height(ifraHeight);
      console.log(ifraHeight);
    };
  };
  HashRouter.prototype.hashChanged = function (){
    if(location.hash&&this.Robj[location.hash] != undefined){
      var actiEle;
      $('.menu-link').each(function(index,item){
        item = $(item);
        if(item.attr('href')===location.hash){
          actiEle = item;
        };
      });
      $('.menu-link').removeClass('active');
      if(!actiEle.hasClass('active')){
        actiEle.addClass('active');
      };
      this.ele.src = this.Robj[location.hash];
    };
  }
  return HashRouter;
})();