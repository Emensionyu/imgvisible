<template>
  <div class="select-type">
    <el-popover placement="bottom" width="160" trigger="click" class="bi-popover" v-model="visible">
      <ul class="bi-property__select">
        <li
          class="bi-property__select__item clearfixed"
          :class="{active:selectType=='number'}"
          @click="changeType('number')"
        >
          <span class="bi-property__select__item__icon">
            <span class="bi-icon-al-number"></span>
          </span>

          <span class="bi-property__select__item__label">数字</span>
        </li>

        <li
          class="bi-property__select__item clearfixed"
          :class="{active:selectType=='percent'}"
          @click="changeType('percent')"
        >
          <span class="bi-property__select__item__icon">
            <span class="bi-icon-al-percent"></span>
          </span>

          <span class="bi-property__select__item__label">百分比</span>
        </li>
      </ul>
      <div class="bi-property-btn__icon" :class="{active:visible}" slot="reference">
        <span :class="[selectType=='number'&&visible? 'bi-icon-al-number-active':'bi-icon-al-percent-active']"
        v-if="visible"></span>
        <span :class="[selectType=='number'&&!visible ? 'bi-icon-al-number':'bi-icon-al-percent']"
        v-else></span>
      </div>
    </el-popover>

  </div>
</template>

<script>
export default {
    props:["selectType"],
  data() {
    return {
      active: false,
    //   select: "number",
      visible: false
    };
  },
  methods: {
    changeType(val) {
    //   this.select = val;
      this.visible = false;
      this.$emit('select:type',val)
    },
    changeActive() {
      this.active = true;
      this.visible = true;
    }
  }
};
</script>

<style lang="less" scoped>
.select-type{
    margin: 0;
}
.bi-popover.bi-popover-property-edit {
  padding: 8px 0;
//   -webkit-border-radius: 2px;
  border-radius: 3px;
  background-color: #fff;
  -webkit-box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
}
.bi-property-btn {
  min-width: 72px;
}
.bi-property-btn__icon {
  margin: 0;
  width: 30px;
  height: 31px;
  line-height: 30px;
  border-left: 1px solid #ddd;
  background-color: #fff;
//   -webkit-border-radius: 3px;
 border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  color: #666;
  cursor: pointer;
  overflow: hidden;
}
.bi-property-btn__icon.active [class^="bi-icon-"] {
  background-color: #3487e2;
}
.bi-property-btn__icon:hover{
    background: #3487e2;
}
.bi-icon-al-percent-active {
  background-image: url(../images/sprite.png);
  background-position: -76px -228px;
  width: 32px;
  height: 32px;
}
.bi-property-btn__label {
// width: 20px;
  margin-top: 4px;
  text-align: center;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
}
.bi-property__select__item.active,
.bi-property__select__item:hover {
  background-color: #f2f3f7;
}

.bi-property__select__item {
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  color: #545d66;
  font-size: 12px;
}
.clearfixed,
.fn-clear {
  zoom: 1;
}
.bi-property__select__item__icon {
  margin-right: 12px;
}

.bi-property__select__item__icon,
.bi-property__select__item__label {
  // float: left;
  display: inline-block;
  height: 100%;
}
.bi-property__select__item [class^="bi-icon-"] {
  margin-top: 4px;
  width: 24px;
  height: 24px;
}

.bi-icon-al-number {
  background-image: url(../images/sprite.png);
  background-position: -228px -152px;
  width: 32px;
  height: 32px;
}
.bi-icon-al-number:hover{
    .bi-icon-al-number-active 
}
.bi-icon-al-percent:hover{
    .bi-icon-al-percent-active 
}

.bi-icon-al-percent-active {
    background-image: url(../images/sprite.png);
    background-position: -76px -228px;
    width: 32px;
    height: 32px;
}
.bi-icon-al-number-active {
    background-image: url(../images/sprite.png);
    background-position: -228px -114px;
    width: 32px;
    height: 32px;
}

[class^="bi-icon-"] {
  display: inline-block;
}
.bi-icon-al-percent {
  background-image: url(../images/sprite.png);
  background-position: -114px -228px;
  width: 32px;
  height: 32px;
}
</style>