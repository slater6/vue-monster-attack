<template>
<div>
	<h1>Trade or View your Portfolio</h1>
	<h6>You may Save &amp; Load your Data</h6>
	<p>
		Your funds : {{ funds | currency }}
	</p>
</div>
</template>

<script>
export default {
	computed: {
		funds() {
			return this.$store.getters.funds;
		}
	}
}
</script>
