<template>
    <footer>
        {{copyright}}
    </footer>
</template>

<script>
export default {
    name:'app-footer',
    data(){
        return {
            copyright:"CopyRight 2017 Vue Demo"
        }
    }
}
</script>

<style scoped>
footer{
    background: red;
    padding:10px;
}
</style>