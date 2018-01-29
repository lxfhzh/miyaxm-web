<!--
<template>
  <div>

      <mt-navbar v-model="selected" class="dlheader">
        <mt-tab-item id="1">登录</mt-tab-item>
        <mt-tab-item id="2">注册</mt-tab-item>
      </mt-navbar>

      &lt;!&ndash; tab-container &ndash;&gt;
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <input type="text" placeholder="用户名" v-model="usernameLg"><br/>
          <input type="password" placeholder="密码" v-model="passwordLg"><br/>
          <button @click="loginFn">登录</button>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <input type="text" placeholder="用户名"><br/>
          <input type="password" placeholder="密码"><br/>
          <input type="password" placeholder="确认密码"><br/>
          <button>注册</button>
        </mt-tab-container-item>
      </mt-tab-container>
    &lt;!&ndash;已从后端的user接口中将数据库中所有已存在的username和password都取过了&ndash;&gt;
  <ul v-for="ele in userdata" :index="ele.uid">
    <li>{{ele.username}}&#45;&#45;{{ele.password}}</li>
  </ul>

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
    name: 'login',
    data() {
      return {
        selected: '1',
        usernameLg:'',
        passwordLg:''
      }
    },
    computed:{
      //mapGetters工具函数会将store中的getter映射到局部计算属性中。//使用对象扩展操作符把getter混入到computed中
      //在home.js的getters中写了什么，mapGetters下面就写什么
      ...mapGetters("home",[
        /*"letters","list"*/
        "userdata"
      ])
    },
    methods:{
      //把store 里面的action 传递（绑定）给组件的 methods
      ...mapActions("home",[
        /*"getCityData"*/
        "getUserData"
      ]),
     loginFn(){
        console.log(this.usernameLg,this.passwordLg)

  }
    },
    mounted(){
      //发起 获取服务器数据的 action
      // this.$store.dispatch("getCityData")
      this.getUserData()
    }
  }
</script>
<style>
  .dlheader{height:30px;background:skyblue;color:#fff;}
  input{height:30px;margin:5px 0;}
</style>
-->
<!--登录模块
1.用户输入用户名及密码，调用接口
  1.1用户名未找到，提示用户“用户名不存在”
  1.2用户名找到，但密码不匹配，提示用户“密码输入错误”
  1.3用户名和密码都匹配，登录成功并跳转到主页，同时将用户名存为cookie
2.加载主页获取cookie
  2.1cookie不存在，跳转到登录页
  2.2cookie存在，显示用户名
  2.3点击注销，删除cookie并跳转到登录页
3.管理员登录
  3.1输入管理员用户名及密码，跳转到管理页
注册模块
1.用户输入用户名及密码，调用接口
  1.1注册成功直接跳转到登录页
cookie.js为公共方法，用于cookie的存储、获取及删除
home.vue为用户登录成功之后的主页
login.vue为登录注册页
main.vue为后台管理页-->


<template>
  <div>
    <div class="login-wrap" v-show="showLogin">
      <h3>登录</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="password" placeholder="请输入密码" v-model="password">
      <button v-on:click="login">登录</button>
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>

    <div class="register-wrap" v-show="showRegister">
      <h3>注册</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="newUsername">
      <input type="password" placeholder="请输入密码" v-model="newPassword">
      <button v-on:click="register">注册</button>
      <span v-on:click="ToLogin">已有账号？马上登录</span>
    </div>
  </div>
</template>

<style>
  .login-wrap{text-align:center;}
  input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
  p{color:red;}
  button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
  span{cursor:pointer;}
  span:hover{color:#41b883;}
</style>

<script>
  import {setCookie,getCookie} from '../../assets/js/cookie.js'

    export default{
      data(){
        return{
          showLogin: true,
          showRegister: false,
          showTishi: false,
          tishi: '',
          username: '',
          password: '',
          newUsername: '',
          newPassword: ''
        }
      },
      mounted(){
        /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
        if(getCookie('username')){
          this.$router.push('/home')
        }
      },
      methods:{
        login(){
          if(this.username == "" || this.password == ""){
            alert("请输入用户名或密码")
          }else{
            let data = {'username':this.username,'password':this.password}
            /*接口请求http://localhost/vueapi/index.php/Home/user/login*/
            this.$http.post('/api/users/user/login',data).then((res)=>{
              console.log(res)//Response {url: "http://localhost:8000/api/users/user/login", ok: false, status: 0, statusText: "", headers: Headers, …}
              /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
              /*if(res.data == -1){
                this.tishi = "该用户不存在"
                this.showTishi = true
              }else if(res.data == 0){
                this.tishi = "密码输入错误"
                this.showTishi = true
              }else if(res.data == 'admin'){
                /!*路由跳转this.$router.push*!/
                this.$router.push('/main')
              }*/
              console.log(res.body,typeof(res.body))//{status: "102", msg: "用户名或密码错误"} "object"
              var resbody=res.body
              if(resbody.status==102){
                this.tishi = "登录失败"
                this.showTishi = true
              }
              else{
                this.tishi = "登录成功"
                this.showTishi = true
                setCookie('username',this.username,1000*60)
                setTimeout(function(){
                  this.$router.push('/home')
                }.bind(this),1000)
              }
            })
          }
        },
        ToRegister(){
          this.showRegister = true
          this.showLogin = false
        },
        ToLogin(){
          this.showRegister = false
          this.showLogin = true
        },
        register(){
          if(this.newUsername == "" || this.newPassword == ""){
            alert("请输入用户名或密码")
          }else{
            let data = {'username':this.newUsername,'password':this.newPassword}
            this.$http.post('/api/users/user/register',data).then((res)=>{
              console.log(res)

              var resbody=res.body
              if(resbody.status==101){
                this.tishi = "注册失败"
                this.showTishi = true
              }
              else{
                this.tishi = "注册成功"
                this.showTishi = true
                this.username = ''
                this.password = ''
                setCookie('username',this.username,1000*60)
                /*注册成功之后再跳回登录页*/
                setTimeout(function(){
                  this.showRegister = false
                  this.showLogin = true
                  this.showTishi = false
                }.bind(this),1000)
              }


              /*if(res.data == "ok"){
                this.tishi = "注册成功"
                this.showTishi = true
                this.username = ''
                this.password = ''
                /!*注册成功之后再跳回登录页*!/
                setTimeout(function(){
                  this.showRegister = false
                  this.showLogin = true
                  this.showTishi = false
                }.bind(this),1000)
              }*/

            })
          }
        }
      }
    }

</script>
