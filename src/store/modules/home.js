/*

import axios from "axios"


/!*store/modules/home.js中的配置config,config是一个对象，对象中包括命名空间namespaced,
数据state,对数据进行获取/分拣/计算的getters,变更状态mutations,actions *!/

const config = {
  namespaced:true,//每个组件都有自己的命名空间
  state:{
    /!*cityData:{}*!/
    data:{},
    lb1data:{},
    lb2data:{},
    lbimg1:'',
    lbimg2:'',
    user1data:{},
    username1:'',
    password1:''
  },
  getters:{
    //Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，
    // getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    // 获取/分拣/计算/ 组件需要的数据（方便组件使用store里面的数据）
    /!*letters:state=>state.cityData.letters ||[],
    list:state=>state.cityData.list||{}*!/
    //res.data[0]["lb_img"]
    //res.data[1]["lb_img"]
    /!*state=>{
      //计算总页数
      getters:{
    listData:state=>state.listData,
    totalPage:state=>{
      //计算总页数
      return Math.ceil(state.count/state.pageSize)
    }
  }
    }
    lbimg:state=>{
    for(var i=0;i<user1data.length;i++){
    return user1data[i])
    *!/
    listData:state=>state.data.listData||[],
    lbimg1:state=>state.lb1data["lb_img"],
    lbimg2:state=>state.lb2data["lb_img"],
    username1:state=>state.user1data.username,
    password1:state=>state.user1data.password
  },
  mutations:{
    /!*setCityData(state,payload){
      //修改数据，组件会自动接收
      state.cityData = payload.cityData
    }*!/
    setListData(state,payload){
      state.data=payload.data
    },
    setLunboData(state,payload){
      state.lb1data=payload.lb1data
    },
    setLunbo2Data(state,payload){
      state.lb2data=payload.lb2data
    },
    setUserData(state,payload){
      state.user1data=payload.user1data
    }
  },
  actions:{
    /!*getCityData(context,payload){
      //context代表store的上下文 context也可以当作store的别名
      //获取服务器数据
      //现在需要自己模拟数据  关键是怎么模拟  怎么从数据库中取到数据
      axios("/loho/store/clist").then(res=>{
        //提交数据给mutation
        context.commit("setCityData",{cityData:res.data.result})

      })
    }*!/
    getListData(context,payload){
      axios("/api/product/getListData").then(res=>{
        console.log(res)
        console.log(res.data)//{}
        console.log(res.data.listData)//[]
        context.commit("setListData",{data:res.data})
      })
    },
    getLunboData(context,payload){
      axios("/api/product/getLunboData").then(res=>{
        console.log(res)
        console.log(res.data)//[{…}, {…}]
        console.log(res.data[0]["lb_img"])//http://img2.imgtn.bdimg.com/it/u=3040211383,2618296301&fm=27&gp=0.jpg
        console.log(res.data[1]["lb_img"])//http://img0.imgtn.bdimg.com/it/u=3792229673,4056410585&fm=27&gp=0.jpg
        context.commit("setLunboData",{lb1data:res.data[0]})
        context.commit("setLunbo2Data",{lb2data:res.data[1]})
    })
    },
    getUserData(context,payload){
      axios("/api/product/getUserData").then(res=>{
        console.log(res)
      console.log(res.data)//[{…}, {…}]
      console.log(res.data[0].username)//
      console.log(res.data[0].password)//
      context.commit("setUserData",{user1data:res.data[0]})
    })
    }

  }
}

export default config
*/

import axios from "axios"


/*store/modules/home.js中的配置config,config是一个对象，对象中包括命名空间namespaced,
数据state,对数据进行获取/分拣/计算的getters,变更状态mutations,actions */

const config = {
    namespaced:true,//每个组件都有自己的命名空间
    state:{
      /*cityData:{}*/
      data:{},
      lunbodata:[],
      userdata:[]
    },
    getters:{
      //Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，
      // getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
      // 获取/分拣/计算/ 组件需要的数据（方便组件使用store里面的数据）
      /*letters:state=>state.cityData.letters ||[],
      list:state=>state.cityData.list||{}*/
      //res.data[0]["lb_img"]
      //res.data[1]["lb_img"]
      /*state=>{
        //计算总页数
        getters:{
      listData:state=>state.listData,
      totalPage:state=>{
        //计算总页数
        return Math.ceil(state.count/state.pageSize)
      }
    }
      }
      lbimg:state=>{
      for(var i=0;i<user1data.length;i++){
      return user1data[i])
      */
      listData:state=>state.data.listData||[],
  pid:state=>state.data.listData.pid,
   lunbodata:state=>state.lunbodata||[],
  userdata:state=>state.userdata||[]
/*  username1:state=>state.user1data.username,
  password1:state=>state.user1data.password*/
},
mutations:{
  /*setCityData(state,payload){
    //修改数据，组件会自动接收
    state.cityData = payload.cityData
  }*/
  setListData(state,payload){
    state.data=payload.data
  },
  setLunboData(state,payload){
    state.lunbodata=payload.lunbodata
  },
  setUserData(state,payload){
    state.userdata=payload.userdata
  }
},
actions:{
  /*getCityData(context,payload){
    //context代表store的上下文 context也可以当作store的别名
    //获取服务器数据
    //现在需要自己模拟数据  关键是怎么模拟  怎么从数据库中取到数据
    axios("/loho/store/clist").then(res=>{
      //提交数据给mutation
      context.commit("setCityData",{cityData:res.data.result})

    })
  }*/
  getListData(context,payload){
    axios("/api/product/getListData").then(res=>{
      console.log(res)
    console.log(res.data)//{}
    console.log(res.data.listData)//[]
    context.commit("setListData",{data:res.data})
  })
  },
  getLunboData(context,payload){
    axios("/api/product/getLunboData").then(res=>{
      console.log(res)
    console.log(res.data)//[{…}, {…}]
    console.log(res.data[0]["lb_img"])//http://img2.imgtn.bdimg.com/it/u=3040211383,2618296301&fm=27&gp=0.jpg
    console.log(res.data[1]["lb_img"])//http://img0.imgtn.bdimg.com/it/u=3792229673,4056410585&fm=27&gp=0.jpg
    context.commit("setLunboData",{lunbodata:res.data})
  })
  },
  getUserData(context,payload){
    axios("/api/product/getUserData").then(res=>{
      console.log(res)
    console.log(res.data)//[{…}, {…}]
    console.log(res.data[0].username)//
    console.log(res.data[0].password)//
    context.commit("setUserData",{userdata:res.data})
  })
  }

}
}

export default config
