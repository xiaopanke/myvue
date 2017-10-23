<template>
    <div class="page">
      <MHeader title="添加"></MHeader>
      <div class="scroll-content">
          <ul class="form-list">
            <li>
              <label for="bookName">书名</label>
              <input type="text" id="bookName" placeholder="请输入书名" v-model="book.bookName">
            </li>
            <li>
              <label for="bookCover">书的封面地址</label>
              <input type="text" id="bookCover" placeholder="请输入书的封面地址"  v-model="book.bookCover">
            </li>
            <li>
              <label for="bookInfo">书的详细信息</label>
              <input type="text" id="bookInfo" placeholder="请输入书的详细信息"  v-model="book.bookInfo">
            </li>
            <li>
              <button @click="add">添加图书</button>
            </li>
          </ul>
      </div>
    </div>
</template>
<script>
  import MHeader from '../components/Header.vue'
  import axios  from 'axios'
    export default{
        data(){
            return {
                book: {
                    bookName:'',
                    bookCover:'',
                    bookInfo:''
                }
            }
        },
        created(){

        },
        methods: {
            add(){
              axios.post('/api/book',this.book).then((res)=>{
                  this.$router.push('/list')
                this.book={}
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
.form-list{
  padding:10px 30px;
  li{display: flex;height: 70px; flex-direction: column;
    input{
      margin-top: 5px;
      box-shadow: none;
      border:1px solid #666;
      height:35px; padding-left:20px;
    }
  }
  button{ margin-top: 10px; height: 40px;}

}
</style>
