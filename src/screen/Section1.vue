<template>
  <div id='section1'>
    <obg-scroll-view ref='sv' scrollKey='section1' >
      <div class="e_title" id='part1' @click='bookmark("part1", "OPENING AND CLOSING THE DOORS")' >
        <h2>OPENING AND CLOSING THE DOORS
        <strong class="obg-icon-svp-check_green" v-if='isOpen === true' ></strong>
        </h2>
        <div class="btn-area">
            <div class="select"></div>
            <div class="mark" :class='"obg-icon-svp-bookmark" + (isBookmark($route.name + "part1") ? "-sel" : "")' ></div>
        </div>
      </div>
      <div class="e_content">

        <img src="img/img_02.gif" alt="" height="" width="" class="alignleft" v-if='isOpen === false' >
        <img src="img/img_02-1.png" alt="" height="" width="" class="alignleft" v-if='isOpen === true' >
        <h3>Opening from the inside</h3>
        <p>Pull the handle 3.</p>
        <h3>Lights-on reminder buzzer</h3>
        <p>If you have switched off the ignition and left the lights switched on, a reminder buzzer will sound when a door is opened and if the light stalk is not in position AUTO.</p>

        <br>

        <img src="img/img_01.gif" alt="" height="" width="" class="alignright">
        <h3>Opening the doors from the outside</h3>
        <p>With the doors unlocked, pull handle 1.</p>
        <h4>Special feature on vehicles equipped with a RENAULT card </h4>
        <p>With the doors locked, press button 2 on handle 1 of one of the two front doors and pull towards you.</p>

        <br>

        <img src="img/img_03.gif" alt="" height="" width="" class="alignleft">
        <h3>Door/tailgate open buzzer</h3>
        <p>At a standstill, the warning light 4 lights up on the instrument panel alongside </p>
        <p>the warning light 5 <img src="img/icon_01.gif" alt="" height="" width=""> indicating the opening elements (door, boot) are open or incorrectly closed. </p>
        <p>Once the vehicle reaches a speed of approximately 12 mph (20 km/h), a warning light indicates the opening element(s) (door, boot) open of improperly closed, alongside the message “Boot open” or “Door open” and a beep will sound for around 40 seconds or until the opening element is closed.</p>

        <br>

        <img src="img/img_04.gif" alt="" height="" width="" class="alignright">
        <h3>Vehicle with manual door locking</h3>
        <p>To make it impossible for the rear doors to be opened from the inside, move lever 6 on each door and check from the inside that the doors are securely locked.</p>
      </div>


      <div class="e_title" id='seatbelt' @click='bookmark("seatbelt", "SEAT BELTS")' >
        <h2>SEAT BELTS
        <strong class="obg-icon-svp-check_green" v-if='isSeatbelt === true' ></strong>
        </h2>
        <div class="mark" :class='"obg-icon-svp-bookmark" + (isBookmark($route.name + "seatbelt") ? "-sel" : "")' ></div>
      </div>
      <div class="e_content">
        <img src="img/01.png" alt="" height="" width="" class="alignleft" v-if='isSeatbelt === false' >
        <img src="img/02.png" alt="" height="" width="" class="alignleft" v-if='isSeatbelt === true'  >
        <h3>Locking</h3>
        <p>Unwind the belt <strong>slowly and smoothly </strong>and ensure that buckle 3 locks into catch 5 (check that it is locked by pulling on buckle 3).</p>
        <p>If the belt jams, allow it to return slightly before attempting to unwind it again.</p>
        <p>If your seat belt is completely jammed, pull slowly, but firmly, so that just over 3 cm unwinds. Allow it to return slightly before attempting to unwind it again.</p>
        <p>If there is still a problem, contact an approved dealer.</p>

        <br>
      </div>

      <div class="e_title" id='part2' @click='bookmark("part2", "WARNING LIGHTS")'>
        <h2>WARNING LIGHTS</h2>
        <div class="mark" :class='"obg-icon-svp-bookmark" + (isBookmark($route.name + "part2") ? "-sel" : "")' ></div>
      </div>
      <div class="e_content">
        <img src="img/img_01.gif" alt="" height="" width="" class="alignleft">
        <h3>Instrument panelA:</h3>
        <p>lights up when the driver’s door is opened. </p>
        <p>In some cases, the appearance of a warning light is accompanied by a message.</p>

        <br>

        <h3><img src="img/icon_02.gif" alt="" height="" width=""> Side light warning light</h3>
        <h3><img src="img/icon_03.gif" alt="" height="" width=""> Main beam headlight telltale</h3>
        <h3><img src="img/icon_04.gif" alt="" height="" width=""> Dipped beam headlight telltale</h3>
        <h3><img src="img/icon_05.gif" alt="" height="" width=""> Front fog light tell-tale</h3>
        <h3><img src="img/icon_06.gif" alt="" height="" width=""> Rear fog light telltale</h3>
        <h3><img src="img/icon_07.gif" alt="" height="" width=""> Automatic main beam headlight</h3>
        <p>Please refer to the information on “External signals and lights” in Section 1.</p>

        <br>

        <h3><img src="img/icon_08.gif" alt="" height="" width=""> Left-hand direction indicator tell-tale</h3>
        <h3><img src="img/icon_09.gif" alt="" height="" width=""> Right-hand direction indicator tell-tale</h3>
        <h3><img src="img/icon_10.gif" alt="" height="" width=""> Low fuel level warning light</h3>
        <p>It lights up orange when the ignition or the engine is switched on and goes off after a few seconds. </p>
        <p>If it comes on orange while driving and is accompanied by a beep, fill up with fuel as soon as possible. There is only approximately 30 miles (50 km) worth of fuel left.</p>

        <br>

        <h3><img src="img/icon_11.gif" alt="" height="" width=""> STOP light</h3>
        <p>This lights up when the ignition or engine is switched on and goes out as soon as the engine is running. It comes on with other warning lights and/or messages, and is accompanied by a beep. </p>
        <p>It requires you to stop immediately, for your own safety, as soon as traffic conditions allow. Switch off the engine and do not restart it.</p>
        <p>Contact an approved Dealer.</p>

        <br>

        <h3><img src="img/icon_12.gif" alt="" height="" width=""> Brake circuit fault warning light</h3>
        <p>It lights up when the ignition or the engine is switched on and goes off after a few seconds. </p>
        <p>If it comes on during braking and is accompanied by the <img src="img/icon_11.gif" alt="" height="" width=""> warning light and a beep, it indicates that the fluid level in the circuit is low or that there is a braking system fault. Stop as soon as traffic conditions allow and contact an authorised dealer.</p>

        <br>

        <h3 id='bat' ><img src="img/icon_13.gif" alt="" height="" width=""> Battery charge warning light</h3>
        <p>It lights up when the ignition or the engine is switched on and goes off after a few seconds.</p>
        <p>If it comes on on the road, accompanied by the <img src="img/icon_11.gif" alt="" height="" width=""> warning light and a beep, this indicates an overload or discharge in the electrical circuit. </p>
        <p>Stop as soon as traffic conditions allow and contact an approved Dealer.</p>

        <br>

        <h3 id='lowpressure' ><img src="img/icon_14.gif" alt="" height="" width=""> Oil pressure warning light</h3>
        <p>It lights up when the ignition or the engine is switched on and goes off after a few seconds.</p>
        <p>If it comes on on the road, accompanied by the <img src="img/icon_11.gif" alt="" height="" width=""> warning light and a beep, stop immediately and cut the ignition.</p>
        <p>Check the oil level. If the level is normal, the indicator light is being lit by something else. Contact an approved Dealer.</p>

        <br>

        <h3><img src="img/icon_15.gif" alt="" height="" width=""> Variable power-assisted steering warning light</h3>
        <p>It lights up when the ignition or the engine is switched on and goes off after a few seconds.</p>
        <p>If it comes on while driving, alongside the warning light <img src="img/icon_11.gif" alt="" height="" width=""> , this means there is a system fault.</p>
        <p>Contact an authorised dealer.</p>

        <br>

        <h3><img src="img/icon_16.gif" alt="" height="" width=""> Warning light</h3>
        <p>This lights up when the ignition or engine is switched on and goes out as soon as the engine is running. It can light up in conjunction with other warning lights and/or messages on the instrument panel.</p>
        <p>It means you should <u>drive very carefully</u> to an approved dealer as soon as possible. If you fail to follow this recommendation, you risk damaging your vehicle.</p>

        <br>

        <h3><img src="img/icon_17.gif" alt="" height="" width=""> Toxic Fume Filter System Warning Light</h3>
        <p>On vehicles which are equipped with it, this light comes on when the engine is started and, depending on the vehicle, when the ignition is switched off if the vehicle is in the engine standby phase (refer to the information on the “Stop and Start Function” in section 2) then goes out.</p>
        <p>– If it lights up continuously, consult your approved dealer as soon as possible;</p>
        <p>– if it flashes, reduce the engine speed until the light stops flashing. Contact your approved Dealer as soon as possible.</p>
        <p>Refer to the information on “Advice: antipollution, fuel economy and driving” in Section 2.</p>

        <br>

        <h3><img src="img/icon_18.gif" alt="" height="" width=""> Anti-lock braking warning light</h3>
        <p>It lights up when the ignition or theengine is switched on and goes off after a few seconds.</p>
        <p>If it lights up when you are driving, it indicates a fault in the anti-lock braking system.</p>
        <p>Braking will then be as normal, without the ABS. Contact an approved Dealer as soon as possible.</p>


        <br>

        <h3><img src="img/icon_19.gif" alt="" height="" width=""> Coolant temperature warning light</h3>
        <p>This lights up red when the ignition is switched on or the engine is started.</p>
        <p>If it turns red, stop and let the engine idle for a minute or two.</p>
        <p>The temperature should drop. Otherwise, stop the engine. Let the engine cool down before checking the coolant.</p>
        <p>Contact an approved Dealer.</p>

        <br>

        <h3><img src="img/icon_20.gif" alt="" height="" width=""> Preheating warning light (diesel version)</h3>
        <p>This should come on when the ignition is switched on. It indicates that the heater plugs are in operation.</p>
        <p>It goes out when preheating is complete. The engine can be started.</p>

        <br>

        <h3><img src="img/icon_01.gif" alt="" height="" width=""> Door(s) open warning light</h3>

        <br>

        <h3>Rear seat belt reminder (depending on vehicle)</h3>
        <p>Warning light <img src="img/icon_21.gif" alt="" height="" width=""> comes on, accompanied (depending on the vehicle) by a message indicating the number of fastened seat belts on the instrument panel for approximately 30 seconds, each time the vehicle is started, a door is opened or a rear seat belt is fastened/unfastened. Check that the rear passengers are wearing seat belts and that the number of seat belts shown as fastened corresponds to the number of rear seat places occupied.</p>

        <br>

        <h3><img src="img/icon_22.gif" alt="" height="" width=""> Gear change indicator</h3>
        <p>This lights up to advise you to change to a higher gear (up arrow) or lower gear (down arrow).</p>
        <p>Please refer to the information on “Driving advice, Eco-driving” in Section 2.</p>

        <br>

        <h3 id='air' ><img src="img/icon_23.gif" alt="" height="" width=""> Air bag warning light</h3>
        <p>This warning light will be displayed on the instrument panel when the ignition is switched on or the engine is started, and will then go out after a few seconds.</p>
        <p>If it does not come on when the ignition is switched on, or comes on when the engine is running, there is a fault in the system.</p>
        <p>Contact your approved Dealer as soon as possible.</p>

        <br>

        <h3><img src="img/icon_24.gif" alt="" height="" width=""> Brake pedal warning light</h3>
        <p>This lights up when the brake pedal should be depressed. Refer to the information on the “Automatic gearbox” in Section 2.</p>
        <p>Please refer to the information on “Driving advice, Eco-driving” in Section 2.</p>

        <br>

        <h3><img src="img/icon_25.gif" alt="" height="" width=""> Handbrake or electronic parking brake warning light</h3>
        <p>Refer to the information on the “Assisted parking brake” in Section 2.</p>

        <br>

        <h3><img src="img/icon_26.gif" alt="" height="" width=""> Engine standby warning light</h3>
        <p>Please see information in the paragraph on “Stop and Start Function” in Section 2.</p>

        <br>

        <h3><img src="img/icon_27.gif" alt="" height="" width=""> Unavailability of engine standby warning light</h3>
        <p>Please see information in the paragraph on “Stop and Start Function” in Section 2.</p>

        <br>

        <h3><img src="img/icon_28.gif" alt="" height="" width=""> Speed limiter and cruise control indicator lights</h3>
        <p>See the information on the “Speed limiter” and “Cruise control” in Section 2.</p>

        <br>

        <h3><img src="img/icon_29.gif" alt="" height="" width=""> Tyre pressure monitoring system</h3>
        <p>Refer to the information on the “Tyre pressure monitoring system” in Section 2.</p>

        <br>

        <h3><img src="img/icon_30.gif" alt="" height="" width=""> ECO mode warning light</h3>
        <p>This comes on when ECO mode is activated.</p>
        <p>Please refer to the information on “Ecodriving” in Section 2.</p>

        <br>

        <h3><img src="img/icon_31.gif" alt="" height="" width=""> Assisted parking brake fault light</h3>
        <p>Please refer to the information on the “Assisted parking brake” in Section 2.</p>

        <br>

        <h3><img src="img/icon_32.gif" alt="" height="" width=""> Emergency active brake assist</h3>
        <p>Refer to the information on “Driving correction devices and aids” in Section 2.</p>

        <br>

        <h3><img src="img/icon_32.gif" alt="" height="" width=""> Electronic Stability Program (ESP) and traction control system warning light</h3>
        <p>It lights up when the ignition or the engine is switched on and goes off after a few seconds.</p>
        <p>There are several reasons for the warning light to come on: please refer to the information on “Driver correction devices and aids” in Section 2.</p>
      </div>




      <div class="e_title" id='audible' @click='bookmark("audible", "AUDIBLE AND VISUAL SIGNALS")'>
        <h2>AUDIBLE AND VISUAL SIGNALS
        <strong class="obg-icon-svp-check_green" v-if='directionLight !== ""' ></strong>
        </h2>
        <div class="mark" :class='"obg-icon-svp-bookmark" + (isBookmark($route.name + "audible") ? "-sel" : "")' ></div>
      </div>
      <div class="e_content">
        <img src="img/03.png" alt="" height="" width="" class="alignleft" v-if='directionLight === ""' >
        <img src="img/04.png" alt="" height="" width="" class="alignleft" v-if='directionLight === "right"' >
        <img src="img/04_1.png" alt="" height="" width="" class="alignleft" v-if='directionLight === "left"'>
        <h3>Direction indicators</h3>
        <p>Move stalk 1 parallel to the steering wheel and in the direction you are going to turn it.</p>

        <br>

        <p><strong>One-touch mode</strong><br>
        When driving, it is possible that the steering wheel may not be turned sufficiently to return the stalk automatically to its starting position.<br>In this case, briefly turn stalk 1 to the intermediate position, then release it: the stalk returns to its original point and the indicator light flashes three times.</p>

        <br>

      </div>
      <div class="e_title" id='windscreen' @click='bookmark("windscreen", "WINDSCREEN WASH/WIPE")' >
        <h2>WINDSCREEN WASH/WIPE
        <strong class="obg-icon-svp-check_green" v-if='isWiper' ></strong>
        </h2>
        <div class="mark" :class='"obg-icon-svp-bookmark" + (isBookmark($route.name + "windscreen") ? "-sel" : "")' ></div>
      </div>
      <div class="e_content">
        <img src="img/05.png" alt="" height="" width="" class="alignleft" v-if='!isWiper' >
        <img src="img/06.png" alt="" height="" width="" class="alignleft" v-if='isWiper'>
        <h3>Vehicle fitted with intermittent windscreen wipers</h3>
        <br>
        <p><strong>A single sweep</strong><br>A short push will trigger one sweep <br>of the wipers.</p>
        <p><strong>B stop</strong></p>
        <p><strong>C intermittent wiping</strong><br>The wipers will pause for several seconds between sweeps. <br>It is possible to change the time between sweeps by turning ring 2.</p>
        <p><strong>D slow continuous wiping</strong></p>
        <p><strong>E fast continuous wiping</strong></p>

        <br>

      </div>


      <div class="e_title" id='part3' @click='bookmark("part3", "FUEL TANK")'>
        <h2>FUEL TANK
        <!--
        <strong class="obg-icon-svp-check_green"></strong>
        -->
        </h2>
        <div class="mark" :class='"obg-icon-svp-bookmark" + (isBookmark($route.name + "part3") ? "-sel" : "")' ></div>
      </div>
      <div class="e_content">
        <img src="img/img_06.gif" alt="" height="" width="" class="alignleft">
        <h3>Useful capacity of fuel tank:</h3>
        <p>– Approximately 55 litres for twowheel drive models;</p>
        <p>– 65 litres for four-wheel drive models.</p>
        <p>To open the cover A, pull the control 1. Use the cap holder 3 on the flap A during filling to hold the cap 2 in place.</p>

        <br>

        <img src="img/img_07.gif" alt="" height="" width="" class="alignright">
        <h3>Fuel grade</h3>
        <p>Use a high-grade fuel that complies with the legislation in force in each country and which must comply with the specifications given on the label on the cover A. Please refer to the information on “Engine specifications” in Section 6.</p>

        <br>

        <h3>Petrol version</h3>
        <p>It is essential to use unleaded petrol. The octane rating (RON) must comply with the information given on the label on the cover A. Refer to Section 6 for information on “Engine specifications”.</p>
        <h3>Diesel version</h3>
        <p>Only use diesel fuel which complies	with the information on the label located inside the cover A.</p>

        <br>

        <h3>Filling with fuel</h3>
        <p>With the ignition off, insert the nozzle and insert it fully before turning it on to fill the fuel tank (risk of splashing).</p>
        <p>Keep the nozzle in this position throughout the entire filling operation.</p>
        <p>When the pump cuts out automatically at the end of the filling procedure, a maximum of two further filling attempts may be made, as there must be sufficient space in the fuel tank to allow for expansion.</p>
        <p>Make sure that no water enters the fuel tank during filling. The cover A and its surround must remain clean.</p>
        <h4>Petrol versions</h4>
        <p>Using leaded petrol will damage the antipollution system and may lead to a loss of warranty.</p>
        <p>To ensure that the fuel tank is not filled with leaded petrol, the fuel tank filler neck consists of a restrictor fitted with a safety system which only allows a nozzle for unleaded petrol to be used (at the pump).</p>

        <br>

        <h3>Running out of fuel on diesel versions</h3>
        <h4>Vehicles with key/remote control</h4>
        <p>– Put the ignition key in “On” position M (please see the information on the “Ignition switch” in Section 2) and wait for a few minutes before starting, to enable the fuel circuit to be primed;</p>
        <p>– turn the key to position D. If the engine does not start, repeat the procedure.</p>
        <p>– If the engine does not start after several attempts, please contact an authorised dealer.</p>

        <br>

        <img src="img/img_08.gif" alt="" height="" width="" class="alignleft">
        <h4>Vehicles with RENAULT card</h4>
        <p>With the card RENAULT in the passenger compartment, press the start button 4 without pressing any of the pedals. Wait a few minutes before starting. This will enable the fuel circuit to be primed. If the engine does not start, repeat the procedure.</p>
        <p>If the engine does not start after several attempts, please contact an authorised dealer.</p>
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
    return {
      isOpen: false,
      isSeatbelt: false,
      directionLight: '',
      isWiper: false
    }
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
    },
    doorSubscribe (data) {
      const frontLeft = new window.Zone(['front', 'left'])
      const frontLeftItem = data.find((a) => a.zone.equals(frontLeft))
      if (frontLeftItem.status) {
        if (frontLeftItem.status.toLowerCase() === 'open') {
          this.isOpen = true
        } else {
          this.isOpen = false
        }
      } else {
        if (frontLeftItem.openWarning === 'NoOpenWarning') {
          this.isOpen = true
        } else {
          this.isOpen = false
        }
      }
      console.log(data)
    },
    wiperSubscribe (data) {
      console.log(data)
      this.isWiper = (data.status === 'Active' && data.statusBcm !== 'Stopped' && data.statusBcm !== 'NotUsed')
    },
    seatbeltSubscribe (data) {
      const frontLeft = new window.Zone(['front', 'left'])
      const frontLeftItem = data.find((a) => a.zone.equals(frontLeft))
      if (frontLeftItem.seatbelt === 'ReminderNoWarning') {
        this.isSeatbelt = true
      } else {
        this.isSeatbelt = false
      }
    },
    lightSubscribe (data) {
      console.log(data)
      if (data.rightTurn && !data.leftTurn) {
        this.directionLight = 'right'
      } else if (data.leftTurn && !data.rightTurn) {
        this.directionLight = 'left'
      } else {
        this.directionLight = ''
      }
    },
    subscribeData () {
      window.navigator.vehicle.door.subscribe(this.doorSubscribe)
      window.navigator.vehicle.wiperStatus.subscribe(this.wiperSubscribe)
      window.navigator.vehicle.seat.subscribe(this.seatbeltSubscribe)
      window.navigator.vehicle.lightStatus.subscribe(this.lightSubscribe)
    }
  },
  mounted () {
    this.title = 'Getting to know your vehicle'
    this.doorSubscribe = this.doorSubscribe.bind(this)

    const id = this.$route.params.id
    id && this.$refs.sv.$scroll.scrollToElement(document.getElementById(id), 0)
    if (!window.navigator.vehicle.isConnected()) {
      window.navigator.vehicle.start(() => {
        console.log('vehicle api ready')
        this.subscribeData()
      }, () => {
        console.log('error occured while initialize vehicle api')
      })
    } else {
      this.subscribeData()
    }
  },
  beforeDestroy () {
    window.navigator.vehicle.door.unsubscribe(this.doorSubscribe)
    window.navigator.vehicle.door.unsubscribe(this.wiperSubscribe)
    window.navigator.vehicle.seat.unsubscribe(this.seatbeltSubscribe)
    window.navigator.vehicle.lightStatus.unsubscribe(this.lightSubscribe)
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
.alignleft, .alignright{
  width:200px;
  height:200px;
}
</style>
