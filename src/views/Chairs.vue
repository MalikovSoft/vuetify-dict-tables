<template>
  <v-card id="Chairs">
    <v-card-title>
      <span class="text--secondary">Справочник кафедр</span>
      <v-spacer></v-spacer>
      <v-btn small dark color="green accent-4">
        <v-icon small class="mr-2">{{ icons.add }}</v-icon>Добавить
      </v-btn>
    </v-card-title>
    <v-card-subtitle>
      <v-text-field
        v-model="search"
        :append-icon="icons.search"
        label="Поиск/Фильтр"
        single-line
        hide-details
      ></v-text-field>
    </v-card-subtitle>
    <v-data-table dense :headers="headers" :items="chairs" :search="search">
      <template v-slot:item.operations="{item}">
        <v-btn small dark color="teal lighten-1">
          <v-icon>{{ icons.edit }}</v-icon>Редактировать
        </v-btn>
        <v-btn small dark color="red darken-1" class="ml-2" @click="deleteChair(item.id)">
          <v-icon>{{ icons.delete }}</v-icon>Удалить
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  mdiSearchWeb,
  mdiDatabasePlus,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
} from "@mdi/js";

export default {
  name: "Chairs",

  data: () => ({
    search: "",
    icons: {
      search: mdiSearchWeb,
      add: mdiDatabasePlus,
      edit: mdiSquareEditOutline,
      delete: mdiTrashCanOutline,
    },
    headers: [
      {
        text: "Наименование",
        align: "start",
        sortable: true,
        value: "title",
      },
      {
        text: "Операции",
        align: "right",
        sortable: "false",
        value: "operations",
      },
    ],
  }),

  computed: {
    ...mapGetters(["chairs"]),
  },

  methods: {
    ...mapActions(["fetchChairs", "deleteChair"]),
  },

  async mounted() {
    await this.fetchChairs();
  },
};
</script>

<style>
</style>