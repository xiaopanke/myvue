<template>
    <div class="update">
        <header>
          <i @click="back">&lt;</i>修改
        </header>
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
          <button @click="update">修改图书</button>
        </li>
      </ul>
    </div>
</template>
<script>
  import axios from 'axios'
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
        created(){ //当页面加载时，获取路径中的id
          this.getBook()


        },
      activated(){
        this.getBook()
      },
        methods: {
          back(){
              this.$router.go(-1)
          },
          getBook(){
              axios.get('api/book?id='+this.$route.params.id).then((res)=>{
                  this.book=res.data  //将数据放到输入框里
              })
          },
          update(){
            axios.put('api/book?id='+this.book.id,this.book).then((res)=>{
              this.$router.push('/list')
            })
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
.update{position: absolute;top:0;left:0;bottom:0;right:0;background: #fff;z-index: 99999999;
  header{
    height:45px;background: #f1f1f1;align-items: center;display: flex;justify-content: center;
    i{font-style:normal;position: absolute;left:10px;font-size: 40px;}
  }
}
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
