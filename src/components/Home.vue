<template>
  <div id="app" class="container"> 
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Users from './Users'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'home',
  data(){
    return{
    }
  },
  components: {
    Users,
    "app-header":Header,
    "app-footer":Footer,
  },
  created(){
    // fetch("apis/loginVerify.do",{
    //   method:"post",
    //   body:"hello",
    //   headers:{
    //     token:"231311"
    //   },
    //   param:{
    //     username:"kong",
    //     password:"long"
    //   }
    // }).then(result=>{
    //   return result.json();
    // }).then(data=>{
    //   alert(data.role);
    // })

//注意get与post对应后台接收方式的不同
// this.$axios.get("/apis/loginVerify.do",{params:{
//       username:'kong',
//       password:'long'
//     }}).then(result=>{
//       alert(result.data.number);
//     })

    var params = new URLSearchParams();
    params.append('username', "kong");
    params.append('password',"long");
    this.$axios.post("/apis/loginVerify.do",params).then(result=>{
    })
  }
  
}
</script>

<style scoped>

</style>
