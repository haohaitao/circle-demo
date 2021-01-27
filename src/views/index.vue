<!--
 * @Description  : css圆环进度条
 * @Author       : haohaitao
 * @Date         : 2021-01-27 16:13:12
 * @LastEditTime : 2021-01-27 17:11:25
 * @LastEditors  : pacino
-->
<template>
  <div class="wrapper">
    <div class="item" v-for="(item, index) in dataList" :key="index">
      <cus-dash-board
        :size="circleW"
        :circleColor="item.circleColor"
        :percent="item.percent"
        :animation="true"
        :direction="180"
        :animationSpeed="animationSpeed"
      >
        <div slot="content" class="u-progress-content">
          <div class="u-progress-info">{{ item.percentStr }}</div>
          <div>{{ item.proportion }}</div>
        </div>
      </cus-dash-board>
      <div :style="titleStyle">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import CusDashBoard from "@/components/cus-dash-board";

export default {
  data() {
    return {
      circleW: 185, // 圆环大小
      animationSpeed: 50, // 圆环动画时长
      titleStyle:
        "text-align: center;color:#000;font-size:26px;padding-top:15px",
      dataList: [
        {
          circleColor: "#e31919",
          percent: 50,
          percentStr: 1,
          proportion: 10 + "人",
          title: "新客达成率"
        },
        {
          circleColor: "#cccc30",
          percent: 60,
          percentStr: 2,
          proportion: 20 + "人",
          title: "新客达成率"
        },
        {
          circleColor: "#2727bb",
          percent: 100,
          percentStr: 3,
          proportion: 30 + "人",
          title: "新客达成率"
        }
      ]
    };
  },
  components: {
    CusDashBoard
  },
  methods: {}
};
</script>

<style scoped>
.wrapper {
  margin: 100px auto auto;
  max-width: 900px;
  padding: 0 10px 10px 10px;
  display: flex;
  justify-content: space-around;
}
.wrapper > .u-progress-info {
  font-size: 28px;
}
.wrapper > .item {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
.u-progress-content {
  margin-top: -18px;
  color: #555555;
  font-size: 24px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.u-progress-info {
  font-size: 28px;
  margin-top: 4px;
}
</style>
