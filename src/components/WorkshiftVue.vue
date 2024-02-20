<script>
import { mapGetters } from 'vuex';
import store from '@/store';
import {addOrderRequest, closeWorkshiftRequest, openWorkshiftRequest} from "@/utils/api";
export default {
  data() {
    return {};
  },
  methods: {addOrderRequest, closeWorkshiftRequest, openWorkshiftRequest},
  computed: {
    ...mapGetters(['getWorkshifts']),
    workshifts() {
      return this.getWorkshifts;
    },
  },
  mounted() {
    this.$store.dispatch('WORKSHIFTS_REQUEST', 'OPEN_WORKSHIFT_REQUEST', 'CLOSE_WORKSHIFT_REQUEST');
  },
};
</script>
<template>
  <h2>Все смены</h2><br>
  <div class="openedWorkshiftsInfo">
    <div class="card" v-for="workshift in workshifts">
      <div class="workshift">
        <h3>Номер {{ workshift.id }}</h3>
        <p>Начало смены: {{ workshift.start }}</p>
        <p>Окончание смены: {{ workshift.end }}</p>
        <button @click="openWorkshiftRequest(workshift.id)" v-if="workshift.active === 0">Открыть смену</button><br><br>
        <button @click="closeWorkshiftRequest(workshift.id)" v-if="workshift.active !== 0">Закрыть смену</button><br><br>
      </div>
    </div>

  </div>
</template>
<style scoped>

.openedWorkshiftsInfo{
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

button {
  width: 250px;
}

</style>