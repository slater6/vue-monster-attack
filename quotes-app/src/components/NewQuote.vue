<template lang="html">
    <div  class="row">
      <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <form action="">
          <div class="form-group">
            <label for="">Quote</label>
            <textarea class="form-control" name="" id="" cols="30" rows="5" v-model="quote"></textarea>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
          </div>
        </form>

      </div>
    </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
	data: function() {
		return {
			quote: ''
		}
	},
	methods: {
		createNew() {
			this.$emit('quoteAdded', this.quote);
			this.quote = '';
		}
	}

}
</script>

<style lang="css">
</style>
