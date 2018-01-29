<template>
  <div class="header">
   <!-- <ul>
      <li class="header-btn">
        <slot name="left"></slot>
      </li>
      <li class="header-tit">
        <p >{{tit}}</p>
      </li>
      <li class="header-btn">
        <slot name="right"></slot>
      </li>
    </ul>-->
    <!--C:\wamp\www\clone0124\miyaxm-web\src\modules\User\Login-->
    <ul>
      <li><i class="iconfont  icon-fangdajing"></i>奶瓶</li>
      <a href="http://localhost:8080/#/login"><i class="iconfont  icon-gengduo"></i></a>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'lh-header',
    props: {
      tit: {
        type: String,
        default: '宝贝成长计划'
      }
    }
  }
</script>
<style >
.header { position:fixed; top:0; left:0; width:100%; height:44px;line-height:44px;
  border-bottom:1px solid #ccc; background:skyblue}
.header  ul { display:flex;}
.header ul li{width:200px;height:34px;background:#fff;margin-top:5px;margin-left:100px;
text-align:center}
.header-btn { width:60px;  }
.header-tit { flex:1}
</style>
