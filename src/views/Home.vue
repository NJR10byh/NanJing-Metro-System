<template>
  <el-container class="home">
    <!-- 头部区域 -->
    <el-header style="height:80px">
      <div class="logo-wrap">
        <a
            href="http://www.njmetro.com.cn/njdtweb/home/go-dtmain.do"
            target="_blank"
        >
          <img src="../assets/logo.png" class="logo" alt />
        </a>
        <div class="toggle-button" @click="toggleCollapse">
          <i class="iconfont icon-weibiaoti15"></i>
        </div>
      </div>
      <div class="hd-btns">
        <a 
          class="badge-item" 
          href="http://www.njmetro.com.cn/njdtweb/portal/infoopen/article-list.do?columnId=all&pageCurrent=1&id=mm1" 
          target="_blank"
          @click="hidbadge">
          <el-badge
              :value="alertnum"
              :max="99"
              :hidden="hid"
          >
            <img src="@/assets/img/tongzhi.png" alt />
          </el-badge>
          <div class="text">信息公开</div>
        </a>
      </div>
      <div class="title">NanJing Metro System</div>
      <div class="time-box">
          <now-time></now-time>
          <div class="time-tips" ref="timeTips">{{ hoursTip }}</div>
      </div>
    </el-header>
    <!-- 主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '84px':'230px'">
        <!-- 一级菜单 -->
        <el-menu
          text-color="#282828"
          active-text-color="#fff"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="$route.path"
          class="leftMenu"
        >
          <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 文本-->
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/'+subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              class="subItem"
            >
              <span slot="title">{{subItem.authName}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import nowTime from "../components/Timer"; //时间
export default {
  name: "Home",
  components: { nowTime},
  data() {
    return {
      alertnum:100,
      hid:false,
      // 菜单导航
      hoursTip: "AM",
      menuList: [
        {
          id: 1,
          authName: "首页",
          children: [
            {
              id: 10,
              authName: "南京市地图",
              path: "location",
            }
          ]
        },
        {
          id: 2,
          authName: "全国地铁查询",
          children: [
            {
              id: 20,
              authName: "全国地铁线路图",
              path: "metroLines"
            }
          ]
        },
        {
          id: 3,
          authName: "南京地铁",
          children: [
            {
              id: 30,
              authName: "南京地铁线路图",
              path:"nanjingmetroline"
            },
            {
              id: 31,
              authName: "南京地铁路径规划",
              path:"nanjingmetrorouteplanning"
            }
          ]
        },
        {
          id: 4,
          authName: "迷宫",
          children: [
            {
              id: 40,
              authName: "迷宫游戏",
              path:"migong"
            },
          ]
        },
      ],
      // 导航图标
      iconsObj: {
        "1": "iconfont icon-tubiao-",
        "2": "iconfont icon-ditie",
        "3": "iconfont icon-changyonglogo18",
        "4": "iconfont icon-youxi"
      },
      isCollapse: false
    };
  },
  methods: {
    // 切换菜单的折叠展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },

    //控制badge在被点击后隐藏
    hidbadge(){
      this.hid=true;
    },
    getMycount: function() {
      let self = this;
      let date = new Date();
      if (date.getHours() >= 0 && date.getHours() < 12) {
        self.hoursTip = "AM";
      } else if (date.getHours() >= 12 && date.getHours() < 18) {
        self.hoursTip = "PM";
      } else {
        self.hoursTip = "PM";
      }
    },
  },
  created() {     //在计时器生命周期内执行
    this.getMycount();
  }
};
</script>
<style lang="scss">
.home {
  position: absolute;
  width: 100%;
  height:100%;
  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: #fff;
    box-shadow: 1px 2px 14px 0 rgba(0, 0, 0, 0.04);
    border-bottom: 2px solid #f6f6f6;
    padding: 0 40px 0 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #d63031;
    .logo-wrap {
      display: flex;
      align-items: center;
      .logo {
        max-width: 175px;
        max-height: 100%;
      }
      .toggle-button {
        text-align: center;
        cursor: pointer;
        margin-left: 25px;
        .iconfont {
          font-size: 22px;
          color: #9a9a9a;
          transition: 0.3s ease all;
        }
        &:hover {
          .iconfont {
            color: #c0392b;
          }
        }
      }
    }
    // .topcenter{
    //   display: flex;
    //   flex-direction: row;
    //   justify-content: flex-end;
    // }
    .title {
      font-size: 36px;
      font-weight: bold;
      margin-right: 180px;
    }
    .time-box {
      display: flex;
      .nowDate {
        font-size: 40px;
        font-weight: bold;
        color: #d63031;
      }
      .time-tips {
        color: #d63031;
        font-size: 14px;
        position: relative;
        top: 4px;
        margin-left: 5px;
      }
    }
    .hd-btns {
      display: flex;
      align-items: center;
      margin-right: 150px;

      .badge-item {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-left: 40px;

        .el-badge__content.is-fixed {
          background: #f96c6c;
          right: 10px;
        }

        .el-badge {
          height: 26px;
        }

        img {
          height: 26px;
        }

        .text {
          margin-top: 6px;
          font-size: 12px;
          font-weight: bold;
        }
        &:hover{
          .text{
            color: #c0392b;
          }
        }
      }
    }
  }

  .el-aside {
    background-color: #fff;
    padding: 20px 10px;
    .el-menu {
      border-right: none;

      .el-submenu {   //一级菜单样式
        .el-submenu__title {
          height: 40px;
          line-height: 40px;
          border-radius: 5px;
        }
        .el-submenu__title:hover{
          background-color: #FFDDDD;
        }
        .iconfont {
          margin-right: 14px;
          font-size: 26px;
        }
      }
    }
  }

  .el-main {
    background-color: #f6f6f6;
    padding: 0 10px;
  }

  .el-submenu .el-menu-item {
    height: 40px;
    line-height: 40px;
    min-width: auto;
    padding-left: 60px !important;

    &.subItem {
      background: #FEEFEF; //二级菜单栏背景颜色
      border-radius: 3px; 
      &:hover{
        background: #FFDDDD;
        border-radius: 3px;
      }
    }
    &.subItem.is-active {
      span {
        color: #e74c3c;
        position: relative;
        font-weight: bold;
        font-size: 16px;  //选中的项目字体加粗、放大
        //text-decoration: underline;  //在选中的项目下添加下划线
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -16px;
          margin-top: -3px;
          width: 6px;
          height: 6px;
          background: linear-gradient(-270deg, #e74c3c, #d63031);
          border-radius: 3px;
        }
      }
    }
  }
  .el-submenu__title .el-submenu__icon-arrow {
    transform: rotate(-90deg);
    color: #b8c1c5;
  }
  .el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
    transform: rotate(0deg);
  }
  .el-breadcrumb__inner.is-link {
    font-weight: normal;
    color: #666666;
    &:hover {
      color: #026650;
    }
  }
  .el-header .hd-btns .badge-item .el-badge__content.is-fixed {
    right: 15px;
  }
  .el-submenu {
    border-radius: 4px;
    margin-bottom: 20px;
    background: #fff;
    &.is-opened {
      .el-submenu__title {
        background: linear-gradient(-270deg, #e74c3c, #d63031);
        border-radius: 4px;
        color: #fff !important;
        .iconfont {
          color: #fff;
        }
        i {
          color: #fff;
        }
      }
    }
  }
}
.el-menu--vertical {
  .el-menu--popup {
    padding: 0;
  }
  .subItem {
     background: #FEEFEF; 
    padding-left: 30px !important;
  }
  .subItem.is-active {
    span {
      color: #e74c3c;
      position: relative;
      font-weight: bold;
      font-size: 16px;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -16px;
        margin-top: -3px;
        width: 6px;
        height: 6px;
        background: linear-gradient(-270deg, #e74c3c, #c0392b);
        border-radius: 3px;
      }
    }
  }
}
</style>
