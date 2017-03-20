<template>
  <el-carousel :interval="4000" type="card" height="200px" width="1090px">
    <el-carousel-item v-for="item in 6">
      <img src="https://00.imgmini.eastday.com/mobile/20170310/20170310143338_30a339738ba0ced2a643c120e0216791_2.png" class="image">
    </el-carousel-item>
  </el-carousel>
</template>


<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>