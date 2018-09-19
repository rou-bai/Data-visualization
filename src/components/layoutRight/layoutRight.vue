<template>
  <div class="right">
    <div class="right-top"></div>
    <div class="right-mid"></div>
    <div class="right-bottom"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.right {
  height: 100%;
  &-top {
    width: 50%;
    height: 33.3%;
    background-color: orange;
    margin-left: 50%;
  }
  &-mid {
    width: 60%;
    height: 33.3%;
    background-color: darkcyan;
    margin-left: 40%;
  }
  &-bottom {
    width: 80%;
    height: 33.3%;
    background-color: darkgray;
    margin-left: 20%;
  }
}
</style>
