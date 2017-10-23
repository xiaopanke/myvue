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
            }
        },
        computed: {},
        components: {
          MHeader
        }
    }
</script>
<style scoped lang="less">
.list{
  margin:10px 2%;
  li{
    display: flex;
    padding:20px 0;
    border-bottom: 1px solid #ccc;
    div{
      display: flex;
      flex-direction: column;
      margin-left: 15px;color: #999;
    }
    img{width: 120px;height: 100px}
  }
}
</style>
