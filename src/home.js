export default {
  data() {
    return {
      isshow: true,
      shopcarisShow: false,
      rwdHeight: {
        height: "",
      },
      coffieList: [
        {
          name: "Classic Coffee Espresso",
          price: "10",
          img: "menu-1.png",
          value: "",
        },
        { name: "Machiato", price: "19", img: "menu-2.png", value: "" },
        { name: "Flat White", price: "15", img: "menu-3.png", value: "" },
        { name: "Americano", price: "8", img: "menu-4.png", value: "" },
        {
          name: "Caramel Macchiato",
          price: "15",
          img: "menu-5.png",
          value: "",
        },
        { name: "Mocha", price: "18", img: "menu-6.png", value: "" },
      ],
      itemNum: 0,
      shopcar: [],
      fullWidth: 0,
      fullHeight: 0,
      sum: 0,
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
      } else {
        this.rwdHeight.height = "0px";
      }
    };
  },
  methods: {
    show() {
      this.isshow = !this.isshow;
      console.log(this.isshow);
      if (this.isshow === true) {
        this.rwdHeight.height = "200px";
      } else {
        this.rwdHeight.height = "0px";
      }
    },
    shopcarShow() {
      this.shopcarisShow = !this.shopcarisShow;
    },
    addtoshopcar(i) {
      // i為該商品的物件
      if (i.value > 99) {
        alert("商品數量最大為99");
      } else {
        this.shopcar.push({...i});
        //將物件解構後新增
      }
    },
    // 將商品新增至購物車
    delshopitem(index) {
      this.shopcar.splice(index, 1);
    },
    //刪除購物車項目
    shopcartotal() {
      let sum = 0;
      this.shopcar.map(function (value) {
        sum += value.price * value.value;
      });
      this.sum = sum;
      return this.sum;
    },
    //計算商品總價
  },
};
