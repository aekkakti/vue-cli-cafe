<script>
import { mapGetters } from 'vuex';
import store from '@/store';
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(['getWorkshifts']),
    workshifts() {
      return this.getWorkshifts;
    },
  },
  mounted() {
    this.$store.dispatch('WORKSHIFTS_REQUEST');
  },
};
</script>
<template>
  <h2>Смены</h2><br>
  <div class="workshiftsInfo">
    <div class="card" v-for="workshift in workshifts">
      <h3>Номер {{ workshift.id }}</h3>
      <p>Начало смены: {{ workshift.start }}</p>
      <p>Окончание смены: {{ workshift.end }}</p>
    </div>
  </div>
</template>
<style scoped>

.workshiftsInfo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 100px;
}
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  flex-direction: column;
  border: 2px solid black
}

</style>