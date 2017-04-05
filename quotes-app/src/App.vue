<template>
<div class="container">
	<app-quote-progress :quoteCount="quoteCount" :maxQuotes="maxQuotes"></app-quote-progress>
	<app-new-quote @quoteAdded="newQuote"></app-new-quote>
	<app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
	<div class="row ">
		<div class="col-sm-12 ">
			<div class="alert alert-info text-center ">
				Info : Click on quote to delete
			</div>
		</div>
	</div>
</div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue"
import NewQuote from "./components/NewQuote.vue"
import QuoteProgess from "./components/QuoteProgress.vue"

export default {
	data: function() {
		return {
			quotes: [
				'Just a Quote to see something'
			],
			maxQuotes: 10
		}
	},
	methods: {
		newQuote(quote) {
			if (this.quoteCount < this.maxQuotes) {
				this.quotes = [...this.quotes, quote];
			}

		},
		deleteQuote(quoteIndex) {
			this.quotes.splice(quoteIndex, 1);
		}
	},
	computed: {
		quoteCount: function() {
			return this.quotes.length;
		}
	},
	components: {
		'app-quote-grid': QuoteGrid,
		'app-new-quote': NewQuote,
		'app-quote-progress': QuoteProgess
	}

}
</script>

<style>

</style>
