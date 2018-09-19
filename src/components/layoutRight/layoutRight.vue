<template>
  <div class="right">
    <div class="right-top" id="charts5">
    </div>
    <div class="right-mid" id="charts6"></div>
    <div class="right-bottom" id="charts7"></div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.drawLine()
    this.drawLine2()
    this.drawLine3()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('charts5'))
      myChart.setOption({
        grid: {
          x: '15%'
        },
        title: {
          text: '重点规则匹配检测',
          y: '15px',
          textStyle: {
            color: '#989faf',
            fontSize: 13
          }
        },
        legend: {
          icon: 'rect',
          itemWidth: 12,
          itemHeight: 8,
          itemGap: 20,
          right: '8%',
          top: '12%',
          textStyle: {
            fontSize: 12,
            color: '#6f7680'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            textStyle: {
              color: '#6f7680'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#0a121f'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#0a121f']
            }
          },
          data: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00', '04:00']
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 200,
          axisLine: {
            lineStyle: {
              color: '#0a121f'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#6f7680'
            }},
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#0a121f']
            }
          }
        },
        series: [{
          data: [0, 100, 60, 23, 20, 45, 1, 16, 190, 5, 99],
          type: 'line',
          name: '频繁交易',
          itemStyle: {
            normal: {
              color: '#577a9a',
              lineStyle: {
                color: '#577a9a'
              }
            }
          }
        },
          {
            data: [50, 12, 66, 42, 110, 8, 80, 95, 140, 44, 64],
            type: 'line',
            name: '异地交易',
            itemStyle: {
              normal: {
                color: '#e29488',
                lineStyle: {
                  color: '#e29488'
                }
              }
            }
          }]
      })

    },
    drawLine2 () {
      let myChart = this.$echarts.init(document.getElementById('charts6'))
      myChart.setOption ({
        grid: {
          x: '15%'
        },
        title: {
          text: '重点交易风险监测',
          y: '15px',
          textStyle: {
            color: '#989faf',
            fontSize: 13
          }
        },
        legend: {
          icon: 'rect',
          itemWidth: 12,
          itemHeight: 8,
          itemGap: 20,
          right: '8%',
          top: '12%',
          textStyle: {
            fontSize: 12,
            color: '#6f7680'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            textStyle: {
              color: '#6f7680'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#0a121f'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#0a121f']
            }
          },
          data: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00', '04:00']
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 200,
          axisLabel: {
            textStyle: {
              color: '#6f7680'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#0a121f'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#0a121f']
            }
          }
        },
        series: [{
          data: [60, 20, 130, 40, 88, 120, 44, 29, 83, 160, 20],
          type: 'line',
          smooth: true,
          name: '跨行转账',
          itemStyle: {
            normal: {
              color: '#539d7c',
              lineStyle: {
                color: '#539d7c'
              }
            }
          }
        },
          {
            data: [82, 22, 90, 32, 199, 102, 78, 39, 74, 29, 54],
            type: 'line',
            smooth: true,
            name: '网上支付',
            itemStyle: {
              normal: {
                color: '#577a9a',
                lineStyle: {
                  color: '#577a9a'
                }
              }
            }
          }]
      })
    },
    drawLine3 () {
      let myChart = this.$echarts.init(document.getElementById('charts7'))
      myChart.setOption({
        grid: {
          x: '15%',
        },
        title: {
          text: '渠道交易风险监测',
          y: '15px',
          textStyle: {
            color: '#989faf',
            fontSize: 13
          }
        },
        legend: {
          icon: 'rect',
          itemWidth: 10,
          itemHeight: 8,
          itemGap: 20,
          right: '10%',
          top: '11%',
          textStyle: {
            fontSize: 12,
            color: '#6f7680'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            textStyle: {
              color: '#6f7680'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#0a121f'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#0a121f']
            }
          },
          data: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00', '04:00']
        },
        yAxis: {
          type: 'value',
          min: 100,
          max: 500,
          axisLine: {
            lineStyle: {
              color: '#0a121f'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#6f7680'
            }},
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#0a121f']
            }
          }
        },
        series: [{
          data: [350, 440, 410, 333, 499, 380, 333, 467, 290, 410, 476],
          type: 'line',
          name: '总量',
          itemStyle: {
            normal: {
              color: '#577a9a',
              lineStyle: {
                color: '#577a9a'
              }
            }
          }
        },
          {
            data: [102, 100, 140, 231, 179, 133, 290, 160, 123, 140, 173],
            type: 'line',
            name: '手机银行',
            itemStyle: {
              normal: {
                color: '#e29488',
                lineStyle: {
                  color: '#e29488'
                }
              }
            }
          },
          {
            data: [200, 170, 233, 154, 112, 189, 132, 144, 199, 222, 130],
            type: 'line',
            name: '网上银行',
            itemStyle: {
              normal: {
                color: '#539d7c',
                lineStyle: {
                  color: '#539d7c'
                }
              }
            }
          },
          {
            data: [130, 140, 143, 189, 120, 192, 144, 112, 110, 188, 154],
            type: 'line',
            name: '微信银行',
            itemStyle: {
              normal: {
                color: '#66b1b6',
                lineStyle: {
                  color: '#66b1b6'
                }
              }
            }
          }]
      })

    }
  }

};
</script>

<style lang="less" scoped>
.right {
  height: 100%;
  &-top {
    width: 50%;
    height: 33.3%;
    margin-left: 50%;
  }
  &-mid {
    width: 60%;
    height: 33.3%;
    margin-left: 40%;
  }
  &-bottom {
    width: 80%;
    height: 33.3%;
    margin-left: 20%;
  }
}
</style>
