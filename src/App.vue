<template>
  <div id='app'>
    <!-- <obg-footer :mask=false @back='onBack' @input='selectMenu' :options='options' :animation="footerAnimation"></obg-footer> -->
    <ul class="gnb">
      <li class="back" @click="onBack"></li>
      <li class="home" @click="onHome"></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import footer from 'obigo-js-ui-rnbs/components/footer'

export default {
  name: 'home',
  components: {
    'obg-footer': footer
  },
  data () {
    return {
      options: [{
        name: 'bookmark',
        label: 'Bookmark'
      }]
    }
  },
  computed: {
    footerAnimation () {
      return !(this.$route.path === '/')
    }
  },
  methods: {
    onBack ({mode}) {
      if (typeof mode !== 'undefined' && (mode !== this.$hardkey.getCodes().mode.HARDKEY_MODE_RELEASE && mode !== this.$hardkey.getCodes().mode.HARDKEY_MODE_NONE)) return
      if (this.$route.path === '/') {
        window.applicationFramework.applicationManager.getOwnerApplication(window.document).back()
      } else {
        this.$router.back()
      }
    },
    onHome () {
      if (window.applicationFramework) {
        window.applicationFramework.applicationManager.getOwnerApplication(window.document).home()
      }
    },
    selectMenu (evt) {
      this.$router.push(evt)
    },
    messageHandler (data, origin) {
      const filterName = origin.split('filter-name=')[1]
      if (filterName === 'MANUAL') {
        data = JSON.parse(data)
        if (this.$route.name === data.page && data.page !== 'main') {
          this.$children[1].$refs.sv.$scroll.scrollToElement(document.getElementById(data.id), 0)
        } else {
          this.$router.push({
            name: data.page,
            params: {
              id: data.id
            }
          })
        }
        setTimeout(() => {
          this.application.show()
        }, 0)
      }
    }
  },
  mounted () {
    if (window.applicationFramework) {
      this.application = window.applicationFramework.applicationManager.getOwnerApplication(window.document)
      this.application.registerMessageListener('MANUAL')
      this.application.addEventListener('ApplicationMessage', this.messageHandler, false)
      this.$hardkey.addHardkeyListener(this.$hardkey.getCodes().code.HARDKEY_BUTTON_BACK, (e) => {
        this.onBack(e)
      })
    }
  }
}
</script>

<style lang="scss">

@font-face {
  font-family:'NotoSansCJKkr-Regular';
  src: local('Noto Sans CJK KR Regular');
}
@font-face {
  font-family:'NotoSansCJKkr-Medium';
  src: local('Noto Sans CJK KR Medium');
}
#app{
  font-family:'NotoSansCJKkr-Regular';
  position: relative;
  width: 1280px;
  height: 650px;
  display: flex;
  flex-direction: row;
  background: #0b0d1f;
  .gnb {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 126px;
    height: 100%;
    background: url("./img/gnb_bg.png") no-repeat;
    li{
        width: 100%;
        height: 100px;
        background: url('./img/ico_gnb.png') no-repeat;
        &.back{
            margin-top:10px;
            &:active{
                background-position: -126px 0;
            }
        }
        &.home{
            margin-bottom: 17px;
            background-position: 0 -100px;
            &:active{
                background-position: -126px -100px;
            }
        }
        
    }
  }
}
</style>
