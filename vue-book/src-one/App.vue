<template>
    <div class="page">
      <!--keep-alive有缓存的作用 transition-->
      <transition name="slider">
        <keep-alive>
          <!--加了定位，切换的时候就不跳啦-->
          <router-view style="position:absolute;width:100%;left:0;top:0;"></router-view>
        </keep-alive>
      </transition>
      <MNav></MNav>
    </div>
</template>
<script>
  import MNav from './components/Nav.vue'
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
        components: {
          MNav
        }
    }
</script>
<style scoped>
  /*进入前的位置*/
.slider-enter{
  transform: translateX(100%);
}
  /*激活时的动画*/
.slider-enter-active{
  transition:all .3s;
}
/*离开的目的地和动画*/
.slider-leave-active{
  transform: translateX(-100%);
  transition:all .3s;
}
</style>
