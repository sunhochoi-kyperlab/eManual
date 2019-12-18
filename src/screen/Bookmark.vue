<template>
  <div id='bookmark'>
    <div class='no-list' v-if='bookmarks.length === 0' >
      <div>There is no bookmarked item.</div>
    </div>
    <obg-list v-if='bookmarks.length > 0' >
      <obg-list-item v-for='item in bookmarks' @click='goToPage(item)' >
        <div class='content' >{{item.page.title + ' > ' + item.title}}</div>
        <div class='tail' @click.stop='toggleBookmark(item)' >
          <div class='icon' :class='"obg-icon-svp-bookmark" + (bm[item.key] ? "-sel" : "")' />
        </div>
      </obg-list-item>
    </obg-list>
  </div>
</template>

<script>
import {list, listItem} from 'obigo-js-ui-rnbs/components/list'
import Bookmark from '../data/Bookmark'
import page from 'obigo-js-ui/mixins/page'

export default {
  name: 'home',
  mixins: [page],
  components: {
    'obg-list': list,
    'obg-list-item': listItem
  },
  data () {
    return {
      bookmarks: Bookmark.getList().slice(),
      bm: Bookmark.getMap()
    }
  },
  methods: {
    toggleBookmark (item) {
      if (Bookmark.isBookmark(item.key)) {
        Bookmark.remove(item.key)
      } else {
        Bookmark.add(item)
      }
      this.$forceUpdate()
    },
    goToPage (item) {
      this.$router.push({
        name: item.page.name,
        params: {
          id: item.id
        }
      })
    }
  },
  mounted () {
    console.log(this.bookmarks)
  }
}
</script>

<style lang="scss">
#bookmark{
  /*height:100%;*/
  height: 320px;
  font-size:32px;
  .obg-list .obg-list-item{
    min-height: 104px;
    height: 104px;
    background-color: transparent;
    border-bottom: 1px solid #31345f;
    &::before{
        display: none;
    }
    .content{
        font-size: 33px;
        line-height: 41px;
        margin: 0 48px;
    }
    .tail{
        margin-right: 60px;
        .icon{
            width:28px;
            height:39px;
            background: url('./img/mark.png') no-repeat;
            margin:0;
            &.obg-icon-svp-bookmark-sel{
                background-position: -28px 0;
            }
        }   
    }
  }
  .no-list{
    display:flex;
    height:100%;
    padding-bottom:80px;
    width:100%;
    align-items:center;
    justify-content:center;
  }

  .icon{
    width:49px;
    height:49px;
  }
}

</style>

