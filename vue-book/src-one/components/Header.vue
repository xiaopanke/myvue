<template>
    <div class="header">
        {{title}}
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg: 123
            }
        },
        created(){

        },
        props:['title'],
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped>
  .header{background: #e2e2e2;text-align: center;height: 45px; line-height: 45px; position: fixed;top:0;width:100%;left:0;z-index: 2;}
</style>
