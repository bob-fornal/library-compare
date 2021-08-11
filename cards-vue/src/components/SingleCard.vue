
<template>
  <div class="card"
    :class="{ show: showFront }"
    v-on:click="showFront = !showFront">
    <div class="content">
      <img :src=getFront() class="front" />
      <img :src=getBack() class="back" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleCard',
  props: {
    back: String,
    front: String,
    path: String,
    show: Boolean
  },
  data () {
    return {
      disabled: true,
      showFront: this.show,

      getBack: () => this.path + this.back,
      getFront: () => this.path + this.front
    };
  },
  mounted () {
    this.disabled = this.back === this.front;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: inline-block;
  position: relative;
  margin: 0.5em;
}

.card:not(.disabled) {
  cursor: pointer;
}
  
.content {
  position: relative;
  width: 100px;
  height: 156px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);

  transition: transform 1s;
  transform-style: preserve-3d;
}

.card.show .content {
  transform: rotateY( 180deg ) ;
  transition: transform 0.5s;
}

.front,
.back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
  color: #03446A;
  text-align: center;
  font-size: 60px;
  border-radius: 5px;
  backface-visibility: hidden;
}

.front {
  background: #03446A;
  color: white;
  transform: rotateY( 180deg );
}
</style>
