<template>
  <div>
    <img :src="img_url" alt="">
    <table>
      <tr>
        <td>{{p_name}}</td>
        <td>￥:{{price}}</td>
        <td>库存:{{total_number}}</td>
      </tr>
      <tr>

        <td><button @click="jian">-</button><input type="number" v-model="count"><button @click="jia">+</button></td>
        <td>选了{{count}}个</td>
        <td>总价{{price * count}}</td>
        <td><button @click="cun">存</button></td>
        <td><button @click="qu">取</button></td>
        <td>
          <!--<button @click="gouwuchelist">添加到购物车</button>-->
          <router-link :to="{path:'/goodsList'}">添加到购物车</router-link>
        </td>
      </tr>
      <tr><td><button v-on:click="remove()">移除购物车</button></td></tr>
    </table>
  </div>

</template>
<script>
  import { mapGetters,mapActions } from 'vuex'
  import {setCookie,getCookie} from '../../assets/js/cookie.js'
  export default {

    name: 'detail',
    data(){
      return {
        pid: this.$route.query.pid,
        loading: false,
        price:"",
        img_url:"",
        p_name:"",
        total_number:"",
        count:0,
        body:{}
        /*el:".con",
        data:model,*/
      }
    },

    created(){
      this.fetchData();
    },

    methods:{
      fetchData(){
        this.loading = true;

        //拿到查询字段，商品的id后进行http请求
        /* http://localhost:8000/api/product/getDetailData?pid=1 */
        var pid = this.pid;
        this.$http.get('/api/product/getDetailData?pid='+pid)
          .then(response => {
            console.log(response)//Response {url: "/api/product/getDetailData?pid=1", ok: true, status: 200, statusText: "OK", headers: Headers, …}
            console.log(response.body)//{pid: 1, p_name: "cat", img_url: "https://mall.s.maizuo.com/7f1e22a209cd8811b49ebb68031baa47.jpg", total_number: 100, price: "99.99", …}
            //response.body就是后端响应前端，发送回来的数据
            /* selectGood(){
                       this.$router.push({
                         path: 'detail',
                         query:{pid:this.body.pid}})
                     }
                     //相当于跳转到路由/detail?pid=this.detail.pid
                   }
                   */
            console.log(response.body.pid)
            console.log(response.body.img_url)
            console.log(response.body.p_name)
            this.body=response.body
            this.pid=response.body.pid
            this.price=response.body.price
            this.img_url=response.body.img_url
            this.p_name=response.body.p_name
            this.total_number=response.body.total_number
            /*this.selectedGood = response.body.pid;*/
          }, error => {
            console.log(error);
          })

        this.loading = false;
      },
      jia(){
        if(this.count>=this.total_number){
          this.count=this.total_number
        }else{
          this.count+=1;

        }
      },
//减
      jian(){
        if(this.count==1){
          this.count==1
        }else{
          this.count-=1;

        }
      },
      /*changeNumber(event){
        var obj=$(event.target);//因为有多行，每一行都有一个改变数值的input,
//所以$(event.target)指的是当前点击的这个input
        console.log(obj)
        console.log(x)//x指的是goodlist这个键 所对应的键值 是一个包含多个对象的数组
        this.count = parseInt(obj.val());
      },*/
      remove() {
        if(confirm("您确定要删除吗？")){
          /*body.splice(x, 1);*/
        }else{
          return false;
        }

      },
      cun(){
        setCookie(this.p_name,this.count,1000*60)
      },
      qu(){
        console.log(getCookie(this.p_name))
      }
    }

  /*,
    computed:{
      zongshu(){
        var count = 0;
        for(var i in this.body){
          count += parseInt(this.body[i].count);
        }
        return count;
      },
      zongjia(){
        var total = 0;
        for(var i in this.body){
          total += this.body[i].price * this.body[i].count;
        }
        return total;
      }
    },*/
/*setCookie('username',this.username,1000*60)*/
    //太棒了 你今天的成绩特别优秀 你已经拿到数据了  加油 努力  一个人又怎样 我一个人只要静下心来照样什么都可以做，太棒了，一定要养成自己解决问题的能力
    /*mounted(){
      axios.get("/loho").then(res=>{
        console.log(res)
      })
    }*/
  }
</script>
