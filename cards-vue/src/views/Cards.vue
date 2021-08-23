
<template>
  <div class="card-wrapper">

    <div v-for="(type, index) in cards" :key="index">
      <span v-for="(card, cardIndex) in type" :key="cardIndex">
        <SingleCard
          v-on:triggerParent="triggerCardClick"
          v-bind:back="back"
          v-bind:front="card"
          v-bind:path="path"
          v-bind:show="false"></SingleCard>
      </span>
    </div>
  </div>
</template>

<script>
import CardsService from '@Core/services/cards.service.js';
import SingleCard from '@Components/SingleCard.vue';

export default {
  name: 'Cards',
  components: {
    SingleCard
  },
  data () {
    return {
      cards: [],
      path: '',
      back: '',

      triggerCardClick: () => {}
    }
  },
  async mounted () {
    const { cards, path, back } = await getConfig();
    
    this.cards = cards;
    this.path = path;
    this.back = back;
  }
};

const getConfig = async () => {
  let cards = [];
  const structure = await CardsService.getCardsConfig();

  const path = '/assets/images/';
  const back = structure.back + structure.format;

  structure.type.forEach(cardType => {
    let type = [];
    structure.descriptor.forEach(desc => {
      type.push(`${ cardType }-${ desc }${ structure.format }`);
    });
    cards.push(type);
  });

  return { cards, path, back };
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-wrapper {
  padding: 1em;
  position: fixed;
  top: 3.5em;
  left: 0;
  width: 100vw;
  height: calc(100vh - 3em);
  overflow-y: auto;
  text-align: left;
}
</style>
