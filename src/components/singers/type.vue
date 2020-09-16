<template>
  <div class="head">
    <scroll :scrollX="true">
      <ul class="list">
        <label for="">分类(默认热门)</label>
        <li
          v-for="(item, index) in date"
          :class="{ active: index == act }"
          :key="index"
          @click="active(index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </scroll>
    <scroll :scrollX="true">
      <ul class="list">
        <label for="">首字母</label>
        <li
          v-for="(item, index) in letter"
          :class="{ active: index == l_act }"
          :key="index"
          @click="lactive(index)"
        >
          {{ item }}
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
export default {
  props: {
    arr: Object,
  },
  data() {
    return {
      date: [
        { name: '华语男', type: '1', area: '7' },
        { name: '华语女', type: '2', area: '7' },
        { name: '华语组合', type: '-1', area: '7' },
        { name: '欧美男', type: '1', area: '96' },
        { name: '欧美女', type: '2', area: '96' },
        { name: '欧美组合', type: '-1', area: '96' },
        { name: '日本男', type: '1', area: '8' },
        { name: '日本女', type: '2', area: '8' },
        { name: '日本组合', type: '-1', area: '8' },
        { name: '韩国男', type: '1', area: '16' },
        { name: '韩国女', type: '2', area: '16' },
        { name: '韩国组合', type: '-1', area: '16' },
        { name: '其他男歌手', type: '1', area: '0' },
        { name: '其他女歌手', type: '2', area: '0' },
        { name: '其他组合', type: '-1', area: '0' },
      ],
      act: -1,
      l_act: -1,
      letter: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ],
      str: { type: '', area: '', initial: '', offset: 0 },
    }
  },
  methods: {
    active(index) {
      this.act = index
      this.str.type = this.date[index].type
      this.str.area = this.date[index].area
      this.$emit('input', this.str)
    },
    lactive(index) {
      this.l_act = index
      this.str.initial = this.letter[index]
      this.$emit('input', this.str)
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 5px;
  min-width: 100%;
  // height: 26px;

  label {
    display: block;
    white-space: nowrap;
    margin-right: 5px;
    float: left;
  }
  .active {
    border: 1px solid red;
  }
  li {
    float: left;
    display: block;
    padding: 4px;
    white-space: nowrap;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 14px;
    margin: 0 2px;
  }
}
</style>
