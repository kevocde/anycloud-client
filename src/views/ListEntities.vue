<template>
    <div class="list-entities-component">
        <div class="row">
            <div class="col-12 col-md-4 col-lg-2">
                <nav class="nav nav-pills flex-column">
                    <a class="nav-link active" href="#">Mi unidad</a>
                    <a class="nav-link" href="#">Papelera</a>
                </nav>
                <hr>
            </div>
            <div class="col-12 col-md-8 col-md-10">
                <div class="row">
                    <div class="col-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style2">
                                <li class="breadcrumb-item"><a href="#">Mi unidad</a></li>
                                <li class="breadcrumb-item active"><a href="#">/</a></li>
                            </ol>
                        </nav>
                    </div>
                    <entity-item v-for="entity of entities" :key="entity.driver_id" :entity="entity" class="col-6 col-sm-4 col-md-3 col-lg-2"></entity-item>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import EntityItem from '../components/entities/EntityItem'

export default {
    name: 'list-entities',
    data: () => {
        return {
            entities: [
                {driver_id: 1, parent_entity_id: null, type: 'D', name: 'x1wer', alias: 'Documentos', path: '/'},
                {driver_id: 2, parent_entity_id: null, type: 'D', name: 'x2wer', alias: 'Imagenes', path: '/'},
                {driver_id: 3, parent_entity_id: null, type: 'D', name: 'x3wer', alias: 'Videos', path: '/'},
            ]
        }
    },
    components: {EntityItem}
}
</script>
<style lang="scss" scoped>
    .list-entities-component {
        .nav .nav-link {
            text-align: start;
        }
    }
</style>