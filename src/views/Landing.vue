<template>
  <v-main>
    <section>
      <v-container>
        <v-row class="py-4">
          <v-col :cols="lgCols" class="text-block">
            <h2 class="ttl">P(r)f</h2>
            <h4 class="ttl">Open Source Personal Profile Hosting</h4>
            <p class="body">
              Sign-in with your Google account to try the live beta
            </p>
            <p>
              <v-btn class="ttl mr-4" to="/a/james">demo profile</v-btn>
              <v-btn
                text
                href="https://github.com/dos077/prfreader"
              >
                Github
              </v-btn>
            </p>
          </v-col>
          <v-col :cols="lgCols" class="image-block">
            <img class="frame elevation-2" src="profolio.jpg" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="alternate">
      <v-container>
        <v-row dark class="py-4">
          <v-col :cols="lgCols" order-sm="2" class="text-block negative">
            <h2 class="ttl">Tactile UX</h2>
            <!-- eslint-disable-next-line -->
            <p class="body">Bold but soothing visual palatte for great legitability without fatiquing contrast. Contrasting fonts for distinctive UI without visual clutters. This is an app design by a user and meant to be used by anyone, anytime, day or night.</p>
          </v-col>
          <v-col :cols="lgCols" order-sm="1" class="image-block alternate">
            <img src="tablet.jpg" class="frame elevation-2" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row>
          <v-col :cols="smCols" class="text-block">
            <h2 class="ttl">Vue.js</h2>
            <h4 class="ttl">Front End</h4>
            <!-- eslint-disable-next-line -->
            <p class="body">Built with the popular framework, the source code is easy to read and beginner friendly for customization/improvement.</p>
          </v-col>
          <v-col :cols="smCols" class="text-block">
            <h2 class="ttl">Firebase</h2>
            <h4 class="ttl">Serverless</h4>
            <!-- eslint-disable-next-line -->
            <p class="body">Cloud database powered by Google's flexible and performant Firebase, that's also free for individual to try and use.</p>
          </v-col>
          <v-col :cols="smCols" class="text-block">
            <h2 class="ttl">Github</h2>
            <!-- eslint-disable-next-line -->
            <p class="body">Add your issue, fork the project, build your own version with your own secure server.</p>
            <p>
              <v-btn class="ttl" href="https://github.com/dos077/prfreader">
                github repo
              </v-btn>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-main>
</template>

<script>
export default {
  name: 'Landing',
  computed: {
    lgCols() {
      if (this.$vuetify.breakpoint.smAndUp) return 6
      return 12
    },
    smCols() {
      if (this.$vuetify.breakpoint.mdAndUp) return 4
      if (this.$vuetify.breakpoint.smAndUp) return 6
      return 12
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #ffccbc;
  &.alternate {
    background: #1a237e;
  }
}
h2,
h4,
p {
  display: block;
  width: 16rem;
}
h2 {
  font-size: 48px;
  line-height: 60px;
}
h4 {
  padding-right: 3rem;
  font-size: 24px;
  line-height: 28px;
}
[class*='-block'] {
  height: 50vh;
  min-height: 280px;
  max-height: 480px;
}
.text-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #212121;
  &.negative {
    h2,
    h4 {
      color: #fafafa;
    }
    p {
      color: #eeeeee;
    }
  }
  p {
    margin: 1rem 0.5rem;
    color: #424242;
  }
}
.image-block {
  position: relative;
  overflow: vissible;
  &.alternate {
    img {
      left: auto;
      right: 2rem;
    }
  }
  img {
    position: absolute;
    z-index: 0;
    max-width: 130vw;
    max-height: 180%;
    left: 2rem;
    top: 1rem;
    &.frame {
      border: 20px solid #212121;
      border-radius: 10px;
    }
  }
}
</style>
