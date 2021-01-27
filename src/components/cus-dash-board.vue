<!--
 * @Description  : css圆环进度条
 * @Author       : haohaitao
 * @Date         : 2020-12-14 16:05:47
 * @LastEditTime : 2021-01-27 17:11:11
 * @LastEditors  : pacino
-->
<template>
  <div style="position: relative;">
    <div :style="cBox">
      <span v-if="!slot">{{ animationPercent }}%</span>
      <div :style="slotStyle" v-if="slot"><slot name="content"></slot></div>
      <div :style="faStyle">
        <div :style="leftBox">
          <div :style="leftStyle"></div>
        </div>
        <div :style="rightStyle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationPercent: 0
    };
  },
  mounted() {
    if (this.animation) {
      this.loadAnimation();
    } else {
      this.animationPercent = this.newPercent;
    }
  },
  methods: {
    //动画加载方法
    loadAnimation() {
      this.animationPercent = 0;
      const that = this;
      const i = setInterval(() => {
        if (that.animationPercent >= that.newPercent) {
          clearInterval(i);
        } else {
          that.animationPercent += 1;
        }
      }, that.animationSpeed);
    }
  },
  props: {
    //大小
    size: {
      type: Number,
      default: 150 // px
    },
    //进度条颜色
    circleColor: {
      type: String,
      default: "#86d06d"
    },
    //圆环背景色
    defaultColor: {
      type: String,
      default: "#DCDCDC"
    },
    //圆环宽度
    circleWidth: {
      type: Number,
      default: 14 // px
    },
    //百分比
    percent: {
      type: Number,
      default: 0
    },
    //动画效果
    animation: {
      type: Boolean,
      default: false
    },
    //帧动画间隔
    animationSpeed: {
      type: Number,
      default: 1
    },
    //动画方向
    clockwise: {
      type: Boolean,
      default: true
    },
    //自定义起点位置
    direction: {
      type: Number,
      default: 0
    }
  },
  computed: {
    newPercent() {
      return this.percent > 100 ? 100 : this.percent;
    },
    sizeAdapter() {
      return this.size % 2 === 0 ? this.size : this.size - 1;
    },
    slot() {
      if (this.$slots.content) {
        return true;
      }
      return false;
    },
    cBox() {
      const size = this.sizeAdapter;
      const style = `{
    		position: relative !important;
    		height:${size}px !important;
    		width:${size}px !important;
    		display:flex !important;
    		justify-content: center !important;
        align-items: center !important;
        }
    	`;
      return style;
    },
    slotStyle() {
      const size = this.sizeAdapter;
      const style = `
        position: relative !important;
    		border-radius:50% !important;
    		height:${size}px !important;
    		width:${size}px !important;
    		display:flex !important;
    		justify-content: center !important;
    		align-items: center !important;
    	`;
      return style;
    },
    faStyle() {
      const size = this.sizeAdapter;
      const circleWidth = this.circleWidth;
      const defaultColor = this.defaultColor;
      const direction = this.direction;
      const clockwise = this.clockwise;
      const style = `
    			 position:absolute !important;
    			 border-radius:50% !important;
    			 display:flex !important;
    			 justify-content: center !important;
    			 align-items: center !important;
    			 top:0 !important;
    			 left:0 !important;
    			 height:${size}px !important;
    			 width:${size}px !important;
    			 border:${circleWidth}px ${defaultColor} solid !important;
    			 transform:rotate(${direction}deg) rotateY(${
        clockwise ? 0 : 180
      }deg) !important;
    			`;
      return style;
    },
    leftBox() {
      const size = this.sizeAdapter;
      const circleWidth = this.circleWidth;
      const style = `
    	height:${circleWidth * 2 + size}px !important;
    	width:${circleWidth * 2 + size}px !important;
    	position:absolute !important;
    	top:-${circleWidth}px !important;
    	left:-${circleWidth}px !important;
    	opacity:1 !important;
    	clip:rect(0 ${(circleWidth * 2 + size) / 2}px ${circleWidth * 2 +
        size}px 0) !important;
    `;
      return style;
    },
    leftStyle() {
      const size = this.sizeAdapter;
      const circleColor = this.circleColor;
      const circleWidth = this.circleWidth;
      const percent = this.animation ? this.animationPercent : this.newPercent;
      const style = `
    	height:${size}px !important;
    	width:${size}px !important;
    	border:${circleWidth}px ${circleColor} solid !important;
    	border-radius:50% !important;
    	z-index:0 !important;
    	position:absolute !important;
    	top:0px !important;
    	left:0px !important;
    	transform:rotate(${
        percent > 50 ? 180 : (percent / 100) * 360
      }deg) !important;
    	clip:rect(0 ${circleWidth * 2 + size}px ${circleWidth * 2 + size}px ${size /
        2}px ) !important;
    	`;
      return style;
    },
    rightStyle() {
      const size = this.sizeAdapter;
      const circleColor = this.circleColor;
      const defaultColor = this.defaultColor;
      const circleWidth = this.circleWidth;
      const percent = this.animation ? this.animationPercent : this.newPercent;
      const style = `
    			 height:${size}px !important;
    			 width:${size}px !important;
    			 position:absolute;
    			 border:${circleWidth}px ${
        percent > 50 ? circleColor : defaultColor
      } solid !important;
    			 border-radius:50% !important;
    			 z-index:${percent > 50 ? 0 : 100} !important;
    			 position:absolute !important;
    			 top:-${circleWidth}px;
    			 left:-${circleWidth}px;
    			 transform:rotate(${
             percent > 50 ? (percent / 100) * 360 : 0
           }deg) !important;
    			 clip:rect(0 ${circleWidth * 2 + size}px ${circleWidth * 2 +
        size}px ${size / 2}px ) !important;
    			`;
      return style;
    }
  }
};
</script>
