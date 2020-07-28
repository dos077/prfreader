<template>
  <v-container fill-height fluid style="background-color: #FFE0B2">
    <v-row align-content="center" justify="center" style="height:100%;">
      <v-col cols="12">
        <v-card
          tile
          max-width="480"
          style="margin: 0 auto;"
          color="blue-grey lighten-5"
        >
          <v-toolbar color="blue-grey darken-3" dark flat>
            <v-toolbar-title class="ttl">
              No Profile Match
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text class="py-4 pb-8 text--primary">
            <p>
              <!-- eslint-disable-next-line -->
              The profile alias has no match in the database or the url is incorrect
            </p>
            <p class="mb-4">
              <!-- eslint-disable-next-line -->
              If you are just fiddling around, feel free to checkout my profile as a demo or go back to home page for more about what this website is.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn text to="/a/james/" color="orange darken-3">
              demo profile
            </v-btn>
            <v-btn text to="/" color="blue darken-3">
              about page
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>
