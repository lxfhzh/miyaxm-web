<!--
<template>
  <table>
    <tr>
      <td>{{p_name}}</td>
      <td>￥:{{price}}</td>
      <td>{{price * count}}</td>
    </tr>
  </table>
</template>
<script>
  import { mapGetters,mapActions } from 'vuex'
  export default {

    name: 'goodsList',
    data() {
      return {
        pid: this.$route.query.pid,
        price: "",
        p_name: "",
        count: 0,
        body: {}
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.loading = true;

        //拿到查询字段，商品的id后进行http请求
        /* http://localhost:8000/api/product/getDetailData?pid=1 */
        var pid = this.pid;
        this.$http.get('/api/product/getDetailData?pid=' + pid)
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
            this.body = response.body
            this.price = response.body.price
            this.p_name = response.body.p_name
            /*this.selectedGood = response.body.pid;*/
          }, error => {
            console.log(error);
          })

        this.loading = false;
      }
    }
  }

</script>
-->
<template>
  <div>购物车列表</div>
</template>
<script>
  export default {
    name:"goodsList",
    data(){
      return {
      }
    }
  }
</script>
