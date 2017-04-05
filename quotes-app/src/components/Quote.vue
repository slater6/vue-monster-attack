<template lang="html">
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div @click="deleteQuote" class="panel-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: ['quoteIndex'],
	methods: {
		deleteQuote() {
			this.$parent.$emit('quoteDeleted', this.quoteIndex);
		}
	}
}
</script>

<style lang="css">
  .panel-body{
    font-family: 'Arizonia', cursive;
    font-size: 2em;
    color: #6e6e6e;
  }

  .quote{
    cursor: pointer;
    padding: 20px;
  }

  .quote:hover{
    background-color: #ffe2e2;
  }
</style>
