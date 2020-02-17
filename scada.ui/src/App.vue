<template>
  <div id="app">
    <el-container>
      <el-aside width='asideWidth' height="100%">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse = "isCollapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
      </el-aside>
      <el-container>
        <el-page-header height='80px' @back="goBack" content="详情页面">
</el-page-header>
        <el-main>
       

        </el-main>
      </el-container>
    </el-container>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view/> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
@Component
export default class App extends Vue{
  isCollapse = false;
  asideWidth = "200px";
   goBack () { console.log('abc');}
}

</script>
<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.el-container 
  height 100%
  width 100%
  
.el-header {
  background-color: #185291;
  color: #333;
  text-align: center;
  line-height: 80px;
}

.el-aside {
  background-color: #185291;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) 
    width: 200px;
    // min-height: 400px;
    height 100%
  
</style>
