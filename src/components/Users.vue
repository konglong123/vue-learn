<template>
    <div class="users">
        <h2>this is my person!</h2>
        <ul>
            <li v-for="user in users" >
                <h3>{{user.name}}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'users',
    data(){
        return {
           users:[]
        }
    },
    created(){
      this.$http.get("https://jsonplaceholder.typicode.com/users").then((data) => {
        this.users=data.body;
      })
  },
}
</script>

<style scoped>
ul{

}
</style>