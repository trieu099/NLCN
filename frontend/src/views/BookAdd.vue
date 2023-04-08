<template>
    <AppHeader></AppHeader>
    <div class="page">
      <h4>Thêm Sách vào thư viện</h4>
      <BookForm :book="book" @submit:book="onUpdateBook" />
      <p>{{ message }}</p>
    </div>
  </template>
  <script>
  import BookForm from "@/components/BookForm.vue";
  import { bookService } from "@/services/Library.service";
  import AppHeader from "@/components/AppHeader.vue"

  export default {
    components: {
      BookForm,
      AppHeader,
    },
    props: {
      bookCode: { type: Text, required: false },
    },
    data() {
      return {
        book: null,
        message: "",
      };
    },
    methods: {
      async onUpdateBook(book) {
        try {
          await bookService.create(book);
          this.message = "Sách được thêm vào thư viện thành công.";
        } catch (error) {
          console.log(error);
        }
      },
      
    },
    created() {
      this.book = {
        bookNo: "",
        bookCode: "",
        bookName: "",
        bookCategory: "",
        bookAmount: "",
      };
      this.message = "";
    },
  };
  </script>