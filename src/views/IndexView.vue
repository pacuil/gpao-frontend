<script setup lang="ts">
import { computed, ref } from 'vue'
import { showToast } from 'vant'

const searchValue = ref('')
const onSearch = (val: string) => showToast(val)
const onCancel = () => {
  isFocus.value = false
  // showToast('取消')
}
const isFocus = ref(false)
const close = (id: number) => {
  activeIds.value = activeIds.value.filter(item => {
    if (item == id) {
      return false
    }
    return true
  })

}

const activeIds = ref<number[]>([])
const activeIndex = ref(0)
// const selectedTags=ref<string[]>([])
const selectedTags = computed(() => {
  // return items.flatMap(item => item.children).filter(item => activeIds.value.includes(item.id))
  const tempItems = items.value.flatMap(item => item.children)
  return activeIds.value.map(id => tempItems[id - 1])
})
const items = ref([
  {
    text: '性别',
    children: [
      { text: '男', id: 1 },
      { text: '女', id: 2 }
    ]
  },
  {
    text: '爱好',
    children: [
      { text: '唱', id: 3 },
      { text: '跳', id: 4 },
      { text: 'rap', id: 5 },
      { text: '篮球', id: 6 }
    ]
  },
  {
    text: '搜索',
    children: []
  }
])

/**
 * 添加标签
 */
const addTag = () => {
  console.log(selectedTags.value)
}
/**
 * 搜索操作(过滤出相似标签)
 */
const doSearch = () => {
  items.value[(items.value.length) - 1]!.children = items.value.flatMap(item => item.children).filter(item => item.text == searchValue.value)
}

const userList = ref(
  [
    {
      id: 1,
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      nickName: '韶华',
      gender: '男',
      age: 18,
      birth: '2000-1-1',
      profile: '一个正在变强的developer'
    },
    {
      id: 1,
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      nickName: '韶华',
      gender: '男',
      age: 18,
      birth: '2000-1-1',
      profile: '一个正在变强的developer'
    }, {
    id: 1,
    avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    nickName: '韶华',
    gender: '男',
    age: 18,
    birth: '2000-1-1',
    profile: '一个正在变强的developer'
  },
    {
      id: 1,
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      nickName: '韶华',
      gender: '男',
      age: 18,
      birth: '2000-1-1',
      profile: '一个正在变强的developer'
    },
    {
      id: 1,
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      nickName: '韶华',
      gender: '男',
      age: 18,
      birth: '2000-1-1',
      profile: '一个正在变强的developer'
    },
    {
      id: 1,
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      nickName: '韶华',
      gender: '男',
      age: 18,
      birth: '2000-1-1',
      profile: '一个正在变强的developer'
    },
    {
      id: 1,
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      nickName: '韶华',
      gender: '男',
      age: 18,
      birth: '2000-1-1',
      profile: '一个正在变强的developer'
    },
    {
      id: 1,
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      nickName: '韶华',
      gender: '男',
      age: 18,
      birth: '2000-1-1',
      profile: '一个正在变强的developer'
    },
    {
      id: 1,
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      nickName: '韶华',
      gender: '男',
      age: 18,
      birth: '2000-1-1',
      profile: '一个正在变强的developer'
    },
    {
      id: 1,
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      nickName: '韶华',
      gender: '男',
      age: 18,
      birth: '2000-1-1',
      profile: '一个正在变强的developer'
    },
    {
      id: 1,
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      nickName: '韶华',
      gender: '男',
      age: 18,
      birth: '2000-1-1',
      profile: '一个正在变强的developer'
    },
    {
      id: 1,
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      nickName: '韶华',
      gender: '男',
      age: 18,
      birth: '2000-1-1',
      profile: '一个正在变强的developer'
    }
  ])

</script>

<template>
  <div id="indexView">
    <div v-if="!isFocus">
      <van-search v-model="searchValue" placeholder="请输入搜索关键词" @focus="isFocus=true" />
      <van-card
        v-for="user in userList"
        :key="user.id"
        style="margin: 12px;margin-bottom: 20px"
        :desc="user.profile"
        :title="user.nickName"
        :thumb="user.avatar"
      >
        <template #tags>
          <van-space :wrap="true">
            <van-tag plain type="primary">唱</van-tag>
            <van-tag plain type="primary">跳</van-tag>
            <van-tag plain type="primary">rap</van-tag>
            <van-tag plain type="primary">篮球</van-tag>
          </van-space>
        </template>
        <template #footer>
          <van-button size="mini">联系我</van-button>
        </template>
      </van-card>
    </div>
    <div v-else>
      <form action="/">
        <van-search
          v-model="searchValue"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @blur="doSearch"
          @cancel="onCancel"
        />
      </form>
      <van-space direction="vertical" :wrap="true" style="padding: 0 16px;width: 94%">
        已选标签
        <van-space :wrap="true" direction="horizontal">
          <van-tag type="primary" closeable @close="close(item!.id)" v-for=" item in selectedTags"
                   :key="item!.id">
            {{ item!.text }}
          </van-tag>
        </van-space>
        <hr />
        可选标签
        <van-tree-select
          style="width: 100%;"
          @click-item="addTag"
          v-model:active-id="activeIds"
          v-model:main-active-index="activeIndex"
          :items="items"
        >
          <template #content
                    v-if="activeIndex===2 && (items[(items.length)-1]!.children.length===0)">
            <van-empty description="暂无搜索结果" />
          </template>
        </van-tree-select>
        <van-button type="primary" block>确认</van-button>
      </van-space>
    </div>
  </div>
</template>

<style scoped>
* {
  overflow: hidden;
  overflow-y: auto;
}
</style>
