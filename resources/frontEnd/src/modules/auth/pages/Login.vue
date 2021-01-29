<template>
  <q-layout class="bg-image">
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
          <q-card-section>
            <q-avatar size="115px"  class="absolute-center shadow-10">
              <img src="../../../statics/profile.svg">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Acesso a plataforma
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="username"
                label="Username"
                lazy-rules
              />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules

              />

              <div>
                <q-btn label="Login" :loading="loading" @click="doLogin" type="button" color="dark"/>
              </div>
              <div class="text-right">
                versão: 1.0.0
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import getters from '../store'

export default {
    data() {
        return {
            username: '',
            password: '',
            loading: false,
        }
    },
    computed: {
      ...mapState('auth', ['user'])
    },
    methods: {
      ...mapActions('auth', ['ActionDoLogin', 'ActionLoadSession']),
      async doLogin () {
        this.loading = true
        let user = {
          email: this.username,
          password: this.password
        }
        try {
          let res = await this.ActionDoLogin(user)
          let userLogin = await this.ActionLoadSession()
          if(this.user.user_type === 'admin') {
            this.$router.push({name: 'Home'})
          } else if(this.user.user_type === 'revenda') {
            this.$router.push({name: 'HomeRevenda'})
          }  else if(this.user.user_type === 'vendedor') {
            this.$router.push({name: 'HomeVendedor'})
          }
        } catch (error) {
          this.$q.notify({
            message: error.message,
            type: 'negative'
          })
        }
        this.loading = false
      }
    },
    /**
    beforeRouteEnter (to, from, next) {
      next(vm => {
        if (getters['auth/hasToken']) {
          vm.$router.push({name: 'Home'})
        }
      })
    }
    */
}
</script>

<style>
  .bg-image {
    background: linear-gradient(to bottom, rgb(0, 0, 0) 15%, rgb(150, 158, 167) 100%);
  }
  /**
  .bg-image {
    background-image: url(../../../statics/background2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  */
  [v-cloak] {
    display: none !important;
  }
</style>
