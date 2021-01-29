<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-white">
        <q-btn
          color="white"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          APP
        </q-toolbar-title>


        <q-space/>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="dark" :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
                 @click="$q.fullscreen.toggle()"
                 v-if="$q.screen.gt.sm">
            <!--            <q-tooltip>Messages</q-tooltip>-->
          </q-btn>
          <q-btn round dense flat color="white" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              5
            </q-badge>
            <q-menu
            >
              <q-list style="min-width: 100px">
                <messages></messages>
                <q-card class="text-center no-shadow no-border">
                  <q-btn label="View All" style="max-width: 120px !important;" flat dense
                         class="text-indigo-8"></q-btn>
                </q-card>
              </q-list>
            </q-menu>
            <!--            <q-tooltip>Notifications</q-tooltip>-->
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-btn>
          <q-btn flat @click="signOut()" color="white">
            <q-icon name="close"/>
            Sair
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary text-white"
    >
      <q-img
        src="../statics/profile.svg"
        spinner-color="white"
        style="height: 140px; max-width: 150px; margin-left:25%; margin-top:10px; margin-bottom: 10px;"
      />
      <q-list>
        <q-item to="/" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item
          icon="menu_open"
          label="Cadastros"
        >
          <q-list class="q-pl-lg">
            <q-item to="/Clientes" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="supervisor_account"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Clientes</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/Fornecedores" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="supervisor_account"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Fornecedores</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/TipoVeiculos" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="rv_hookup"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Tipo de Veiculos</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/Veiculos" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="local_shipping"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Veiculos</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/Lock" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="redeem"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Produtos</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
        <q-expansion-item
          icon="code"
          label="Operacional"
        >
          <q-list class="q-pl-lg">
            <q-item to="/Map" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="add_road"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>CTR</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/MapMarker" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="check_box"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Abastecimentos</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/StreetView" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="monetization_on"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Faturamento</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-item to="/Mail" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="attach_money"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Contas a Receber</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/TreeTable" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="money_off"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Contas a Pagar</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex'
import EssentialLink from 'components/EssentialLink'
import Messages from "./Messages";

export default {
    name: 'MainLayout',

    components: {
        Messages,
        EssentialLink
    },

    data() {
        return {
            leftDrawerOpen: false,
        }
    },
    methods: {
      ...mapActions('auth', ['ActionSignOut']),
      signOut() {
        this.ActionSignOut()
        this.$router.push({name: 'Login'})
      }
    }
}
</script>
