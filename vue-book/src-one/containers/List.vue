<template>
    <div class="page">
      <MHeader  title="列表"></MHeader>
      <div class="scroll-content">
          <ul class="list">
            <li v-for="book in books">
              <img :src="book.bookCover" alt="">
              <div>
                <h3>{{book.bookName}}</h3>
                <p>{{book.bookInfo}}</p>
                <div class="btn-list">
                  <button @click="remove(book.id)">删除</button>
                  <router-link tag="button" :to="{name:'update',params:{id:book.id}}" >修改</router-link>
                </div>

              </div>
            </li>
          </ul>
      </div>
    </div>
</template>
<script>
  import MHeader from '../components/Header.vue'
  import axios from 'axios' //axios 不支持use
    export default{
        data(){
            return {
                books: []
            }
        },
        created(){
            this.getBooks();
        },
        methods: {
            getBooks(){
              axios.get('/api/book').then((res)=>{
                  this.books=res.data
              })
            },
          remove(id){
              axios.delete('./api/book?id='+id).then((res)=>{
                this.books=this.books.filter(item=>item.id!=id)
              })
          }
        },
        computed: {},
        components: {
          MHeader
        },
        activated(){ //缓存后依然会走的函数
            this.getBooks()
        }
    }
</script>
<style scoped lang="less">
.list{
  margin:10px 2%;padding-bottom: 38px;
  li{
    display: flex;
    padding:20px 0;
    border-bottom: 1px solid #ccc;
    div{
      display: flex;
      flex-direction: column;
      margin-left: 15px;color: #999;
      .btn-list{
        flex-direction: row;
        height:40px;justify-content: space-around;align-items: center;
        button{ width:50px; height: 25px;}
      }
    }
    img{width: 120px;height: 100px}
  }
}
</style>
