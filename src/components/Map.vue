<template>
  <fullscreen class="map-box" ref="fullscreen" @change="fullscreenChange">
    <baidu-map
        class="map"
        :center="{ lng: 118.803572, lat: 32.076157 }" 
        :zoom="12"
        :scroll-wheel-zoom="true"
        :map-click="false"
    >
    </baidu-map>
    <!-- 控件 -->
    <div :class="btnShow ? 'control-box' : 'control-box active'">
      <el-button icon="iconfont icon-shang-" @click="putUp"></el-button>
      <el-button icon="iconfont icon-icon-" @click="toggle"></el-button>
    </div>
  </fullscreen>
</template>
<script>
export default {
  name: "Workers",
  data() {
    return {
      center: { lng: 118.937284, lat: 32.119823 },
      zoom: 16,
      show: false,
      btnShow: true,
      i:0,
      timer:null,
      lushuicon:{
        url: require("../assets/img/dot.png"),
        size: { width: 40, height: 40}
      },
      fullscreen: false,
      // 悬浮框data
      isActive: true,
      isActive2: true,
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    infoWindowClose(marker) {
      marker.showFlag = false;
    },
    infoWindowOpen(marker) {
      marker.showFlag = true;
    },
    
    putUp() {
      this.btnShow = !this.btnShow;
    },
    addZoom(level) {
      this.zoom = level;
    },
    // 放大
    enlarge() {
      this.zoom++;
    },
    // 缩小
    narrow() {
      if (this.zoom > 2) {
        this.zoom--;
        console.log(this.zoom--);
      }
    },
    // 全屏方法
    isFullScreen() {
      return (
          document.fullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.msFullscreenEnabled ||
          false
      );
    },
    //全屏
    toggle() {
      this.$refs.fullscreen.toggle(); // recommended
      // this.fullscreen = !this.fullscreen // deprecated
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },

    //退出全屏
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    },
    // 还原
    reduction() {
      this.exitFullscreen();
    },
  },
  mounted() {
    window.addEventListener("keydown", this.getKeyDown);
  },
  created() {}
};
</script>
<style lang="scss">
.map-box {
  height: 100%;
  position: relative;
}
.BMap_bubble_title {
  font-size: 14px;
  color: #444444;
  font-weight: bold !important;
}
.BMap_pop .BMap_center,
.BMap_pop .BMap_bottom,
.BMap_pop .BMap_top {
  border: none !important;
}
.BMap_pop div:nth-child(1) {
  border-radius: 4px 0 0 0;
  border: none !important;
}
.BMap_pop div:nth-child(3) {
  border-radius: 0 4px 0 0;
}

.BMap_pop div:nth-child(5) {
  border-radius: 0 0 0 4px;
}
.BMap_pop div:nth-child(7) {
  border-radius: 0 0 4px 0;
  border: none !important;
}
.BMap_pop > div:nth-child(8) {
  background: url("../assets/img/bd_arrow.png") no-repeat;
  background-size: contain;
  position: relative;
  img {
    display: none !important;
  }
}
.BMap_Marker {
  margin-left: 16px !important;
  margin-top: 6px !important;
}
</style>
<style lang="scss" scoped>
.map {
  height: 100%;
  div {
    height: 100%;
  }
}
.baidu-map {
  height: 100%;
}
.info {
  margin-top: 5px;
  li {
    font-size: 12px;
    line-height: 22px;
    color: #999999;
    span {
      color: #282828;
    }
  }
}
.control-box {
  position: absolute;
  width: 30px;
  bottom: 30px;
  right: 30px;
  z-index: 10;
  height: auto !important;
  background: #fff;
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
  overflow: hidden;
  &.active {
    height: 30px !important;
    background-color: #fff;
  }
  .num {
    height: 20px;
    line-height: 20px;
  }
  .el-button {
    width: 100%;
    margin: 0;
    padding: 0;
    height: 30px;
    border: none;
    background-color: #ffffff;
    color:#d63031;

    .iconfont {
      font-size: 15px;
    }
    &:hover {
      background: #d63031;
      color: #fff;
    }
  }
}
</style>
