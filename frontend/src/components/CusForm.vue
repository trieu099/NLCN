<template>
    <Form @submit="submitCus" :validation-schema="cusFormSchema">
        <div class="form-group">
        <label for="listId">ID: </label>
        <Field
          name="listId"
          type="number"
          class="form-control"
          v-model="cusLocal.listId"
        />
        <ErrorMessage name="listId" class="error-feedback" />
      </div>
        <div class="form-group">
        <label for="cusName">Tên người mượn: </label>
        <Field
          name="cusName"
          type="text"
          class="form-control"
          v-model="cusLocal.cusName"
        />
        <ErrorMessage name="cusName" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="bookCode">Mã Sách: </label>
        <Field
          name="bookCode"
          type="text"
          class="form-control"
          v-model="cusLocal.bookCode"
        />
        <ErrorMessage name="bookCode" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="dateBor">Ngày mượn: </label>
        <Field
          name="dateBor"
          type="date"
          class="form-control"
          v-model="cusLocal.dateBor"
        />
        <ErrorMessage name="dateBor" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="dateRet">Ngày Trả: </label>
        <Field
          name="dateRet"
          type="date"
          class="form-control"
          v-model="cusLocal.dateRet"
        />
        <ErrorMessage name="dateRet" class="error-feedback" />
      </div>
      
      <div class="form-group">
        <button class="btn btn-primary">Thêm</button>
        <button
          
          class="ml-2 btn btn-danger"
          @click="deleteCus"
        >
          Xóa
        </button>
      </div>
    </Form>
  </template>
  <script>
  import * as yup from "yup";
  import { Form, Field, ErrorMessage } from "vee-validate";
  export default {
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    emits: ["submit:cus", "delete:cus"],
    props: {
      cus: { type: Object, required: true },
    },
    data() {
      const cusFormSchema = yup.object().shape({
        // listId: yup
        //     .number(),
        cusName: yup
            .string()
            .required("Phải nhập tên Người mượn")
            .min(1, "Tên người mượn phải ít nhất 1 ký tự.")
            .max(32, "Tên người mượn tối đa 32 ký tự."),
        bookCode: yup
            .string()
            .required("Phải nhập mã sách")
            .min(1, "Mã sách phải ít nhất 1 ký tự.")
            .max(10, "Mã sách tối đa 10 ký tự."),
        dateBor: yup
            .date(),
        dateRet: yup
            .date(),
      });
      return {
        cusLocal: { ...this.cus},
        
        cusFormSchema,
      };
    },
    methods: {
      submitCus() {
        this.$emit("submit:cus", this.cusLocal);
      },
      deleteCus() {
        this.$emit("delete:cus", this.cusLocal.listId);
      },
      
    },
  };
  </script>
  <style scoped>
  @import "@/assets/form.css";
  </style>