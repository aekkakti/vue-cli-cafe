<script>
import { mapGetters } from 'vuex';
import {openWorkshiftRequest, closeWorkshiftRequest, showOrdersRequest} from "@/utils/api";
export default {
  data() {
    return {
      start: "",
      end: ""
    };
  },
  computed: {
    ...mapGetters(['getWorkshifts']),
    workshifts() {
      return this.getWorkshifts;
    },
  },
  methods: {
    showOrdersRequest,
    closeWorkshiftRequest,
    openWorkshiftRequest,
    addWorkshift() {
      const Workshift = {
        start: this.start.replace('T', ' '),
        end: this.end.replace('T', ' ')
      }
      this.$store.dispatch('ADD_WORKSHIFT_REQUEST', Workshift)
  },
  },
  mounted() {
    this.$store.dispatch('WORKSHIFTS_REQUEST');
  },
};
</script>
<template>
  <h2>Все смены</h2><br>
  <h3>Добавить смену</h3>
  <form id="addWorkshift" @submit.prevent="addWorkshift" method="POST">
    <label for="start">Дата начала</label><br><br>
    <input type="datetime-local" required v-model="start"/><br><br>
    <label for="end">Дата окончания</label><br><br>
    <input type="datetime-local" required v-model="end"/><br><br>
    <button type="submit">Создать смену</button><br><br><br>
  </form>

  <div class="openedWorkshiftsInfo">
    <div class="card" v-for="workshift in workshifts">
      <div class="workshift">
        <h3>Номер {{ workshift.id }}</h3>
        <p>Начало смены: {{ workshift.start }}</p>
        <p>Окончание смены: {{ workshift.end }}</p>
        <button @click="openWorkshiftRequest(workshift.id)" v-if="workshift.active === 0">Открыть смену</button><br><br>
        <button @click="closeWorkshiftRequest(workshift.id)" v-if="workshift.active === 0">Закрыть смену</button><br><br>
        <button @click="showOrdersRequest(order.id)">Посмотреть смену</button>
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