<template>
  <div class="users">
    <!-- .entity-heading -->
    <div class="entity-heading">
      <h2 class="entity-group-title">Users / {{users.length}}</h2>
    </div>
    <!-- END:.entity-heading -->
    <div class="entity-body myRow" :class="{active: selectedUserId}">
      <ul class="entity-list">
        <user-list-item :user-info="user" v-for="(user, index) of users" :key="users.id" @selected="select" :class="{active: user.id == selectedUserId}"/>
      </ul>
      <user-info :id="selectedUserId" v-if="selectedUserId" @close="unselect" />
    </div>
    <popup v-if="isPopupOpened" class="popup">
      <add-user-popup v-if="isAddPopup" @close="closeAllPopup" />
    </popup>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import UserListItem from '@/components/users/UserListItem'
import UserInfo from '@/components/users/UserInfo'
import AddUserPopup from '@/components/users/AddUserPopup'
import popups from '@/mixins/popups'

export default {
  name: 'users',
  mixins: [ popups ],
  data () {
    return {
      selectedUserId: null
    }
  },
  computed: {
    ...mapGetters(['users'])
  },
  components: {
    UserListItem,
    UserInfo,
    AddUserPopup
  },
  methods: {
    ...mapActions([
      'getUsers'
    ]),
    select (id) {
      this.selectedUserId = id
    },
    unselect () {
      this.selectedUserId = null
    },
    openAddPopup () {
      this.isPopupOpened = true
      this.isAddPopup = true
    }
  },
  mounted () {
    this.getUsers()
  }
}
</script>

<style scoped>
</style>
