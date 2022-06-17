<template>
    <div id="slider">
        <transition-group tag="div" :name="transitionName" class="slides-group">
            <div v-if="show" :key="current" class="slide" :class="slides[current].className">
                <img class="product-img" :src="require(`../assets/${slides[current].className}.jpg`)">
            </div>
        </transition-group>
        <div class="butt btn-prev" aria-label="Previous slide" @click="slide(-1)">
            <img class="arrow-img" src="../assets/arrow-left.svg">
        </div>
        <div class="butt btn-next" aria-label="Next slide" @click="slide(1)">
            <img class="arrow-img" src="../assets/arrow-right.svg">
        </div>
    </div>
</template>

<script lang="ts">
export default{
    data(){
        return{
            current: 0 as number,
            direction: 1 as number,
            transitionName: "fade" as string,
            show: false as boolean,
            slides: [
            { className: "kayak" },
            { className: "soccerball" },
            { className: "stadium" },
            { className: "chessboard" }
            ] as any[]
        }
    },
    methods: {
        slide(dir:number) {
            this.direction = dir;
            dir === 1
                ? (this.transitionName= "slide-next")
                : (this.transitionName = "slide-prev");
            var len = this.slides.length;
            this.current = (this.current + dir % len + len) % len;
        },
        autoSlide(){
            setInterval(()=>{
                this.slide(1)
            },3000)
        }
    },
    mounted(){
        this.show = true
        this.autoSlide()
    }
}
</script>

<style scoped>
/* 輪播css */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}
.product-img{
    display: inline-block;
    width: 100vw;
    height: 94vh;
    max-height: 94vh;
}

.arrow-img{
    background-color: rgba(128, 128, 128, 0.6);
    border-radius: 30%;
}

#slider { 
  width: 100vw;
  height: 94vh;
  max-height: 94vh;
  position: relative;
}

.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.butt {
  z-index: 10;
  cursor: pointer;
  display: flex;
  justify-content:center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}
</style>