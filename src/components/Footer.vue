<template>
  <div class="footer">
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
    <ul class="footer">
      <li><i class="iconfont  icon-fangdajing"></i><span>首页</span></li>
      <li><i class="iconfont  icon-fangdajing"></i><span>分类</span></li>
      <li><i class="iconfont  icon-fangdajing"></i><span>蜜芽圈</span></li>
      <li><i class="iconfont  icon-fangdajing"></i><span>购物车</span></li>
      <li><i class="iconfont  icon-fangdajing"></i><span>我的</span></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'lh-footer',
    props: {
      tit: {
        type: String,
        default: '宝贝成长计划'
      }
    }
  }
</script>
<style scoped>
  .footer{width:100%;height:40px;position:fixed;bottom:0;left:0;display:flex;
  align-item:center;justify-content:space-around;background:skyblue;}
  .footer li{display:flex;flex-direction:column;align-item:center;justify-content:space-around;}
</style>
