<template>
    <div class="page">
      <MHeader title="首页"></MHeader>
      <div class="scroll-content">
          <Swiper :swiperSlides="slides"></Swiper>
          <h3>最新上架</h3>
          <ul class="hotlist" v-if="books.length">
            <li v-for="(book,index) in books">
              <img :src="book.bookCover" alt="">
              <h4>{{book.bookName}}</h4>
              <span>{{book.bookInfo}}</span>
            </li>
          </ul>
        <Loading v-else></Loading>
      </div>

    </div>
</template>
<script>
  import MHeader from '../components/Header.vue'
  import Swiper from '../components/Swiper.vue'
  import axios from 'axios'
  import Loading from '../components/Loading'
    export default{
        data(){
            return {
                msg: 123,
              slides:[],
              books:[]
            }
        },
        created(){
          axios.get('/api/sliders').then((res)=>{
              console.log(res);
            this.slides=res.data
          }).catch((err)=>{
              console.log(err)
          })
          this.getHot()
        },
        methods: {
            getHot(){
              axios.get('/api/hot').then((res)=>{
                this.books=res.data
                console.log(res);
              }).catch((err)=>{
                console.log(err)
              })
            }
        },
        computed: {},
        components: {
          MHeader,
          Swiper,
          Loading
        },
      activated(){ //缓存后依然会走的函数
        this.getHot()
      }
    }
</script>
<style scoped lang="less">
.hotlist{
  display: flex;
  flex-wrap:wrap;padding-bottom: 50px;
  li{
    width:33.3%;
    h4{ line-height: 55px;
      color: #2d2d2d;font-weight: normal}
    img{width:100%}
    span{color:#2a2a2a; display: inline-block;width:100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}
  }
}
</style>
