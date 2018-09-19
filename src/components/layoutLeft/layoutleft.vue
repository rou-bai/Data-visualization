<template>
  <div class="left">
    <div class="left-top" id="rankmoney">
    </div>
    <div class="left-mid" id="rankregion"></div>
    <div class="left-bottom"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let money = echarts.init(document.getElementById("rankmoney"));
      let region = echarts.init(document.getElementById("rankregion"));
      let option = {
        title: {
          text: "风险交易占比",
          top: "20px",
          textStyle: {
            color: "#8990a0",
            fontSize: 14
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          top: "60px",
          textStyle: {
            color: "#8990a0",
            fontSize: 10
          },
          data: ["手机支付", "银行转账", "网银登录", "不常用地区登录"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "14",
                  fontWeight: "bold"
                }
              }
            },
            data: [
              { value: 335, name: "手机支付" },
              { value: 310, name: "银行转账" },
              { value: 234, name: "网银登录" },
              { value: 135, name: "不常用地区登录" }
            ]
          }
        ]
      };

      var seriesLabel = {
        normal: {
          show: true,
          textBorderColor: "#333",
          textBorderWidth: 2
        }
      };
      let option2 = {
        title: {
          text: "总体风险分布",
          textStyle: {
            color: "#8990a0",
            fontSize: 14
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["手机银行", "网上银行", "微信银行"],
          textStyle: {
            color: "#8990a0",
            fontSize: 10
          }
        },
        grid: {
          left: 100
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "value",
          name: "type"
        },
        yAxis: {
          type: "category",
          data: ["手机银行", "网上银行", "微信银行"]
        },
        series: [
          {
            name: "手机银行",
            type: "bar",
            data: [165, 170, 30],
            markPoint: {
              symbolSize: 1,
              symbolOffset: [0, "50%"],
              data: [
                { type: "max", name: "max days: " },
                { type: "min", name: "min days: " }
              ]
            }
          },
          {
            name: "网上银行",
            type: "bar",
            label: seriesLabel,
            data: [150, 105, 110]
          },
          {
            name: "微信银行",
            type: "bar",
            label: seriesLabel,
            data: [220, 82, 63]
          }
        ]
      };

      money.setOption(option);
      region.setOption(option2);
    }
  }
};
</script>

<style lang="less" scoped>
.left {
  height: 100%;
  &-top {
    width: 50%;
    height: 33.3%;
    margin-left: 40px;
    background-color: #131d2c;
  }
  &-mid {
    width: 60%;
    height: 33.3%;
    background-color: #131d2c;
    // background-color: palegoldenrod;
  }
  &-bottom {
    width: 80%;
    height: 33.3%;
    background-color: darkgoldenrod;
  }
}
</style>
