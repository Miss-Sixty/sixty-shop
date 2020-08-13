# 工具栏

<img :src="$withBase('/img/toolsbar.png')">

## 引入

```vue
<script>
import LeToolsBar from "@/components/leToolsBar";
export default {
  components: {
    LeToolsBar,
  },
};
</script>
```

## 显示 input

<img :src="$withBase('/img/input.png')">

```vue
<template>
  <le-tools-bar :toolsItem="toolsItem" />
</template>

<script>
data(){
  return{
     toolsItem: [
      {
        type: "input",
        value: "nickName",
        placeholder: "请输入昵称",
      },
     ]
  }
}
</script>
```

::: warning 提示
光显示一个输入框是无法使用此工具栏的，所以需要加上搜索按钮。
:::

## 显示 搜索按钮

<img :src="$withBase('/img/search.png')">

添加`search`属性会在工具栏添加搜索按钮，`@searchChange`为点击按钮执行事件。

`v-model`会合并表格请求数据，合并参数的值为 toolsItem.value，然后通过`@searchChange`重新请求表格数据来达到搜索目的

```vue
<template>
  <le-tools-bar :toolsItem="toolsItem" search @searchChange="getListData" />
</template>

<script>
data(){
  return{
     toolsItem: [
      {
        type: "input",
        value: "nickName",
        placeholder: "请输入昵称",
      },
     ],
  }
}
</script>
```

## 显示 日期

<img :src="$withBase('/img/date.png')">

直接添加`date`便可显示日期

```vue
<template>
  <le-tools-bar date search @searchChange="getListData" />
</template>

<script>
data(){
  return{
toolsItem: [
      {
        type: "input",
        value: "nickName",
        placeholder: "请输入昵称",
      },
     ],
  }
}
</script>
```

## 显示 下拉框

<img :src="$withBase('/img/select.png')">

在 toolsItem 中添加对象，type 为 select，options 中为下拉框显示内容

```vue
<template>
  <le-tools-bar :toolsItem="toolsItem" search @searchChange="getListData" />
</template>

<script>
data(){
  return{
    toolsItem: [
        {
        type: "select",
        value: "isVip",
        placeholder: "请选择",
        options: [
          {
            value: "10",
            label: "会员"
          },
          {
            value: "20",
            label: "非会员"
          }
        ]
      }
    ]
  }
}
</script>
```

## 显示 新增按钮

<img :src="$withBase('/img/add.png')">

添加`add`属性会在工具栏添加搜索按钮，`@addChange`为点击按钮执行事件。

```vue
<template>
  <le-tools-bar add @addChange="addChange" />
</template>
```

## API

### Props

| 参数      | 说明                  | 类型    | 默认值 |
| --------- | --------------------- | ------- | ------ |
| v-model   | 合并搜索输入的值      | object  |        |
| toolsItem | 显示`input`、`select` | array   |        |
| date      | 显示日期              | boolean | false  |
| add       | 显示添加按钮          | boolean | false  |
| search    | 显示搜索按钮          | boolean | false  |

### Events

| 事件名       | 说明             | 回调参数       |
| ------------ | ---------------- | -------------- |
| addChange    | 点击添加按钮触发 | _event: Event_ |
| searchChange | 点击搜索按钮触发 | _event: Event_ |
