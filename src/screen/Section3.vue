<template>
  <div id='section1'>
    <obg-scroll-view ref='sv' scrollKey='section3' >
      <div class="e_title" id='part1' @click='bookmark("part1", "OUTSIDE AIR QUALITY AND DEODORISATION")' >
        <h2>OUTSIDE AIR QUALITY AND DEODORISATION
        <!--
        <strong class="obg-icon-svp-check_green"></strong>
        -->
        </h2>
        <div class="btn-area">
            <div class="select"></div>
            <div class="mark" :class='"obg-icon-svp-bookmark" + (isBookmark($route.name + "part1") ? "-sel" : "")' ></div>
        </div>
      </div>	
      <div class="e_content">
        <img src="img/img_12.gif" alt="" height="" width="" class="alignleft">
        <p>With the air conditioning switched on, from the screen A, select Menu, Vehicle, Take care.</p>

        <br>

        <h3>Outside air quality</h3>
        <p>The air quality is given using a graph on the multifunction screen.</p>
        <p>Three colours indicate the air quality level (from the cleanest to the most polluted):</p>
        <p>1 (blue)<br>
        2 (light grey)<br>
        3 (grey)</p>

        <br>
        
        <img src="img/img_13.gif" alt="" height="" width="" class="alignright">
        <h3>Deodorisation function</h3>
        <p>This reduces unpleasant odours in the passenger compartment.</p>
        <br>
        <h4>Deodorization cycle</h4>
        <p>– ON: helps to reduce the unpleasant odour more quickly in the passenger compartment,</p>
        <p>– OFF: stop the function.</p>
        <br>
        <h4>Note:</h4>
        <p>– ON: helps to reduce the unpleasant odour more quickly in the passenger compartment,</p>
        <p>The function is on a timer. It stops automatically after a few minutes.</p>
      </div>


    </obg-scroll-view>
  </div>
</template>

<script>
import scrollView from 'obigo-js-ui-rnbs/components/scroll-view'
import page from 'obigo-js-ui/mixins/page'
import Bookmark from '../data/Bookmark'

export default {
  name: 'home',
  mixins: [page],
  components: {
    'obg-scroll-view': scrollView
  },
  data () {
    return {}
  },
  methods: {
    isBookmark (key) {
      return Bookmark.isBookmark(key)
    },
    bookmark (id, title) {
      const key = this.$route.name + id
      if (Bookmark.isBookmark(key)) {
        Bookmark.remove(key)
      } else {
        Bookmark.add({
          key: key,
          id: id,
          title: title,
          page: {
            name: this.$route.name,
            title: this.title
          }
        })
      }
      this.$forceUpdate()
    }
  },
  mounted () {
    this.title = 'Your comfort'

    const id = this.$route.params.id
    id && this.$refs.sv.$scroll.scrollToElement(document.getElementById(id), 0)
  }
}
</script>

<style lang="scss">
@import './section.scss';
#section1{
    width: 1154px;
    .obg-scroll-view{
        height: 650px;
        .e_title{
            background-color: transparent;
            min-height: 103px;
            display: flex;
            align-items: center;
            & > h2{
                font-size: 33px;
                line-height: 43px;
            }
            .btn-area{
                position: absolute;
                right: 60px;
                top: 32px;
                overflow: hidden;
                .mark{
                    margin-top:0;
                    width:28px;
                    height:39px;
                    background: url('./img/mark.png') no-repeat;
                    &.obg-icon-svp-bookmark{
                        background-position: 0 0;
                    }
                    &.obg-icon-svp-bookmark-sel{
                        background-position: -28px 0;
                    }
                }
                .select{
                    float: left;
                    width:33px;
                    height:22px;
                    margin: 8px 59px 0 0;
                    background: url('./img/select.png') no-repeat;
                }
            }
        }
        .e_content{
            background-color: transparent;
            border-top: 1px solid #31345f;
            border-bottom: 1px solid #31345f;
            &:last-child{
                border-bottom: none;
            }
            h3, p{
                font-size: 33px;
            }
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
</style>
