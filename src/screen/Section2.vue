<template>
  <div id='section1'>
    <obg-scroll-view ref='sv' scrollKey='section2' >
      <div class="e_title" id='part1' @click='bookmark("part1", "TYRE PRESSURE MONITORING SYSTEM")' >
        <h2>TYRE PRESSURE MONITORING SYSTEM
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
        <img src="img/img_09.gif" alt="" height="" width="" class="alignleft">
        <p>If the vehicle is equipped with the function, this system monitors the tyre pressure.</p>
        
        <br>
        
        <h3>Operating principle</h3>
        <p>Each wheel (except for the emergency spare wheel) has a sensor in the inflation valve which periodically measures the tyre pressure.</p>
        <p>The system displays the current pressures on the instrument panel 1 and alerts the driver in the event of insufficient pressure.</p>
        
        <br>

        <h3>Resetting the standard level for the tyre pressures</h3>
        <p>This should be done:</p>
        <p>– when the standard tyre pressure needs to be changed to adapt to usage conditions (empty, carrying a load, motorway driving, etc.);</p>
        <p>– after swapping a wheel (however this practice is not recommended);</p>
        <p>– after changing a wheel.</p>
        <p>It should always be done after checking the tyre pressure of all four tyres when cold.</p>
        <p>Tyre pressures must correspond to the current usage of the vehicle (empty, carrying a load, motorway driving, etc.).</p>

        <br>

        <h4>Resetting procedure</h4>
        <p>With the ignition on:
        <p>– repeatedly and briefly press control 2 to select the tyre pressure display and the “Tyre pressure” function;</p>
        <p>– press and hold (around 3 seconds) the button 2 to launch the reset. The flashing tyres followed by the messages “Learning TP initiated” and then “Tyres location in progress” indicates that the reset request for the tyre pressure reference value has been acknowledged.</p>
        <p>Reset can take several minutes of driving.</p>
        <p>If the resetting is followed by short trips, the message “Tyres location in progress” can remain displayed after successive restarts.</p>
        
        <br>

        <h4>Note</h4>
        <p>The standard tyre pressure cannot be less than that recommended and indicated on the door frame.</p>
        
        <br>

        <img src="img/img_10.gif" alt="" height="" width="" class="alignleft">
        <h3>Display</h3>
        <p>The display 1 and the warning light 4 <img src="img/icon_29.gif" alt="" height="" width=""> on the instrument panel warn you of any tyre pressure faults (flat tyre, punctured tyre, system fault, etc.).</p>

        <br>

        <img src="img/img_11.gif" alt="" height="" width="" class="alignright">
        <h4>« Adjust tyre pressure »</h4>
        <p>A wheel B is shown in orange, the warning light 4 <img src="img/icon_29.gif" alt="" height="" width=""> comes on and the message “Adjust tyre pressure” appears.</p>
        <p>They indicate that a wheel is deflated.</p> 
        <p>Check and, if necessary, readjust the pressures of the four wheels when cold. The warning light 4 <img src="img/icon_29.gif" alt="" height="" width=""> goes off after a few minutes’ driving.</p>

        <br>
        
        <h4>« Puncture »</h4>
        <p>A wheel B is shown in red, the warning light 4 <img src="img/icon_29.gif" alt="" height="" width=""> comes on, the message “Puncture” appears and there is a beep. This message appears along with the <img src="img/icon_16.gif" alt="" height="" width=""> warning light.</p>
        <p>They indicate that the affected wheel is punctured or severely underinflated. Replace it or contact an approved dealer if it is punctured. Top up the tyre pressure if the wheel is deflated.</p>

        <br>

        <h4>“Check tyre pressure sensors”</h4> 
        <p>A wheel A disappears, the warning light 4 <img src="img/icon_29.gif" alt="" height="" width=""> flashes for several seconds then comes on continuously and the message “Check tyre pressure sensors” appears.</p>
        <p>This message appears along with the <img src="img/icon_16.gif" alt="" height="" width=""> warning light. They indicate that at least one wheel is not fitted with sensors (e.g. emergency spare wheel). Otherwise, consult an authorised dealer.</p>

        <br>

        <h4>“Tyres location failure”</h4> 
        <p>This message “Tyres location failure” appears when driving if one or more wheels have been fitted with sensors not recognised by Renault.</p>
        <p>Consult an approved dealer</p>

        <br>

        <h3>Readjustment of tyre pressures</h3> 
        <p>The tyre pressures should be adjusted when cold
        (please refer to the label located on the edge of the driver’s door). If the tyre pressures cannot be checked when the tyres are cold, the recommended pressures should be increased by 0.2 to 0.3 bar (3 PSI).</p>
        <p>Never deflate a hot tyre.</p>

        <br>

        <h3>Replacing wheels/tyres</h3> 
        <p>This system requires specific equipment (wheels, tyres, hubcaps, etc.). Please see the information on “Tyres” in Section 5.</p>
        <p>Contact an approved Dealer to fit new tyres and to find out about available accessories compatible with the system and available from your dealer network: the use of any other accessory could affect the correct operation of the system or damage a sensor.</p>

        <br>

        <h3>Emergency spare wheel</h3> 
        <p>If the vehicle is equipped with an emergency spare wheel, it will not have a sensor.<p>

        <br>

        <h3>Tyre repair product and inflation kit</h3> 
        <p>Because the valves are specially designed, only use equipment approved by the approved network. Please refer to “Tyre inflation kit” in Section 5.</p>
      </div>
      <div class="e_title" id='part2' @click='bookmark("part2", "DRIVING CORRECTION DEVICES AND AIDS")'>
        <h2>DRIVING CORRECTION DEVICES AND AIDS
        <!--
        <strong class="obg-icon-svp-check_green"></strong>
        -->
        </h2>
        <div class="mark" :class='"obg-icon-svp-bookmark" + (isBookmark($route.name + "part2") ? "-sel" : "")' ></div>
      </div>	
      <div class="e_content">
        <p>Depending on the vehicle, they will consist of:</p>
        <p>– ABS (anti-lock braking system) ;</p>
        <p>– ESC (electronic stability control) with understeer control and traction control;</p>
        <p>– emergency brake assist;</p>
        <p>– advanced traction control;</p>
        <p>– active emergency braking;</p>
        <p>– hill start assistance.</p>
        
        <br>

        <h3>ABS (anti-lock braking system)</h3>
        <p>Under heavy braking, the ABS prevents the wheels from locking, allowing the stopping distance to be managed and keeping control of the vehicle. Under these circumstances, the vehicle can be steered to avoid an obstacle whilst braking. In addition, this system can increase stopping distances, particularly on roads with low surface grip (wet ground etc.).</p>
        <p>You will feel a pulsation through the brake pedal each time the system is activated. The ABS does not in any way improve the vehicle's physical performance relating to the road surface and roadholding. It is still essential to follow the rules of good driving practice (such as driving at a safe distance from the vehicle in front etc.).</p>
        
        <br>

        <h4>Operating faults:</h4>
        <p>– <img src="img/icon_16.gif" alt="" height="" width=""> and <img src="img/icon_18.gif" alt="" height="" width=""> lit up on the instrumentpanel alongside messages “Check ABS”, “Check brakingsystem” and “Check ESC”: indicates the ABS, ESC and emergency brake assist are deactivated. Braking is always enabled;</p>
        <p>– <img src="img/icon_18.gif" alt="" height="" width="">, <img src="img/icon_12.gif" alt="" height="" width="">, <img src="img/icon_16.gif" alt="" height="" width=""> and <img src="img/icon_11.gif" alt="" height="" width=""> lit up on the instrument panel alongside the message “Braking system fault”: this indicates a fault in the braking system. </p>
        <p>In both cases, consult an approved dealer.</p>

        <br>
        
        <h3>Electronic stability control ESC with understeer control and traction control</h3>
        <p>Electronic stability control ESC</p>
        <p>This system helps you to keep control of the vehicle in critical driving conditions (avoiding an obstacle, loss of grip on a bend, etc.).</p>
        <h4>Operating principle</h4>
        <p>A sensor in the steering wheel detects the direction selected by the driver. </p>
        <p>Other sensors throughout the vehicle measure the actual direction. </p>
        <p>The system compares driver input to the actual trajectory of the vehicle and corrects the trajectory if necessary by controlling the braking of certain wheels and/or engine power. In the event that the system is engaged, indicator light <img src="img/icon_33.gif" alt="" height="" width=""> flashes on the instrument panel.</p>
        <h4>Understeer control</h4>
        <p>This system optimises the action of the ESC in the case of pronounced understeer (loss of front axle road holding).</p>
        <h4>Traction control</h4>
        <p>This system helps to limit wheelspin of the drive wheels and to control the vehicle when pulling away accelerating or decelerating.</p>
        <h4>Operating principle</h4>
        <p>Using the wheel sensors, the system measures and compares the speed of the drive wheels at all times and slows down their over-rotation. If a wheel is starting to slip, the system brakes automatically until the drive supplied becomes compatible with the level of grip under the wheel again.</p>
        <p>The system also adjusts the engine speed to the grip available under the wheels, independently of the pressure exerted on the accelerator pedal.</p>

        <h4>Operating faults</h4>
        <p>When the system detects an operating fault the message “Check ESC” and warning light <img src="img/icon_16.gif" alt="" height="" width=""> and <img src="img/icon_33.gif" alt="" height="" width=""> appear on the instrument panel. In this case, the ESC and traction control system are deactivated. Consult anauthorised dealer.</p>

        <br>

        <img src="img/img_26.gif" alt="" height="" width="" class="alignleft">
        <p style="margin-top:0;">Deactivating the function<br>(depending on vehicle)</p>
        <p>In some situations (driving on very wet ground: snow, mud, etc. or driving with snow chains fitted), the system may reduce the engine output to limit wheelspin. If this is not required, it is possible to deactivate the function by pressing switch 1.</p>
        <p>The message “TRACTION CONTROL OFF” is displayed on the instrument panel to inform you.</p>

        <p>The traction control system offers additional safety. It is recommended that you do not drive with the function disabled. Correct this as soon as possible by pressing the switch 1 again.</p>
        <p>Note: The function is reactivated automatically when the ignition is switched on or when a speed of approximately 24 mph (40 km/h) is exceeded.</p>
        <h3>Emergency brake assist</h3>
        <p>This system supplements the ABS and helps reduce vehicle stopping distances.</p>
        <h4>Operating principle</h4>
        <p>The system detects an emergency braking situation. In this case, the braking assistance immediately develops maximum power and may trigger ABS regulation. ABS braking is maintained as long as the brake pedal is not released.</p>
        <h4>Hazard warning lights illumination</h4> 
        <p>Depending on the vehicle, these may light up in the event of sudden deceleration.</p>
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
    this.title = 'Driving'

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
