<template>
  <div id='main'>
    <div class="middle-content">
        <p class="hello">Hello :)<br/>Have a nice day!</p>
        <div class="img-area"></div>
        <p class="manual">Clio E-manual</p>
    </div>
    <obg-list >
      <obg-list-item v-for='item in menu' @click='goToSection(item)' >
        <div class='content' v-if="item.page == 'bookmark'">My<br/>Bookmarks</div>  
        <div class='content' v-else>{{item.title}}</div>
        <i v-if="item.page == 'bookmark'"></i>
        <!-- <div class="tail"><i class="obg-icon-chevron-right" /></div> -->
      </obg-list-item>
    </obg-list>
  </div>
</template>

<script>
import {list, listItem} from 'obigo-js-ui-rnbs/components/list'
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
      options: [{
        name: '0',
        label: 'Bookmark'
      }, {
        name: '1',
        label: 'Recent items'
      }],
      menu: [{
        title: 'My\nBookmarks',
        page: 'bookmark'
      }, {
        title: 'BASIC',
        page: '1'
      }, {
        title: 'Driving',
        page: '2'
      }, {
        title: 'Your comfort',
        page: '3'
      }, {
        title: 'Maintenance',
        page: '4'
      }, {
        title: 'Practical advice',
        page: '5'
      }]
    }
  },
  methods: {
    goToSection (item) {
      this.$router.push(item.page)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  #main{
    width: 1154px;
    display: flex;
    flex-direction: row;
    .middle-content{
        width: 826px;
        padding: 47px 0 0 58px;
        p{
            font-size: 33px;
            color: #fff;
            line-height: 47px;
            &.manual{
                text-align: center;
            }
        }
        .img-area{
            width: 710px;
            height: 389px;
            background: url('../img/car.png') no-repeat;
            margin: 31px 0 11px;
        }
    }
    .obg-list{
        width: 328px;
        height: 650px;
        padding-top: 20px;
        .obg-list-item{
            background-color: #212347; 
            width: 285px;
            height: 94px;
            margin-bottom: 16px;
            position: relative;
            display: flex;
            align-items: center;
            &:before{
                display: none;
            }
            .content{
                font-size: 33px;
                color:#fff;
                margin: 0 20px;
                line-height: 37px;
            }
            i{
              display: block;
              width: 28px;
              height: 39px;
              background: url('./img/mark.png') no-repeat;
              position: absolute;
              right: 19px;
              top: 15px;
            }
            &:active, &.active{
                background-color: #3a3d60;
            }
        }
        .dummy-item{
            height: 20px;
        }
        .iScrollVerticalScrollbar.iScrollLoneScrollbar{
            width: 10px !important;
            .iScrollIndicator{
                border: none !important;
                background: #2f294c !important;
            }
        }
    }
  }
  .obg-icon-chevron-right{
    font-size: 71px;
  }
</style>
