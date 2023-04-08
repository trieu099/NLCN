<template>
  <AppHeader></AppHeader>
    <div v-if="cus" class="page">
      <h4>Chỉnh Sửa</h4>
      <CusForm 
      :cus="cus" 
      @submit:cus="onUpdateCus" 
      @delete:cus="onDeleteCus" />
      <p>{{ message }}</p>
    </div>
    <!-- <button
          v-if="(cusLocal.listId)"
          type="button"
          class="ml-2 btn btn-danger"
          @click="deleteCus">
          Xóa
        </button> -->
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
      ID: { type: Number, required: false },
    },
    data() {
      return {
        cus: null,
        message: "",
      };
    },
    methods: {
      async getCus(listId) {
        try {
          this.cus = await customerService.get(listId);
        } catch (error) {
          console.log(error);
          this.$router.push({
            name: "notfound",
            params: {
              pathMatch: this.$route.path.split("/").slice(1),
            },
            query: this.$route.query,
            hash: this.$route.hash,
          });
        }
      },
      async onUpdateCus(cus) {
        try {
          await customerService.update(cus.listId, cus);
          this.message = "Sửa thành công.";
        } catch (error) {
          console.log(error);
        }
      },
      async onDeleteCus(listId) {
        if (confirm("Bạn muốn xóa người này?")) {
          try {
            await customerService.delete(listId);
            this.$router.push({ name: "customer" });
          } catch (error) {
            console.log(error);
          }
        }
      },
    },
    created() {
      this.getCus(this.ID);
      this.message = "";
    },
  };
  </script>