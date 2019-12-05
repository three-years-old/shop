<template>
  <div>
    <van-nav-bar title="首页" class="nav-title">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>
    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="3000">
        <van-swipe-item class="carousel-item" v-for="(item,i) of carouselItem" :key="i">
          <img v-lazy="item.imgSrc" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 热门商品 -->
    <div class="hot">
      <p class="hot-title">热门商品</p>
      <swiper :options="swiperOption" class="hot-swiper">
        <swiper-slide v-for="(item,i) of hotProduct" :key="i">
          <div class="hot-swiper-coutent">
            <img :src="item.img" alt />
            <div>{{item.name}}</div>
            <div>{{item.price}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
// 引入vue-awesome-swiper滑动
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      // 轮播图内容
      carouselItem: [
        {
          name: 1,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575566628484&di=2c7755cb2a22697efc4ccc78d24bc23f&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D236991697%2C603991298%26fm%3D214%26gp%3D0.jpg"
        },
        {
          name: 2,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575566712970&di=4bb6062b659bc5ecf1ad3443156ee4fa&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1005628429%2C3795382390%26fm%3D214%26gp%3D0.jpg"
        },
        {
          name: 3,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575567030770&di=813025952739f6446d02072ba7d51590&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1845581623%2C3046590086%26fm%3D214%26gp%3D0.jpg"
        }
      ],
      // 热门商品
      hotProduct: [
        {
          name: 1,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575566628484&di=2c7755cb2a22697efc4ccc78d24bc23f&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D236991697%2C603991298%26fm%3D214%26gp%3D0.jpg",
          price: "2900",
          company: "弃我而去温柔",
          city: "济宁市"
        },
        {
          name: 2,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575566628484&di=2c7755cb2a22697efc4ccc78d24bc23f&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D236991697%2C603991298%26fm%3D214%26gp%3D0.jpg",
          price: "29002",
          company: "弃我而去温柔2",
          city: "济宁市2"
        },
        {
          name: 3,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575566628484&di=2c7755cb2a22697efc4ccc78d24bc23f&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D236991697%2C603991298%26fm%3D214%26gp%3D0.jpg",
          price: "29003",
          company: "弃我而去温柔3",
          city: "济宁市3"
        },
        {
          name: 4,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575566628484&di=2c7755cb2a22697efc4ccc78d24bc23f&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D236991697%2C603991298%26fm%3D214%26gp%3D0.jpg",
          price: "29004",
          company: "弃我而去温柔4",
          city: "济宁市4"
        },
        {
          name: 5,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575566628484&di=2c7755cb2a22697efc4ccc78d24bc23f&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D236991697%2C603991298%26fm%3D214%26gp%3D0.jpg",
          price: "29005",
          company: "弃我而去温柔5",
          city: "济宁市5"
        },
        {
          name: 6,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575566628484&di=2c7755cb2a22697efc4ccc78d24bc23f&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D236991697%2C603991298%26fm%3D214%26gp%3D0.jpg",
          price: "29006",
          company: "弃我而去温柔6",
          city: "济宁市6"
        },
        {
          name: 7,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575566628484&di=2c7755cb2a22697efc4ccc78d24bc23f&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D236991697%2C603991298%26fm%3D214%26gp%3D0.jpg",
          price: "29007",
          company: "弃我而去温柔7",
          city: "济宁市7"
        }
      ],
      swiperOption: {
        slidesPerView: 3
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss">
.nav-title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.carousel {
  height: 3rem;
  margin-top: 1rem;
  &-item {
    img {
      width: 100%;
      height: 3rem;
    }
  }
}
.hot {
  &-title {
    width: 100&;
    height: 0.5rem;
    padding-left: 0.2rem;
    line-height: 0.5rem;
    box-sizing: border-box;
  }
  &-swiper {
    &-coutent {
      width: 2rem;
      text-align: center;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>
