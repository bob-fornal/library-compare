
<template>
  <div class="card"
    :class="{ show: (disabled === false && showFront === true), disabled: (disabled) }"
    v-on:click=toggleShow()>
    <div class="content">
      <img :src="fullFront" class="front" />
      <img :src="fullBack" class="back" />
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
  watch: {
    path: function (value) {
      this.fullBack = value + this.back;
      this.fullFront = value + this.front;
    },
    back: function (value) {
      this.fullBack = this.path + value;
      this.disabled = this.back === this.front;
    },
    front: function (value) {
      this.fullFront = this.path + value;
      this.disabled = this.back === this.front;
    }
  },
  data () {
    return {
      disabled: true,
      showFront: this.show,
      fullBack: this.path + this.back,
      fullFront: this.path + this.front,

      toggleShow: () => {
        if (this.disabled === true) return;
        this.showFront = !this.showFront;
        if (this.showFront === false) {
          this.handleOnVisibleClick();
        }
      },
      handleOnVisibleClick: () => {
        this.$emit('triggerParent', '');
      }
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
  left: 0;
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
