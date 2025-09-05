<template>
  <div class="header">
    <div class="ellipsis-container">
      <transition name="search-expand">
        <!-- <InputText
          v-if="searchExpanded"
          v-model="searchQuery"
          placeholder="搜索..."
          class="search-input"
          @blur="onSearchBlur"
        /> -->
        <Button rounded class="p-button-text  " @click="toggleSearch">
          <i class="pi pi-ellipsis-v"></i>
        </Button>
      </transition>


    </div>

    <Avatar icon="pi pi-user" class="user-avatar" size="large" shape="circle" />
  </div>



  <Fieldset legend="Vue 3 新特性">
    <p class="m-0">
      渐进式 JavaScript 框架、易学易用、性能出色、适用场景丰富的 Web 前端框架。
    </p>
  </Fieldset>
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
:deep(.p-fieldset-legend-label) {
  font-weight: bold;
  font-size: 2.6rem;
  color: #333;
}


.p-fieldset { 
  padding: 0 1.5rem 1.125rem 1.125rem!important; 
  margin: 3rem 0 0 0 ;
  font-family: MyFontAcer;  
}


.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  /* background-color: #ffffff; */
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
  border-radius: 40px;
  /*position: sticky;
  top: 0;*/
  margin: 1rem;
}

:deep(.p-button-text) {
  background: #333030;
  color: #ffffff;
  border-radius: 2rem;
  width: 60px;
  height: 60px;
}

:deep(.p-button-text:not(:disabled):hover) {
  background: #262927;
  color: #ffffff;
  box-shadow: 0 0 10px #35b981;
}

.pi-ellipsis-v:before {
  font-size: 1.3rem;
}

:deep(.m-0) {
  padding: 0 0.75rem;
  font-size: 2rem;
}


:deep(.p-button-text:not(:active)) {
  transform: scale(1.05);
}

.search-container {
  display: flex;
  align-items: center;
  position: relative;
  background: red;
  border-radius: 2rem;
  width: 48px;
  height: 48px;
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
  width: 60px;
  height: 60px;
}



:deep(.m-0) { 
    letter-spacing: 4px;
    line-height: 1.5;
  }


@media (max-width: 768px) {
  :deep(.m-0) {
    font-size: 1.4rem; 
  }

}
</style>
