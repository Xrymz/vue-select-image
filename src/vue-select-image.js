export default {
  name: 'vue-select-image',
  props: {
    dataImages: {
      type: Array,
      default: []
    },
    isMultiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dataImagesLocal: [],
      singleSelected: {
        id: ''
      },
      multipleSelected: []
    }
  },
  created () {
    this.dataImagesLocal = this.dataImages
  },
  methods: {
    onSelectImage: function (objectImage) {
      this.singleSelected = Object.assign({}, this.singleSelected, objectImage)
      this.$emit('onSelectImage', objectImage)
    },
    onSelectMultipleImage: function (objectImage) {
      this.dataImagesLocal = this.dataImagesLocal.map((item) => {
        if (objectImage.id === item.id) {
          item.selected = !item.selected
        }
        return item
      })
      this.multipleSelected = this.dataImagesLocal.filter((item) => {
        return !!item.selected
      })
      this.$emit('onSelectMultipleImage', this.multipleSelected)
    }
  },
  mounted () {
    if (!this.isMultiple) {
      let selected = this.dataImagesLocal.filter((item) => {
        return !!item.selected
      })
      if (selected.length !== 0) {
        this.singleSelected = selected[0]
      }
    }
  }
}
