<template>
  <div class="layout">
    <div class="nav">
      <div class="nav-left">
        <span>2017年08年09日</span>
        <span>星期三</span>
      </div>
      <div class="nav-mid">
        监控数据威胁情报处置平台
      </div>
      <div class="nav-right">
        关于“监控数据威胁情报处置平台”的相关报道
      </div>
    </div>
    <div class="container">
      <div class="container-left">
        <layoutLeft></layoutLeft>
      </div>
      <div class="container-right">
        <layoutRight></layoutRight>
      </div>
      <div class="container-flex">
        <maps></maps>
      </div>
    </div>
  </div>
</template>

<script>
import layoutLeft from "@/components/layoutLeft/layoutLeft";
import layoutRight from "@/components/layoutRight/layoutRight";
import maps from "@/components/map/map";
export default {
  components: {
    layoutLeft,
    layoutRight,
    maps
  }
};
</script>

<style lang="less" scoped>
.nav {
  width: 100%;
  height: 40px;
  background-color: #141d2c;
  display: flex;
  color: #fff;
  font-size: 10px;
  &-left {
    width: 260px;
    margin-top: 20px;
    margin-left: 10px;
  }
  &-mid {
    flex: 1;
    color: #5dc3c6;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
  }
  &-right {
    width: 260px;
    margin-top: 20px;
    text-align: right;
  }
}
.container {
  display: flex;
  height: 100vh;
  &-left {
    flex: 3;
    background-color: palevioletred;
  }
  &-right {
    flex: 2;
    background-color: darkblue;
  }
  &-flex {
    position: absolute;
    height: 500px;
    width: 500px;
    // height: 80%;
    // width: 40%;
    background-color: salmon;
    left: 26%;
  }
}
</style>
