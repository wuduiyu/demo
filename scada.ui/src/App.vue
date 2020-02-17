<template>
  <div id="app">
    <el-container>
      <el-aside width="asideWidth" height="100%">
       <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
       :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
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
        <el-header height="80px">
          <i class="el-icon-s-fold" @click="isCollapse = !isCollapse"></i>
          <h1>智慧燃气GPRS远传SCADA系统</h1>
        </el-header>
        <el-main></el-main>
      </el-container>
    </el-container>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view/> -->
  </div>
</template>
<script lang="ts" src='./App.ts'></script>
<style lang="stylus" src='./App.styl'></style>
