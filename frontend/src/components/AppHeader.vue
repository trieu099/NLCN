<template>
  <nav class="navbar">
    <a ref="/" class="navbar-brand">Ứng dụng Quản lý Thư Viện</a>
    <div class="navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'library' }" class="nav-link"
          >Thư Viện 722
          <i class="fas fa-address-book"></i>
        </router-link>
      </li>
    </div>
    <div class="navbar-nav">
      <li>
        <router-link :to="{ name: 'customer' }" class="nav-link"
          >Khách Hàng
          <i class="fa fa-id-card-o"  aria-hidden="true"></i>
        </router-link>
      </li>
    </div>
    <div class="mr-auto navbar-nav">
      <li>
        <router-link :to="{ name: 'logout' }" class="nav-link"
          >Đăng Xuất
          <i class="fa fa-sign-out"></i>
        </router-link>
      </li>
    </div>
  </nav>
</template>

<style>
.narbar {
  width: 1366px;
  margin: 0px;
}
nav {
  background-color: #6eccaf;
}
.navbar-nav{
  margin: 10px;
}
.navbar-brand {
  color: #344d67;
}
.nav-link {
  color: #344d67;
}
</style>
