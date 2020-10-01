<template>
  <div class="list-entities-component">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-2">
        <nav class="nav nav-pills flex-column">
          <a v-for="driver of drivers" :key="driver.driver_id"
             :class="{active: (driver.driver_id === driverSelected)}"
             @click.prevent="setActiveDriver(driver.driver_id)"
             href="#"
             class="nav-link"
          >
            {{ driver.name }}
          </a>
        </nav>
        <hr>
      </div>
      <div class="col-12 col-md-8 col-md-10">
        <div class="row">
          <div class="col-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-style2">
                <li v-for="(breadcrumb, idx) of breadcrumbs" :key="idx" class="breadcrumb-item">
                  <template v-if="breadcrumb.type === 'D'"><a @click.prevent="setActiveDriver(breadcrumb.driver.driver_id)" href="#">{{ breadcrumb.label }}</a></template>
                  <template v-if="breadcrumb.type === 'E'"><a @click.prevent="setActiveEntity(breadcrumb.entity.entity_id)" href="#">{{ breadcrumb.label }}</a></template>
                </li>
                <li class="breadcrumb-item active"><a href="#">/</a></li>
              </ol>
            </nav>
          </div>
          <entity-item v-for="entity of entitiesShowing" :key="entity.entity_id" :entity="entity" @click="setActiveEntity(entity.entity_id)" class="col-6 col-sm-4 col-md-3 col-lg-2"></entity-item>
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
      drivers: [
        {driver_id: 1, name: 'Mi unidad'},
        {driver_id: 2, name: 'Papelera'}
      ],
      entities: [
        {
          entity_id: 1,
          parent_entity_id: null,
          driver_id: 1,
          type: 'D',
          name: 'x1wer',
          alias: 'Documentos',
          path: '/'
        },
        {
          entity_id: 2,
          parent_entity_id: null,
          driver_id: 1,
          type: 'D',
          name: 'x2wer',
          alias: 'Imagenes',
          path: '/'
        },
        {
          entity_id: 3,
          parent_entity_id: null,
          driver_id: 2,
          type: 'D',
          name: 'x3wer',
          alias: 'Videos',
          path: '/'
        },
        {
          entity_id: 4,
          parent_entity_id: 1,
          driver_id: 1,
          type: 'D',
          name: 'x2wer',
          alias: 'Importantes',
          path: '/Documentos/'
        },
        {
          entity_id: 5,
          parent_entity_id: 1,
          driver_id: 1,
          type: 'D',
          name: 'x3wer',
          alias: 'XXX',
          path: '/Documentos'
        },
        {
          entity_id: 6,
          parent_entity_id: 4,
          driver_id: 1,
          type: 'D',
          name: 'x3wer',
          alias: 'Podcast',
          path: '/Documentos/Importantes/'
        }
      ],
      driverSelected: null,
      entitySelected: null
    }
  },
  computed: {
    entitiesShowing() {
      return this.entities.filter(entity => (entity.driver_id === this.driverSelected && entity.parent_entity_id === this.entitySelected))
    },
    breadcrumbs() {
      let breadcrumbs = []

      if (this.entitySelected) {
        let entity = this.entities.find(entity => entity.entity_id === this.entitySelected)
        do {
          breadcrumbs.push({
            label: entity.alias,
            type: 'E',
            entity: entity
          })

          entity = (entity.parent_entity_id) ? this.entities.find(lEntity => lEntity.entity_id === entity.parent_entity_id) : null
        } while (entity)
      }

      if (this.driverSelected) {
        const driver = this.drivers.find(driver => driver.driver_id === this.driverSelected)
        breadcrumbs.push({
          label: driver.name,
          type: 'D',
          driver: driver
        })
      }

      return breadcrumbs.reverse()
    }
  },
  methods: {
    setActiveDriver(driverId = null) {
      this.entitySelected = null
      this.driverSelected = (driverId) ? driverId : this.drivers[0].driver_id
    },
    setActiveEntity(entityId) {
      this.entitySelected = entityId
    }
  },
  mounted() {
    this.setActiveDriver()
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
