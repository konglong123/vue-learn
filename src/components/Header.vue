<template>
    <header>
        <nav class="site-header sticky-top py-1">
            <div class="container d-flex flex-column flex-md-row justify-content-between">
                <a class="py-2" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
                </a>
                <a class="py-2 d-none d-md-inline-block"><router-link :to="{name:'helloLink'}">HelloWorld</router-link></a>
                <a class="py-2 d-none d-md-inline-block"><router-link to="users">Users</router-link></a>
            </div>
         </nav>
    </header>
</template>

<script>
export default {
    name:'app-header',
    data(){
        return {
            title:"Vue.js Demo"
        }
    }
}
</script>

<style scoped>

</style>