<template>
  <AppHeader></AppHeader>
    <div v-if="cus" class="page">
      <h4>Thêm danh sách mượn</h4>
      <CusForm 
      :cus="cus" 
      @submit:cus="onUpdateCus" 
      @delete:cus="onDeleteCus" />
      <button class="btn btn-sm btn-success" @click="goToEditCustomer">
          <i /> Chỉnh sửa/Trả sách
        </button>
      <p>{{ message }}</p>
    </div>
  </template>
  <script>
  import CusForm from "@/components/CusForm.vue";
  import { customerService } from "@/services/Customer.service";
  import AppHeader from "@/components/AppHeader.vue"

  export default {
    components: {
      CusForm,
      AppHeader,
    },
    props: {
      listId: { type: Number, required: false },
    },
    data() {
      return {
        cus: null,
        message: "",
      };
    },
    methods: {
      async onUpdateCus(cus) {
        try {
          await customerService.create(cus);
          this.message = "Thêm thành công.";
        } catch (error) {
          console.log(error);
        }
      },
      
      goToEditCustomer() {
      this.$router.push({ name: "cus.edit" });
    },
      async getCus(listId) {
        try {
          this.cus = await customerService.get(listId);
        } catch (error) {
          console.log(error);
          // Redirect to NotFound page and keep URL intact
          this.$router.push({
            name: "notfound",
            params: {
              pathMatch: this.$route.path.split("/").slice(1),
            },
            query: this.$route.query,
            hash: this.$route.hash,
          });
        }
      }
    },
    created() {
      this.cus = {
        listId: "",
        cusName: "",
        bookCode: "",
        date: "",
      };
      this.message = "";
    },
  };
  </script>