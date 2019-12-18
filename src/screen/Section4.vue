<template>
  <div id='section1'>
    <obg-scroll-view ref='sv' scrollKey='section4' >

      <div class="e_title" id='part1' @click='bookmark("part1", "ENGINE OIL LEVEL")' >
        <h2>ENGINE OIL LEVEL
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
        <p>It is normal for an engine to use oil for lubrication and cooling of moving parts and it is normal to top up the level between oil changes. </p>
        <p>However, contact your approved Dealer if more than 0.5 litres is being consumed every 600 miles (1,000 km) after the running in period. Oil change frequency: check the oil level from time to time and certainly before any long journey to avoid the risk of damaging your engine.</p>
        <p>Oil change frequency: check the oil level from time to time and certainly before any long journey to avoid the risk of damaging your engine.</p>
        
        <br>

        <img src="img/img_14.gif" alt="" height="" width="" class="alignleft">
        <h3>Reading the oil level</h3>
        <p>The oil level should be read with the vehicle on level ground, after the engine has been switched off for some time.</p>
        <p>The dipstick must be used to read the exact oil level and make sure that the maximum level has not been exceeded (risk of engine damage).</p>
        <p>Refer to the following pages. </p>
        <p>The instrument panel display only alerts the driver when the oil level is at its minimum.</p>
        <p>– Remove the dipstick and wipe with a clean, lint-free cloth;</p>
        <p>– push the dipstick in as far as it will go (for vehicles equipped with a captype dipstick C, screw the cap in as far as it will go);</p>
        <p>– take out the dipstick again;</p>
        <p>– read the level: it should never fall below minimum mark A or exceed maximum mark B.</p>
        <p>Once the operation has been completed, ensure that the dipstick is pushed in as far as it will go or that the “cap-type dipstick” is completely screwed in.</p>		
      </div>
      <div class="e_title" id='part2' @click='bookmark("part2", "LEVELS")' >
        <h2>LEVELS
        <!--
        <strong class="obg-icon-svp-check_green"></strong>
        -->
        </h2>
        <div class="mark" :class='"obg-icon-svp-bookmark" + (isBookmark($route.name + "part2") ? "-sel" : "")' ></div>
      </div>	
      <div class="e_content">
        <img src="img/img_15.gif" alt="" height="" width="" class="alignleft">
        <h3>Coolant level</h3>
        <p>With the engine switched off and on level ground, the level when cold must be between the MINI and MAXI marks on reservoir 1.</p>	
        <p>Top this level up when cold before it reaches the MINI mark.</p>	
        
        <br>
        <h4>Frequency of checking coolant level</h4>

        <p>Check the coolant level regularly (very severe damage is likely to be caused to the engine if it runs out of coolant).</p>
        <p>If the level needs to be topped up, only use products approved by our Technical Department which ensure:</p>
        <p>– protection against freezing;</p>
        <p>– an anti-corrosion protection for the cooling system.</p>
        
        <br>

        <h4>Replacement interval</h4>
        <p>Refer to the Maintenance Document for your vehicle.</p>

        <br>

        <img src="img/img_16.gif" alt="" height="" width="" class="alignleft">
        <h3>Brake fluid level</h3>
        <p>The level should be read with the engine switched off and on level ground.</p>	
        <p>This should be checked frequently, and immediately if you notice even the slightest loss in braking efficiency.</p>	
        
        <br>

        <h4>Level 2</h4>
        <p>It is normal for the level to drop as the brake shoes become worn, but it must never drop lower than the “MINI" warning line.</p>	
        <p>If you wish to check the disc and drum wear yourself, you should obtain the document explaining the checking procedure from the manufacturer’s network or web site.</p>	

        <br>

        <h4>Topping up</h4>
        <p>After any operation on the hydraulic circuit, a specialist must replace the brake fluid.</p>
        <p>Only use fluids approved by our Technical Department (and taken from a sealed container).</p>

        <br>

        <h4>Replacement interval</h4>
        <p>Refer to the Maintenance Document for your vehicle.</p>
      </div>
      <div class="e_title" id='part3' @click='bookmark("part3", "TYRE PRESSURE")' >
        <h2>TYRE PRESSURE
        <!--
        <strong class="obg-icon-svp-check_green"></strong>
        -->
        </h2>
        <div class="mark" :class='"obg-icon-svp-bookmark" + (isBookmark($route.name + "part3") ? "-sel" : "")' ></div>
      </div>	
      <div class="e_content">
        <img src="img/img_17.gif" alt="" height="" width="" class="alignleft">
        <h3>Label A</h3>
        <p>Open the driver’s door to read it.</p>
        <p>Tyre pressures should be checked when the tyres are cold.</p>
        <p>If the tyre pressures cannot be checked when the tyres are cold, increase the pressures from 0.2 to 0.3 bar (or 3 PSI).<br> Never deflate a hot tyre.</p>

        <br>
        
        <img src="img/img_18.gif" alt="" height="" width="" class="alignleft">
        
        <p>B: dimension of the tyres fitted to the vehicle.</p>
        <p>C: intended driving speed.</p>
        <p>D: recommended pressure for optimising fuel consumption.</p>
        <p>NB: driving comfort may be altered.</p>
        <p>E: front tyre pressure.</p>
        <p>F: rear tyre pressure.</p>
        <p>G: tyre pressure for the emergency spare wheel.</p>
        <h4>Vehicle fitted with a tyre pressure monitoring system</h4>
        <p>In cases of under-inflation (puncture,low pressure, etc.), warning light <img src="img/icon_29.gif" alt="" height="" width="">
        lights up on the instrument panel.Please refer to the information on the “Tyre pressure monitoring system” in Section 2.</p>
        
        <br>

        <p>Special note concerning fully laden vehicles (Maximum Permissible All-Up Weight) and towing a trailer: the maximum speed must be limited to 60 mph (100 kph) and the tyre pressure increased by 0.2 bar.</p>
        <p>Please refer to the information on “Weights” in Section 6.</p> 
        <p>Tyre safety and use of snow chains: Refer to the information on “Tyres” in
        Section 5 for the servicing conditions and, depending on the version, the use of chains.</p>
        
      </div>
      <div class="e_title" id='part4' @click='bookmark("part4", "BATTERY")' >
        <h2>BATTERY
        <!--
        <strong class="obg-icon-svp-check_green"></strong>
        -->
        </h2>
        <div class="mark" :class='"obg-icon-svp-bookmark" + (isBookmark($route.name + "part4") ? "-sel" : "")' ></div>
      </div>	
      <div class="e_content">
        <img src="img/img_20.gif" alt="" height="" width="" class="alignleft">
        <p>Battery 1 does not require any maintenance. You should not open it or add any fluid.</p>

        <br>
        
        <p>Depending on the vehicle, a system continuously checks the battery charge status. If this decreases, the message “Battery low start engine” is displayed on the instrument panel. In this case, start the engine. The message will go off.</p>
        <p>The charge status of your battery can decrease especially if you use your vehicle:
        <p>– for short journeys;<br>
        – for driving in town;<br>
        – when the temperature drops;<br>
  –			 after extended use of energy-consuming devices (radio, etc.) with the engine switched off.</p>
        
        <br>

        <img src="img/img_21.gif" alt="" height="" width="" class="alignright">
        
        <h3>Label A</h3>
        <p>Observe the indications on the battery:<br>
        – 2 Naked flames and smoking are forbidden;<br>
        – 3 eye protection required;<br>
        – 4 keep away from children;<br>
        – 5 explosive materials;<br>
        – 6 refer to the handbook;<br>
        – 7 corrosive materials.</p>

        <br>

        <h3>Replacing the battery</h3>
        <p>As this operation is complex, we advise you to contact an approved Dealer.</p>
        
        <br>
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
    this.title = 'Maintenance'

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
