<template>
    <div class="dashboard">



        <div class="dashboard__header">Validate your website:</div>

        <div class="validation-section">
            <b-input-group
                prepend="Https://"
                class="validate-form"
            >
                <b-form-input />
                <b-input-group-append>
                    <b-btn variant="info">Validate!</b-btn>
                </b-input-group-append>
            </b-input-group>
        </div>

        <div class="project-list">
            <b-card
                title="PSCOM"
                img-src="https://picsum.photos/600/300/?image=940"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 project-list__single-project"
            >
                <div slot="header" class="project-summary">
                    <div>Page status: <b-badge variant="success">94%</b-badge></div>
                    <font-awesome-icon icon="trash-alt" />
                </div>
                <div class="project-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis vel mi at laoreet.
                </div>
            </b-card>

            <b-card
                title="OGCOM"
                img-src="https://picsum.photos/600/300/?image=947"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 project-list__single-project"
            >
                <div slot="header" class="project-summary">
                    <div>Page status: <b-badge variant="success">87%</b-badge></div>
                    <font-awesome-icon icon="trash-alt" />
                </div>
                <div class="project-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis vel mi at laoreet.
                </div>
            </b-card>

            <b-card
                title="OCCA"
                img-src="https://picsum.photos/600/300/?image=908"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 project-list__single-project"
            >
                <div slot="header" class="project-summary">
                    <div>Page status: <b-badge variant="warning">67%</b-badge></div>
                    <font-awesome-icon icon="trash-alt" />
                </div>
                <div class="project-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis vel mi at laoreet.
                </div>
            </b-card>

            <b-card
                title="Test.com"
                img-src="https://picsum.photos/600/300/?image=864"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 project-list__single-project"
            >
                <div slot="header" class="project-summary">
                    <div>Page status: <b-badge variant="success">98%</b-badge></div>
                    <font-awesome-icon icon="trash-alt" />
                </div>
                <div class="project-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis vel mi at laoreet.
                </div>
            </b-card>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Dashboard',
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

    .project-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;

        @media only screen and (min-width: 768px) {
            justify-content: center;

        }

        @media only screen and (min-width : 1200px) {
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
    }

</style>
