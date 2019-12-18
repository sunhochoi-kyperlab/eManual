<template>
<div id="gadget" @click="onClickJog">
  <div class="header">
    <div>E-Manual</div>
  </div>
  <div class="body">
    <div id='large-body'>
      <div class='content' >
        <div class='icon' >
          <img :src='getIconPath()' />
        </div>
        <div class='title' >Kadjar<br/>User Manual</div>
      </div>
    </div>
    <div id='medium-body'>
      <div class='icon' >
        <img :src='getIconPath()' />
      </div>
      <div class='title' >Kadjar<br/>User Manual</div>
    </div>
    <div id='small-body'>
      <img :src='getIconPath()' />
    </div>
    <div class='buttons' @click.stop='goToBookmark' >
      <div class='bm-btn'>
        <div class='icon obg-icon-svp-bookmark' ></div>
        <div class='bookmark' >Bookmark</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import button from 'obigo-js-ui/components/button'
export default {
  name: 'home',
  components: {
    'obg-button': button
  },
  data () {
    return {
      issueList: [],
      wd: {}
    }
  },
  methods: {
    getIconPath () {
      return this.wd.localURI + this.wd.iconSrcPath
    },
    goToBookmark () {
      console.log('dsf')
      const aicOrigin = 'http://www.obigo.com/svp/emanual?filter-name=' + 'MANUAL'
      this.application.postMessage(JSON.stringify({page: 'bookmark'}), aicOrigin, null)
      this.application.fullscreen()
    },
    onClickJog () {
      window.applicationFramework.applicationManager.getOwnerApplication(window.document).fullscreen()
    }
  },
  beforeDestroy () {
  },
  mounted () {
    this.application = window.applicationFramework.applicationManager.getOwnerApplication(window.document)
    this.wd = this.application.getDescriptor()
    /*
    this.aicOrigin = 'http://www.obigo.com/svp/emanual?filter-name='
    this.application.registerMessageListener(GADGET_READY)
    this.application.registerMessageListener(SYNC)
    this.application.registerMessageListener(DETAIL)
    this.application.addEventListener('ApplicationMessage', this.messageHandler, false)
    this.application.addEventListener('ApplicationShown', (e) => {
      console.log('gadet shown')
      this.application.postMessage('NULL', this.aicOrigin + GADGET_READY, null)
    }, false)
    */
  }
}
</script>

<style lang="scss">
@import './css/l.scss';
@import './css/m.scss';
@import './css/s.scss';
.header{
  display:flex;
  align-items:center;
  justify-content:flex-start;
  font-size:32px;
  padding-left:15px;
  color:white;
}
#large-body {
  flex:1;
  color:white;
  justify-content:center;
  flex-direction:column;
  align-items:stretch;
  height:100%;
  width:100%;
  .content{
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:row;
    flex:1;
    font-size:42px;
    .icon{
      width:71px;
      height:71px;
    }
    .title{
      text-align:center;
      width:210px;
    }
  }
  .footer{
    display:flex;
    height:80px;
    border-top:1px solid #292929;
  }
}
#medium-body {
  color:white;
  justify-content:space-around;
  flex-direction:row;
  align-items:center;
  height:100%;
  width:100%;
  flex:1;
  font-size:42px;
  .icon{
    width:71px;
    height:71px;
  }
  .title{
    text-align:center;
    width:210px;
  }
}
#small-body {
  color:white;
  justify-content:center;
  flex-direction:row;
  align-items:center;
  height:100%;
  width:100%;
  font-size:32px;
  flex:1;
  img{
    width:71px;
    height:71px;
  }
}
.buttons{
  height:80px;
  border-top:1px solid #494949;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  .bm-btn{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    .icon{
      width:49px;
      height:49px;
    }
    .bookmark{
      padding-left:10px;
      color:white;
      font-size:32px;
    }
  }
}
</style>
