export default {
  data() {
    return {
      isshow: true,
      rwdHeight: {
        height: "",
      },
      fullWidth: 0,
      fullHeight: 0,
    };
  },
  mounted() {
    const vm = this;
    vm.fullWidth = window.innerWidth;
    vm.fullHeight = window.innerHeight;
    window.onresize = () => {
      vm.fullWidth = window.innerWidth;
      vm.fullHeight = window.innerHeight;
      if (vm.fullWidth > 765) {
        this.rwdHeight.height = "";
      }else{
        this.rwdHeight.height = "200px";
      }
    };
  },
  methods: {
    show() {
      this.isshow = !this.isshow;
      if (this.isshow === true) {
        this.rwdHeight.height = "200px";
      } else {
        this.rwdHeight.height = "0px";
      }
    },
  },
};
