<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: "Bryan",
        title: "My First Post",
        thumbnailLink: `https://placeimg.com/640/480/tech?${Math.random()}`,
        content: "Awesome content"
      }
    };
  }
};
</script>
