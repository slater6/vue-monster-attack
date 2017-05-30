<template>
<div>
	<h1>Trade or View your Portfolio</h1>
	<h6>You may Save & Load your Data</h6>
	<p>
		Your funds : {{funds}}
	</p>
</div>
</template>

<script>
export default {
	computed: {
		funds() {
			console.log(this.$store.getters.funds);
			return this.$store.getters.funds;
		}
	}
}
</script>
