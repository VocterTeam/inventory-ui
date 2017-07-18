<template>
    <div class="app-date">
      <h3 class="app-date__title">Today</h3>
      <div class="app-currentdate">
        <div class="app-currentdate__date">{{appDate}}</div>
        <div class="app-currentdate__time">
          <icon name="clock-o" />
          <span class="app-currentdate__timeval">{{appTime}}</span>
        </div>
      </div>
    </div>
</template>

<script>
import 'vue-awesome/icons/clock-o'

export default {
  data () {
    return {
      initialTime: null,
      currentDate: new Date(),
      currentDateOptions: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    }
  },
  computed: {
    appDate () {
      return this.currentDate.toLocaleDateString('ru', this.currentDateOptions)
    },
    appTime () {
      return this.initialTime
    }
  },
  methods: {
    getTime () {
      let currentTime
      let date = new Date()
      let currentDay = this.currentDate.getDate()
      // let currentDay = date.getDate()
      let currentHours = date.getHours()
      let currentMinutes = date.getMinutes()
      let currentSeconds = date.getSeconds()
      let checkTime = function (time) {
        time < 10 ? time = `0${time}` : time
        return time
      }
      currentHours = checkTime(currentHours)
      currentMinutes = checkTime(currentMinutes)
      currentSeconds = checkTime(currentSeconds)
      currentHours === 24 ? currentDay += 1 : currentDay
      currentTime = currentHours + ':' + currentMinutes + ':' + currentSeconds
      this.initialTime = currentTime
    }
  },
  mounted () {
    setInterval(this.getTime, 1000)
  }
}
</script>

<style src="@/assets/scss/components/app-date.scss" lang="scss" scoped />
