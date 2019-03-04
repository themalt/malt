<template>
  <div class="validation-section">
    <b-input-group prepend="Https://" class="validate-form">
      <b-form-input/>
      <b-input-group-append>
        <b-btn variant="info">Validate!</b-btn>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "ValidationForm"
};
</script>

<style lang="scss" scoped>
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
