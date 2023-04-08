<script>
export default {
  props: {
    book: { type: Object, required: true },
  },
};
</script>
<template>
  <div class="card">
    <div class="p-1">
      <strong>Mã sách</strong>
      {{ book.bookCode }}
    </div>
    <div class="p-1">
      <strong>Tên Sách:</strong>
      {{ book.bookName }}
    </div>
    <div class="p-1">
      <strong>Thể Loại:</strong>
      {{ book.bookCategory }}
    </div>
    <div class="p-1">
      <strong>Số Lượng:</strong>
      {{ book.bookAmount }}
    </div>
    
  </div>
</template>
<style>
.card{
  background: linear-gradient(90deg, rgba(154,205,50,1) 0%, rgba(0,255,252,1) 87%, rgba(0,212,255,1) 100%);
  color: black;
}
</style>