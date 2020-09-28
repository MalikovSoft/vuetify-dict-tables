<template>
  <nav>
    <v-navigation-drawer app permanent dark :color="color" v-model="drawer">
      <v-list dense nav class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-icon x-large>{{ icon }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Система справочников</v-list-item-title>
            <v-list-item-subtitle>СКФУ</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import {
  mdiCastEducation,
  mdiSchool,
  mdiContacts,
  mdiBook,
  mdiOfficeBuilding,
  mdiDomain,
  mdiCellphoneLink,
  mdiAccount,
} from "@mdi/js";

export default {
  name: "Navigation",
  data: () => ({
    drawer: true,
    icon: mdiBook,
    color: "primary",
    items: [
      {
        title: "Справочник ученых степеней",
        icon: mdiCastEducation,
        route: "/",
      },
      {
        title: "Справочник ученых званий",
        icon: mdiSchool,
        route: "/AcademicStatuses",
      },
      {
        title: "Справочник должностей",
        icon: mdiContacts,
        route: "/Positions",
      },
      {
        title: "Справочник институтов",
        icon: mdiOfficeBuilding,
        route: "/Institutes",
      },
      {
        title: "Справочник факультетов",
        icon: mdiDomain,
        route: "/Faculties",
      },
      {
        title: "Справочник кафедр",
        icon: mdiCellphoneLink,
        route: "/Chairs",
      },
      {
        title: "Справочник преподавателей",
        icon: mdiAccount,
        route: "/Lecturers",
      },
    ],
  }),
};
</script>

<style>
</style>