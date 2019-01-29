<template>
  <div class="dashboard">
    <div class="dashboard__header">Validate your website:</div>
    <ValidationForm/>
    <ProjectList/>
  </div>
</template>

<script>
import ProjectList from "../components/ProjectList.vue";
import ValidationForm from "../components/ValidationForm.vue";

export default {
  name: "Dashboard",
  components: {
    ProjectList,
    ValidationForm
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  &__header {
    display: flex;
    justify-content: center;
    font-size: 36px;
  }
}
</style>
