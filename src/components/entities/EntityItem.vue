<template>
    <div class="entity-item-component d-flex justity-content-center" @click="$emit('click')">
        <div class="card custom-card card-body p-1">
            <p class="mb-0 eic-icon text-secondary"><i class="fas fa-folder"></i></p>
            <div class="card-header tx-medium p-1 text-white">{{entity.alias}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'entity-item',
    props: {
        entity: {
            type: Object,
            default: () => []
        }
    }
}
</script>
<style lang="scss" scoped>
    .entity-item-component {
        .card {
            cursor: pointer;

            .eic-icon i {
                transition: 200ms all ease;
                font-size: 4rem;
            }

            &:hover {
                .eic-icon i {
                    color: #fff;
                }
            }
        }
    }
</style>
