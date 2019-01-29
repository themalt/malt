<template>
  <div class="dashboard">
    <div class="dashboard__header">Validate your website:</div>

    <div class="validation-section">
      <b-input-group prepend="Https://" class="validate-form">
        <b-form-input/>
        <b-input-group-append>
          <b-btn variant="info">Validate!</b-btn>
        </b-input-group-append>
      </b-input-group>
    </div>

    <ProjectList/>
  </div>
</template>

<script>
import ProjectList from "../components/ProjectList.vue";

export default {
  name: "Dashboard",
  components: {
    ProjectList
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

.validation-section {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 70%;

  .input-group-prepend {
    display: none;

    @media only screen and (min-width: 768px) {
      display: block;
    }
  }
}
</style>
