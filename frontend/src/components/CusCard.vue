<script>
export default {
  props: {
    cus: { type: Object, required: true },
  },
};
</script>
<template>
  <div class="card">
    <div class="p-1">
      <strong>Mã sách</strong>
      {{ cus.bookCode }}
    </div>
    <div class="p-1">
      <strong>Tên người mượn:</strong>
      {{ cus.cusName }}
    </div>
    <div class="p-1">
      <strong>Ngày mượn:</strong>
      {{ cus.dateBor }}
    </div>
    <div class="p-1">
      <strong>Ngày trả:</strong>
      {{ cus.dateRet }}
    </div>
  </div>
</template>
<style>
.card{
  background: linear-gradient(90deg, rgba(154,205,50,1) 0%, rgba(0,255,252,1) 87%, rgba(0,212,255,1) 100%);
  color: black;
}
</style>