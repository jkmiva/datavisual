<template lang="html">
  <div class="title">
    <router-link :to='linkType'><h1>{{name}}</h1></router-link>
    <div class="legend-wrapper">
      <ul>
        <li v-for="(legend,index) in legendArr" v-on:mouseout="donwplay(index)" v-on:mouseover="highlight(index)" :style="styleArr[index]" @click="legendToggle(legend)">
          {{legend.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    legendArr: {
      type: Array,
      default: []
    },
    myChart: Object,
    name: String,
    linkType: String
  },
  created() {
    this._init()
  },
  data() {
    return {
      styleArr: [],
      color: this.$store.state.color
    }
  },
  methods: {
    _init() {
      this.color.forEach((color) => {
        this.styleArr.push({
          background: color,
          border: '1px solid ' + color
        })
      })
    },
    highlight(index) {
      this.myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: index
      });
    },
    donwplay(index) {
      this.myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: index
      })
    },
    legendToggle(legend) {
      legend.selected = !legend.selected
      this.myChart.dispatchAction({
        type: 'legendToggleSelect',
        name: legend.name
      })
      this.changeStyle()
    },
    changeStyle() {
      this.legendArr.forEach((data, index) => {
        if (data.selected) {
          this.styleArr[index].background = this.color[index]
          this.styleArr[index].border = '1px solid' + this.color[index]
        } else {
          this.styleArr[index].background = 'transparent'
          this.styleArr[index].border = '1px solid #9C8C84'
        }
      })
    }
  }
}

</script>

<style lang="stylus" scoped>
.title
  position relative
  display flex
  box-sizing border-box
  height 10%
  background-color rgba(32, 32, 35, 0.2)
  color white
  width 100%
  h1
    font-size 1.5rem
    width 10rem
    font-weight bold
    color white
    margin-top 2%
    padding-left 5%
    text-align left
  ul
    position absolute
    right 2%
    margin-top 2%
    li
      display inline-block
      min-width 50px
      padding 2px 10px 2px 10px
      line-height 20px
      text-align center
      font-size 0.8rem
      &:first-child
        border-top-left-radius 5px
        border-bottom-left-radius 5px
      &:last-child
        border-top-right-radius 5px
        border-bottom-right-radius 5px
</style>
