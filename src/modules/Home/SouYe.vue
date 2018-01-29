<template>
  <!--<div>
    <lh-header tit="宝贝探索"></lh-header>
    <div class="footer"></div>-->
    <!--<lh-content>-->
      <!--<div class="index-wrap">-->
        <!--<mt-index-list>-->
          <!--<mt-index-section v-for="letter in letters" :index="letter">
            <div  v-for="city in list[letter]" :title="city.cityName">{{city.cityName}}</div>
          </mt-index-section>-->
          <!--<mt-index-section>-->

            <!--<div v-for="(item,index) in listData" >
              {{index}} - {{item.pid}}
            </div>-->

          <!--</mt-index-section>-->
        <!--</mt-index-list>-->
      <!--</div>&lt;!&ndash;&ndash;&gt;-->
    <!--</lh-content>-->
  <!--</div>-->

  <!--<ul id="app">
    <li v-for="(item, index) in listData">
      {{ index }} - {{ item.pid }}
    </li>
  </ul>-->
  <!--review.review_list.length > 0-->
  <div>
    <lh-header></lh-header>
    <lh-content>
      <!--备用导航栏-->
      <!--<mt-navbar v-model="selected">
        <mt-tab-item id="1">option A</mt-tab-item>
        <mt-tab-item id="2">option B</mt-tab-item>
        <mt-tab-item id="3">option C</mt-tab-item>
      </mt-navbar>
      &lt;!&ndash; tab-container &ndash;&gt;
      <mt-tab-container v-model="selected" class="mt-tab-container">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'content ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'content ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'content ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>-->
      <ul class="nav">
        <li><a href="#">首页</a></li>
        <li><a href="#">甄选</a></li>
        <li><a href="#">全球购</a></li>
        <li><a href="#">婴童</a></li>
        <li><a href="#">童装</a></li>
      </ul>
      <!--轮播图已完成,太棒了-->
      <!--<div class="swipe-wrapper">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <a href="#"><img :src="lbimg1" alt="" class="pic"></a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="#"><img :src="lbimg2" alt="" class="pic"></a>
          </mt-swipe-item>
        </mt-swipe>
      </div>-->

      <div class="swipe-wrapper">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(ele,index) in lunbodata" :key="index">
            <a href="#"><img :src="ele['lb_img']" alt="" class="pic"></a>
          </mt-swipe-item>
        </mt-swipe>
      </div>

        <!--<ul  v-if="listData.length>0" class="souyeul1">
          <li class="souyeli1" v-for="(item, index) in listData">
            <a href="http://localhost:8080/#/detail" class="souyea1"><img :src='item["img_url"]' alt="" class="souyeimg1"></a>
            <span>{{index}} - {{item["p_name"]}}</span>
          </li>
        </ul>-->

      <!--<router-link to="/club/itemList/2">-->
      <ul  v-if="listData.length>0" class="souyeul1">
        <li class="souyeli1" v-for="(item, index) in listData">
          <!--<a href="#" class="souyea1" @click="selectGood"><img :src='item["img_url"]' alt="" class="souyeimg1"></a>-->
          <router-link :to="{path:'/detail',query:{pid:item.pid}}"><img :src='item["img_url"]' alt="" class="souyeimg1"></router-link>
          <span>{{index}}-pid:{{item.pid}}-{{item["p_name"]}}</span>
        </li>
      </ul>
    </lh-content>
    <lh-footer></lh-footer>
  </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
  export default {
  /*export default {
  name: 'page-navbar',

  data() {
    return {
      selected: '1'
    };
  }
}; */
    name: 'souye',
    data() {
      return {
        selected: '1'
      };
    },
    computed:{
      //mapGetters工具函数会将store中的getter映射到局部计算属性中。//使用对象扩展操作符把getter混入到computed中
      //在home.js的getters中写了什么，mapGetters下面就写什么
      ...mapGetters("home",[
        /*"letters","list"*/
        "listData","lunbodata"
      ])
    },
    methods:{
      //把store 里面的action 传递（绑定）给组件的 methods
      ...mapActions("home",[
        /*"getCityData"*/
        "getListData",
        "getLunboData"
      ]),
      /*selectGood(){
        this.$router.push({
          path: 'detail',
          query:{pid:1}})
      }*/

      //相当于跳转到路由/detail?pid=this.detail.pid
    },
    mounted(){
      //发起 获取服务器数据的 action
      // this.$store.dispatch("getCityData")
      this.getListData()
      this.getLunboData()


    }

    //太棒了 你今天的成绩特别优秀 你已经拿到数据了  加油 努力  一个人又怎样 我一个人只要静下心来照样什么都可以做，太棒了，一定要养成自己解决问题的能力
    /*mounted(){
      axios.get("/loho").then(res=>{
        console.log(res)
      })
    }*/
  }
</script>
<style scoped>
  .souyeul1{width:100%;height:1000px;display:flex;flex-wrap:wrap;}
  .souyeli1{width:50%;display:flex;flex-direction:column;}
  .souyeimg1{width:100px;height:100px}
  .index-wrap { position:absolute; top:45px; bottom:0; width:100%; overflow:auto}
  .swipe-wrapper{height:200px}
  .pic{width:100%}
  .nav{width:100%;height:60px;}
  .nav li{float:left;width:20%;}
  .footer{position:fixed;bottom:0}
</style>
