<template>
  <div class="posts-page">
    <PostList></PostList>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  }
};
</script>

<style>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

