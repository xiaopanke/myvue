<template>
    <div class="page">
      <MHeader  title="列表"></MHeader>
      <div class="scroll-content">

      </div>
    </div>
</template>
<script>
  import MHeader from '../components/Header.vue'
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
          MHeader
        }
    }
</script>
<style scoped>

</style>
