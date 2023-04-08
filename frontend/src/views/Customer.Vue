<template>
  <AppHeader></AppHeader>
    <div class="page row">
      <div class="col-md-10">
        <CusSearch v-model="searchText" />
      </div>
      <div class="column">
      <div class="mt-3 col-md-6" style="margin-right: 5px">
        <h4>
          Danh sách khách mượn:
          
        </h4>
        <CusList
          v-if="filteredCussCount > 0"
          :cuss="filteredCuss"
          v-model:activeIndex="activeIndex"
        />
        <p v-else>Danh Sách Trống!.</p>
      </div></div>
      <div class="column">
      <div class="mt-3 col-md-6">
        <div v-if="activeCus">
          <h4>
            Thông Tin Chi Tiết:
            
          </h4>
          <CusCard :cus="activeCus" />
          <router-link
            :to="{
              name: 'cus.edit',
              params: { listId: activeCus.listId },
            }"
          >
            <span class="mt-2 badge badge-warning">
              <i class="fas fa-edit" /> Hiệu chỉnh</span
            >
          </router-link>
        </div>
      </div>
      <div class="bton">
        <div class="mt-3 row justify-content-around align-items-center">
          <button class="btn btn-sm btn-primary" @click="refreshList()">
            Refresh
          </button>
           
          <button class="btn btn-sm btn-success" @click="goToAddCustomer">
            <i /> Mượn sách
          </button>
          
        </div>
        </div>
      </div>
  
        
    </div>
  </template>
  <script>
  import AppHeader from "@/components/AppHeader.vue"
  import CusSearch from "@/components/CusSearch.vue";
  import CusList from "@/components/CusList.vue";
  import CusCard from "@/components/CusCard.vue";
  import { customerService } from "@/services/Customer.service";
  
  export default {
    components: {
      CusSearch,
      CusList,
      CusCard,
      AppHeader
    },
    // The full code will be presented below
    data() {
      return {
        cuss: [],
        activeIndex: -1,
        aactiveIndex: -1,
        searchText: "",
      };
    },
    watch: {
      // Monitor changes on searchText.
      searchText() {
        this.activeIndex = -1;
      },
    },
    computed: {
      // Map boook to strings for searching.
      
      cussAsStrings() {
        return this.cuss.map((cus) => {
          const { cusName, bookCode, dateBor } = cus;
          return [cusName, bookCode, dateBor].join("");
        });
      },
      
      filteredCuss() {
        if (!this.searchText) return this.cuss;
        return this.cuss.filter((cus, index) =>
          this.cussAsStrings[index].includes(this.searchText)
        );
      },
      
      activeCus() {
        if (this.activeIndex < 0) return null;
        return this.filteredCuss[this.activeIndex];
      },
      
      filteredCussCount() {
        return this.filteredCuss.length;
      },
    },
    methods: {
     
      async retrieveCuss() {
        try {
          const cussList = await customerService.getMany();
          this.cuss = cussList.sort((current, next) =>
            current.cusName.localeCompare(next.cusName)
          );
        } catch (error) {
          console.log(error);
        }
      },
      refreshList() {
        this.retrieveCuss();
        this.activeIndex = -1;
      },
  
      goToAddCustomer() {
        this.$router.push({ name: "cus.add" });
      },
    },
    mounted() {
      this.refreshList();
    },
  };
  </script>
  <style scoped>
  .page {
    text-align: left;
    width: 1200px;
    /* height: 600px; */
    color: black;
  }
  
  .btn {
    margin: 5px;
  }
  .column {
    float: left;
    width: 33.33%;
    padding: 10px;
    height: 500px; 
  }
  
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* @media screen and (max-width: 600px) {
    .column {
      width: 100%;
    }
  } */
  
  h4 {
    color: aqua;
    margin: 10px;
  }
  </style>
  