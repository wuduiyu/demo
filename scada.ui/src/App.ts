import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {
    isCollapse = false;
  asideWidth = "200px";
  // tslint:disable-next-line: typedef
  goBack() {
    console.log("abc");
  }
}