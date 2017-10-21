<template>
    <nav>
      <router-link to="/home"><i class="iconfont">&#xe603;</i><span>首页</span></router-link>
      <router-link to="/list"><i class="iconfont">&#xe614;</i><span>列表</span></router-link>
      <router-link to="/add"><i class="iconfont">&#xe601;</i><span>添加</span></router-link>
    </nav>
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
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
nav{
  position: fixed;
  left:0;width:100%;bottom:0;
  border-top:1px solid #ccc;height: 50px;
  display: flex;background: #fff;
  a{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .router-link-active{
    color:orange;
  }
}
</style>
