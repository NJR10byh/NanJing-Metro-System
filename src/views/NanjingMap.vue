<template>
  <div class="pathQuery">
    <!-- 地图 -->
    <div class="map-wrap">
      <Map ref="MAP"></Map>
    </div>
  </div>
</template>

<script>
import Map from "../components/Map"; //地图
export default {
  name: "WorkersLocation",
  components: { Map },
  data() {
    return {
      formInline: {
        overall: "",
        region: "",
        person: "",
      },
    };
  },
  methods: {
    // 搜索
    onSubmit() {
      alert("该模块尚未开放，敬请期待！！");
    },
  } 
}
</script>
<style lang="scss">
.pathQuery {
  .header {
    display: flex;
    justify-content: space-between;
    .el-form-item {
      margin-right: 20px;
    }
    .el-form-item__content {
      line-height: 30px;
      .el-input__inner {
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        width: 100px;
      }
      .input-text {
        .el-input__inner {
          width: 220px;
        }
        .el-input__inner:focus{
          border: 1px solid #d63031;
        }
      }
      .el-input {
        display: flex;
      }
      .el-input__icon {
        line-height: 30px;
        font-size: 12px;
      }
      .cx-btn {
        height: 30px;
        line-height: 30px;
        padding: 0;
        margin-left: -8px;
        width: 70px;
        background: linear-gradient(-270deg, #e74c3c, #d63031);
        border-radius: 4px;
        border: none;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
}
.item-pop {
  .pop {
    padding: 20px 18px;
  }
  .hd-title {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    .text {
      font-size: 18px;
      display: flex;
      align-items: center;
      .total {
        padding-left: 24px;
        color: rgba(255, 255, 255, 0.6);
        font-size: 14px;
        display: flex;
        .t-num {
          color: #ff8a00;
          padding-left: 12px;
        }
      }
    }
  }
  .icon-guanbi {
    font-size: 12px;
    cursor: pointer;
  }

  .el-table {
    &::before {
      display: none;
    }

    background: transparent;
    th {
      border: none;
      color: #fff;
      background: rgba(250, 250, 250, 0.1);
      padding: 9px 14px;
    }
    tr {
      background: transparent;
      &:hover {
        td {
          background: rgba(250, 250, 250, 0.2);
        }
      }
      &:nth-child(2n) {
        background: rgba(250, 250, 250, 0.1);
      }

      td {
        padding: 9px 14px;
        color: #fff;
        border: none;

        &:nth-child(2) {
          color: #ff8a00;
        }
      }
    }
  }
}
.pop-box {
  position: absolute;
  top: 20px;
  bottom: 60px;
  right: 45px;
  z-index: 2;
  .item-pop {
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-end;
    &.active {
      height: 50%;
    }

    .pop {
      height: 100%;
      border-radius: 4px;
      width: 280px;
      background: rgba(0, 0, 0, 0.8);
    }
    .sec {
      height: calc(100% - 40px);
      overflow: auto;

      &::-webkit-scrollbar {
        width: 6px;
      }
      &::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 2em;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #50565b;
        border-radius: 2em;
      }
    }
    .btn {
      width: 110px;
      height: 40px;
      background: rgba(0, 0, 0, 0.8);
      box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.1);

      border-radius: 4px;
      font-size: 18px;
      font-weight: bold;
      color: #ffffff;
      border: none;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: rgba(0, 0, 0, 0.9);
      }
    }
  }
}
.list-wrap {
  height: calc(100% - 40px);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 2em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #50565b;
    border-radius: 2em;
  }
  .his-list {
    .h-item {
      .content {
        display: flex;
        justify-content: space-between;
        line-height: 24px;
      }
      .title {
        width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        color: #fff;
        position: relative;
        padding-left: 16px;

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          margin-top: -8px;
          left: 0;
          width: 14px;
          height: 16px;
          background: url("../assets/img/tongzhi-red.png") no-repeat;
          background-size: contain;
        }
      }
      .time {
        color: #fff;
        opacity: 0.4;
        font-weight: 500;
        font-size: 14px;
      }
      .det {
        font-size: 12px;
        font-weight: 500;
        color: #ffffff;
        line-height: 18px;
        opacity: 0.6;
        padding-left: 16px;
        margin-top: 10px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
  }
  .of-his-list {
    margin-top: 20px;
    .h-item {
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
      .title {
        &::before {
          width: 4px;
          height: 4px;
          background: #fff;
          border-radius: 50%;
          margin-top: -3px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.pathQuery {
  width: 100%;
  padding: 10px;
  background: #fff;
  height: calc(100% - 15px);
  margin-top: 10px;
}
.map-wrap {
  background: #ccc;
  height: calc(100%);
  position: relative;
  overflow: hidden;
}

</style>