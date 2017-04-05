<template lang="html">
    <div  class="row">
      <app-quote v-for="(quote, index) in quotes" :quoteIndex="index">{{ quote }}</app-quote>
    </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
	props: ['quotes'],
	components: {
		'app-quote': Quote
	}
}
</script>

<style lang="css">
</style>
