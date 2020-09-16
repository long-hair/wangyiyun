<template>
  <div class="page">
    <scroll class="content">
    <ul class="offical">
      <h1>官方榜</h1>

      <li class="ofl" v-for="item in offical">
        <img :src="item.coverImgUrl" alt="" />
          <span>{{item.updateFrequency}}</span>
          <div class="box">
          <div v-for="(i,index) in item.tracks"><i>{{index+1}} {{i.first }}</i> - <i>{{i.second}}</i> </div>

          </div>
        </li> 
      </li>
    </ul>
      <h1>全球榜</h1>

    <ul class="global">

      <li v-for="item in global">
        <img :src="item.coverImgUrl" alt="" />
          <span>{{item.updateFrequency}}</span>
        </li> 
      </li>
    </ul>

    </scroll>
  </div>
</template>

<script>
export default {
  props: {
    offical: Array,
    global: Array,
  },
  computed: {},
}
</script>

<style scoped lang='scss'>
.page{
  position: absolute;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  h1{
    font-size: 15px;
    line-height: 40px;
  }
}
  .content{
    height: 100%;
    li{
      width: 100%;
      height: 100px;
      border-bottom: 1px solid #ddd ;
      padding: 2px;
      position: relative;

      img{
      width: 100px;
      height: 100px;
      float: left;
     }
     span{
       position: absolute;
       bottom:5px;
       left: 15px;
       color: white;
       z-index:5;
     }
     .box{
       padding-top: 10px;
       div{
         margin-left: 20px;
         width: 100%;
         flex: 1;
         color: #999;
       }
       display: flex;
       flex-direction: column;
       flex-wrap: wrap;
       justify-content: space-around;
       height: 100%;
       
      }
    }
  }
  .global{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: max-content;
    &>li{
      // flex: 1;
      width: max-content;
      height:120px;
      img{
        display: block;
        width: 120px;
        height: 120px;
      }
    }
    
  }
</style>
