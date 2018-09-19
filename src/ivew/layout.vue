<template>
  <div class="layout">
    <div class="nav"></div>
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
  .layout{
    background: #141d2c
  }
.nav {
  width: 100%;
  height: 40px;
  background-color: pink;
}
.container {
  display: flex;
  height: 100vh;
  &-left {
    flex: 3;
  }
  &-right {
    flex: 2;
  }
  &-flex {
    position: absolute;
    height: 80%;
    width: 40%;
    left: 36%;
  }
}
</style>
