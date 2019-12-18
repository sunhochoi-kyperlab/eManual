<template>
  <div id='section1'>
    <obg-scroll-view ref='sv' scrollKey='section3' >

      <div class="e_title" id='part1' @click='bookmark("part1", "OPENING AND CLOSING THE DOORS")' >
        <h2>OPENING AND CLOSING THE DOORS
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
        <img src="img/img_22.gif" alt="" height="" width="" class="alignleft">
        <p>In the event of a puncture, use the kit located in the boot, underneath the boot carpet.</p>
        
        <br>

        <h4>With the engine running and the parking brake applied,</h4>
        <p>– Unscrew the cap from recess 3 on the bottle;</p>
        <p>– unscrew the bottle cap 2;</p>
        <p>– screw the bottle 2 onto the compressor at the bottle recess point 3;</p>
        <p>– unscrew the valve cap on the relevant wheel and screw the inflation adapter 6 onto the valve;</p>
        <p>– disconnect any accessories previously connected to the vehicle’s accessories sockets;</p>
        <p>– the plug 4 must be connected to the vehicle accessories socket;</p>
        <p>– press switch 5 to inflate the tyre to the recommended pressure (please refer to the information in the section on “Tyre pressure”);</p>
        <p>– after a maximum of 10 minutes, stop inflating and read the pressure (on pressure gauge 1).</p>
        <p>Note: while the container is emptying (approximately 30 seconds), the pressure gauge 5 will briefly indicate a pressure of up to 6 bar. The pressure will then drop.</p>
        <p>– adjust the pressure: to increase it, continue inflating with the kit.</p>

        <br>

        <p>If the recommended pressure of 1.8 bar cannot be achieved after 10 minutes, repair is impossible. Do not drive the vehicle. Consult an authorised dealer.</p>
        
        <br>
        
        <img src="img/img_23.gif" alt="" height="" width="" class="alignleft">
        <p>Once the tyre is correctly inflated, remove the kit: slowly unscrew the inflation adapter 6 to prevent any repair product from escaping and store the container in plastic packaging to prevent the product from escaping.</p>
        
        <br>

        <p>– Affix the driving recommendation label to the dashboard where it can easily be seen by the driver;</p>
        <p>– Put the kit away.</p>
        <p>– At the end of this initial inflation operation, air will still escape from the tyre. You must drive a short distance in order to seal the hole.</p>
        <p>– Start immediately and drive at between 12 and 40 mph (20 and 60 km/h) in order to distribute the product evenly in the tyre and, after driving for 2 miles (3 km), stop and check the pressure.</p>
        <p>– If the pressure is greater than 1.3 bar but less than the recommended pressure (refer to the label affixed to the edge of the driver’s door), readjust it. Otherwise, please contact an authorised dealer: the tyre cannot berepaired.</p>

        <br>

        <h3>Precautions when using the kit</h3>
        <p>The kit should not be operated for more than 10 consecutive minutes.</p>
      </div>

      <div class="e_title" id='part2' @click='bookmark("part2", "BATTERY")' >
        <h2>BATTERY
        <!--
        <strong class="obg-icon-svp-check_green"></strong>
        -->
        </h2>
        <div class="mark" :class='"obg-icon-svp-bookmark" + (isBookmark($route.name + "part2") ? "-sel" : "")' ></div>
      </div>	
      <div class="e_content">

        <h3>To avoid all risk of sparks:</h3>
        <p>– Ensure that any consumers (courtesy lights, etc.) are switched off before disconnecting or reconnecting the battery;</p>
        <p>– when charging, stop the charger before connecting or disconnecting the battery;</p>
        <p>– to avoid creating a short circuit between the terminals, do not place metal objects on the battery;</p>
        <p>– always wait at least one minute after the engine has been switched off before disconnecting a battery;</p>
        <p>– make sure that you reconnect the battery terminals after refitting.</p>
        
        <br>

        <h3>Connecting a battery charger</h3>
        <p>The battery charger must be compatible with a battery with nominal voltage of 12 volts.</p>
        <p>Do not disconnect the battery when the engine is running. Follow the instructions given by the manufacturer of the battery charger you are using.</p>

        <br>

        <h3>Starting the vehicle using the battery from another vehicle</h3>

        <p>If you have to use the battery from another vehicle to start, obtain suitable jump leads (with a large cross section) from an approved dealer or, if you already have jump leads, ensure that they are in perfect condition.</p>
        <p>The two batteries must have an identical nominal voltage of 12 volts. The battery supplying the current should have a capacity (amp-hours, Ah) which is at least the same as that of the discharged battery.</p>
        <p>Ensure that there is no risk of contact between the two vehicles (risk of short circuiting when the positive terminals are connected) and that the discharged battery is properly connected. Switch off your vehicle ignition.</p>
        <p>Start the engine of the vehicle supplying the current and run it at a moderate speed.</p>
        
        <br>

        <img src="img/img_24.gif" alt="" height="" width="" class="alignleft">
        <p>Lift the cover and then the red terminal cap 1 (+).</p>
        <p>Connect the positive cable A to the terminal 1 (+), then to the terminal 4 (+) of the battery supplying the current.</p>
        <img src="img/img_25.gif" alt="" height="" width="" class="alignright">
        <p>Connect the negative cable B to the terminal 3 (–) of the battery supplying the current and then to the terminal 2 (–).</p>
        <p>Start the engine, and as soon as it starts running, disconnect cables A and B in reverse order ( 2 - 3 - 4 - 1).</p><br>
      </div>



    </obg-scroll-view>
  </div>
</template>

<script>
import scrollView from 'obigo-js-ui-rnbs/components/scroll-view'
import Bookmark from '../data/Bookmark'
import page from 'obigo-js-ui/mixins/page'

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
    this.title = 'Practical advice'

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
