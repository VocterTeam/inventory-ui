<template>
  <div class="groups">
    <!-- .entity-heading -->
    <div class="entity-heading">
      <entity-popup-btn @add="openAddPopup"/>
      <h2 class="entity-group-title">Groups / {{groups.length}}</h2>
    </div>
    <!-- END:.entity-heading -->
    <div class="entity-body myRow" :class="{active: groupId}">
      <ul class="entity-list">
        <group-list-item :group-info="group" v-for="(group, index) of groups" :key="group.id" @selected="select" :class="{active: group.id == groupId}"/>
      </ul>
      <group-info :groupId="groupId" v-if="groupId" @close="unselect" />
    </div>
    <popup v-if="isPopupOpened" class="popup" @clickOutside="closeAllPopup">
      <add-group-popup v-if="isAddPopup" @close="closeAllPopup" />
    </popup>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GroupListItem from '@/components/groups/GroupListItem'
import GroupInfo from '@/components/groups/GroupInfo'
import AddGroupPopup from '@/components/groups/AddGroupPopup'

import popups from '@/mixins/popups'

export default {
  name: 'groups',
  mixins: [ popups ],
  data () {
    return {
      groupId: null
    }
  },
  computed: {
    ...mapGetters(['groups'])
  },
  methods: {
    ...mapActions([
      'getGroups'
    ]),
    select (groupId) {
      this.groupId = groupId
    },
    unselect () {
      this.groupId = null
    },
    openAddPopup () {
      this.isPopupOpened = true
      this.isAddPopup = true
    }
  },
  components: {
    GroupListItem,
    GroupInfo,
    AddGroupPopup
  },
  mounted () {
    this.getGroups()
  }
}
</script>

<style scoped>
</style>
