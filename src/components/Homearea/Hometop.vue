<template>
  <div class="header">
    <div class="search-container">
      <transition name="search-expand">
        <InputText
          v-if="searchExpanded"
          v-model="searchQuery"
          placeholder="搜索..."
          class="search-input"
          @blur="onSearchBlur"
        />
      </transition>
      <Button
        icon="pi pi-search"
        class="p-button-text search-icon"
        @click="toggleSearch"
      />
    </div>

    <Avatar icon="pi pi-user" class="user-avatar" size="large" shape="circle" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";

const searchExpanded = ref(false);
const searchQuery = ref("");

const toggleSearch = () => {
  searchExpanded.value = !searchExpanded.value;
};

const onSearchBlur = () => {
  if (!searchQuery.value) {
    searchExpanded.value = false;
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  /*position: sticky;
  top: 0;*/
  margin: 0 1rem;
}

.search-container {
  display: flex;
  align-items: center;
  position: relative;
}

.search-icon {
  font-size: 1.5rem;
  color: #6c757d;
  transition: all 0.3s ease;
  margin-right: 0.2rem;
}

.search-icon:hover {
  color: #4361ee;
}

.search-input {
  width: 0;
  transition: all 0.3s ease;
  opacity: 0;
  margin-right: 0.2rem;
}

.search-expand-enter-active,
.search-expand-leave-active {
  transition: all 0.3s ease;
}

.search-expand-enter-from,
.search-expand-leave-to {
  width: 0;
  opacity: 0;
  margin-right: 0;
}

.search-expand-enter-to,
.search-expand-leave-from {
  width: 250px;
  opacity: 1;
  margin-right: 0.2rem;
}

.user-avatar {
  background-color: #4361ee;
  color: white;
}
</style>
