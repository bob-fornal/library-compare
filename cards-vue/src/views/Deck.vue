
<template>
  <div class="deck-wrapper">
    <div class="deck-wrapper">
      <span class="stacked-deck">
        <SingleCard
          class="deck-card"
          v-on:triggerParent="nonClick"
          v-bind:back="back"
          v-bind:front="back"
          v-bind:path="path"
          v-bind:show="false"></SingleCard>
        <SingleCard
          v-on:triggerParent="onVisibleClickFn"
          v-bind:back="back"
          v-bind:front="topCardFront"
          v-bind:path="path"
          v-bind:show="topCardShow"></SingleCard>
      </span>  
    </div>
  </div>
</template>

<script>
import CardsService from '../core/services/cards.service.js';
import ShufflerService from '../core/services/shuffler.service.js';
import SingleCard from '../components/SingleCard.vue';

export default {
  name: 'Deck',
  components: {
    SingleCard
  },
  data () {
    return {
      cards: [],
      path: '',
      back: '',
      topCardIndex: 0,
      topCardFront: '',
      topCardShow: false,
      show: false,

      setTopCard: () => {
        this.topCardFront = this.cards[this.topCardIndex];
        this.topCardShow = false;
      },
      onVisibleClickFn: () => {
        setTimeout(() => {
          this.topCardIndex = (this.topCardIndex === this.cards.length - 1) ? 0 : this.topCardIndex + 1;
          this.setTopCard();
        }, 1000);
      },
      nonClick: () => {}
    };
  },
  async mounted () {
    const { cards, path, back } = await getConfig();
    
    this.cards = cards;
    this.path = path;
    this.back = back;

    this.setTopCard();
  }
};

const getConfig = async () => {
  let cards = [];
  const structure = await CardsService.getCardsConfig();

  const path = '/assets/images/';
  const back = structure.back + structure.format;

  structure.type.forEach(cardType => {
    structure.descriptor.forEach(desc => {
      cards.push(`${ cardType }-${ desc }${ structure.format }`);
    });
  });

  const shuffled = ShufflerService.shuffle(cards);

  return { cards: shuffled, path, back };
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.deck-wrapper {
  padding: 1em;
  position: fixed;
  top: 3.5em;
  left: 0;
  width: 100vw;
  height: calc(100vh - 3em);
  display: grid;
}
.stacked-deck {
  margin: auto;
  position: relative
}
.deck-card {
  position: absolute;
  top: -3px;
  left: -3px;
}
</style>
