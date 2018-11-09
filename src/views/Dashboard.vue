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
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 project-list__single-project"
            >
                <p class="card-text">
                    <font-awesome-icon icon="coffee" />
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </b-card>

            <b-card
                title="OGCOM"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 project-list__single-project"
            >
                <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </b-card>

            <b-card
                title="OCCA"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 project-list__single-project"
            >
                <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </b-card>

            <b-card
                title="Test.com"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 project-list__single-project"
            >
                <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
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
    }

</style>
