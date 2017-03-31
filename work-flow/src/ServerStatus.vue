<template lang="html">
  <div>
    <p>Server Status: <span :class="statusColor">{{ status }}</span></p>
    <hr>
    <button type="button" name="button" @click="changeStatus">Change Status</button>
  </div>

</template>

<script>
export default {
    data: function() {
        return {
            status: 'Critical',
            statusColor: 'red'
        }
    },
    methods: {
        changeStatus() {
            this.status = 'Normal';
            this.statusColor = 'green'
        }
    }
}
</script>

<style lang="css">
  p{
    font-size: 4em;
  }

  .red{
    color : red;
  }

  .green{
    color:green;
  }
</style>
