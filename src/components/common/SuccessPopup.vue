<template>
	<div class="popup-body">
		<div class="popup-header">
			<div class="form-label">{{message}}</div>
		</div>
		<div class="popup-footer text-center popup-footer--small">
			<div class="action-btn action-btn--shadow confirm-success">
				<icon name="check" class="confirm-success__icon" />
			</div>
		</div>
	</div>
</template>

<script>
import 'vue-awesome/icons/check'

export default {
  name: 'success-popup',
  props: ['message']
}
</script>

<style src="@/assets/scss/components/popup-scoped.scss" lang="scss" scoped />

