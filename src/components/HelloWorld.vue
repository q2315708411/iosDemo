<template>
  <div class="hello">
    <button @click="buttonClick">点击</button>
    {{message}}
  </div>
</template>

<script>
  import {toJavaScript} from "../util/iosToJs.js"
  import iosFn from "../util/iosFn.js"
export default {
  name: 'HelloWorld',
  data () {
    return {
      message:'',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    //页面加载完成，向ios发生通知
    // this.buttonClick()
  },
  methods:{
    buttonClick(){//进行操作想ios发生同时
      toJavaScript()//调用ios方法
      setTimeout(()=>{
        this.message = iosFn.get('pp')//获取ios方法传值
        console.log(iosFn.get('pp'));
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
