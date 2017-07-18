<template>
  <div class="entity-infolist-status" :style="{position: 'relative'}"  @mouseover="showToolTipe" @mouseout="resetTooltip">
    <slot></slot>
    <div ref="tooltip" class="history-tooltip" v-show="!isHidden" :class="classPosition" :style="{position: 'absolute', left: left, top: top}">
      <div class="history-tooltip__inner">
        <!-- tooltip-list -->
        <ul class="tooltip-list">
          <li class="tooltip-list__item" v-for="status in statusesOrderedByDate">
            <div class="tooltip-colors">
              <span class="tooltip-colors__line" :style="{backgroundColor: status.color}"></span>
              <span class="entity-infolist__status-indicator used used--tooltip" :style="{backgroundColor: status.color}"></span>
            </div>
            <div class="tooltip-infolist__date">
              <span class="tooltip-infolist__date-month">{{getEntityShortDate(new Date(status.date), ' / ')}}</span>
              <span class="tooltip-infolist__date-year">{{new Date(status.date).getFullYear()}}</span>
            </div>
            <div class="tooltip-infolist__status">
              <span class="entity-infolist__status-name used" :style="{color: status.color}">{{status.title}}</span>
              <span class="tooltip-infolist__status-reason">{{status.description}}</span>
            </div>
          </li>
        </ul>
        <!-- END:tooltip-list -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'status-history-tooltip',
  props: {
    statuses: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      tooltipInterval: null,
      isHidden: true,
      top: '30px',
      left: '-40px',
      classPosition: ''
    }
  },
  computed: {
    ...mapGetters([
      'getEntityShortDate',
      'getProductStatuses'
    ]),
    statusesOrderedByDate () {
      return this.statuses.sort((prev, current) => prev.date < current.date ? 1 : -1)
    },
    getTooltipBoundingClientRect () {
      if (!this.$refs.tooltip) {
        return
      }
      return this.$refs.tooltip.getBoundingClientRect()
    }
  },
  methods: {
    showToolTipe (event) {
      this.tooltipInterval = setTimeout(() => {
        this.isHidden = false
        this.$nextTick(() => {
          const rightShift = window.innerWidth - this.getTooltipBoundingClientRect.right
          if (rightShift < 0) {
            this.left = '-283px'
            this.classPosition = 'left'
          }

          const bottomShift = window.innerHeight - this.getTooltipBoundingClientRect.bottom
          if (bottomShift < 0) {
            this.top = '-265px'
            if (this.classPosition) {
              this.classPosition += '-'
            }
            this.classPosition += 'top'
          }
        })
      }, 300)
    },
    resetTooltip () {
      if (this.tooltipInterval) {
        clearTimeout(this.tooltipInterval)
      }
      this.isHidden = true
    }
  },
  mounted () {
  }
}
</script>

<style src="@/assets/scss/components/tooltip-scoped.scss" lang="scss" />
