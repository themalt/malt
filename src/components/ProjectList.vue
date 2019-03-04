<template>
  <div class="project-list">
    <b-card
      v-for="site in sites"
      :key="site.id"
      :title="site.meta.title"
      img-src="https://picsum.photos/600/300/?image=940"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 project-list__single-project"
    >
      <div slot="header" class="project-summary">
        <div>Page status:
          <b-badge variant="success">{{site.pageStatus}}%</b-badge>
        </div>
        <font-awesome-icon icon="trash-alt"/>
      </div>
      <div class="project-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
        iaculis vel mi at laoreet.
        <p class="project-desc__page-link">Visit page:
          <a :href="site.url" target="_blank">{{site.meta.title}}</a>
        </p>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "ProjectList",
  data() {
    return {
      projects: ""
    };
  },
  computed: {
    ...mapState(["sites"])
  }
};
</script>

<style lang="scss" scoped>
.project-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  @media only screen and (min-width: 768px) {
    justify-content: center;
  }

  @media only screen and (min-width: 1200px) {
    width: 990px;
    justify-content: unset;
  }

  &__single-project {
    margin-top: 10px;
    margin-bottom: 10px;

    @media only screen and (min-width: 768px) {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 10px;
    }
  }

  .project-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .project-desc {
      &__page-link {
          margin-top: 20px;
      }
  }
}
</style>
