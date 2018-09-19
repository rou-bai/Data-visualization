<template>
  <div class="left">
    <div class="left-top"></div>
    <div class="left-mid"></div>
    <div class="left-bottom"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.left {
  height: 100%;
  &-top {
    width: 50%;
    height: 33.3%;
    background-color: powderblue;
  }
  &-mid {
    width: 60%;
    height: 33.3%;
    background-color: palegoldenrod;
  }
  &-bottom {
    width: 80%;
    height: 33.3%;
    background-color: darkgoldenrod;
  }
}
</style>
