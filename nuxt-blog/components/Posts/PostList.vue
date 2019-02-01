<template>
  <section class="posts-list">
    <PostPreview
      id="1"
      title="Title"
      previewText="Test"
      :thumbnail="`https://placeimg.com/640/480/tech?${Math.random()}`"
    />
    <PostPreview
      id="2"
      title="Title 2"
      previewText="Test 2"
      :thumbnail="`https://placeimg.com/640/480/tech?${Math.random()}`"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview
  }
};
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>