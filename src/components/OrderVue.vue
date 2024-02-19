<script>
import store from "@/store"
import ADD_ORDER_REQUEST from "@/store/index"
import {mapGetters} from "vuex";

export default {
  data () {
    return {
      work_shift_id: null,
      table_id: null,
      number_of_person: null
    }
  },
  computed: {
    ...mapGetters['orders'],
    orders() {
      return this.orders
    }
  },
  methods: {
    addOrder() {
      const Order = {
        work_shift_id: this.work_shift_id,
        table_id: this.table_id,
        number_of_person: this.number_of_person
      }

      this.$store
          .dispatch('ADD_ORDER_REQUEST', Order)
          .then(() => this.$router.push("/"));
    }
  }
}
</script>

<template>
<form class="registerOrder" @submit.prevent="addOrder">
  <h2>Добавление заказа</h2>
  <label for="work_shift_id">ID смены</label>
  <input type="number" v-model="work_shift_id"/> <br>
  <label for="table_id">Столик</label>
  <input type="number" v-model="table_id"/> <br>
  <label for="number_of_person">Кол-во человек</label>
  <input type="number" min="1" v-model="number_of_person"/> <br>
  <button type="submit">Создать</button>
</form>

</template>

<style scoped>
.registerOrder {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 250px;
}

</style>