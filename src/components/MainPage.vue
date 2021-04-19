<template>
<div>
    <!-- MAIN PAGE THAT SHOWS THE LIST OF PRODUCTS THAT WE ARE SELLING --> 
    <div id = "body"> 

        <!--Tableware and Serving Table--> 
        <section>
        <h2> Tableware and Serving </h2>
        <div id ="tableware">
          <table >
          <tr> 
            <th>Item</th>
            <th>Description</th>
            <th>Price</th>
          </tr>

          <!-- Table Covers --> 
          <tr>
            <td>{{tableCovers.object}}</td>
            <td>{{tableCovers.description}}</td>
            <br><select v-model="tablecoversButton">
               <option v-for="(c, pos) in tableCovers.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(tableCovers.object, tableCovers.description, tablecoversButton)">Add Cart</button>
          </tr>

          <!-- Plastic Plates -->
          <tr>
            <td>{{plasticPlate.object}}</td>
            <td>{{plasticPlate.description}}</td>
            <br><select v-model="plateButton">
               <option v-for="(c, pos) in plasticPlate.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(plasticPlate.object, plasticPlate.description, plasticPlateButton)">Add Cart</button>
          </tr>

          <!-- Plastic Plates -->
          <tr>
            <td>{{plasticCutlery.object}}</td>
            <td>{{plasticCutlery.description}}</td>
            <br><select v-model="cutleryButton">
               <option v-for="(c, pos) in plasticCutlery.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(plasticCutlery.object, plasticCutlery.description, plasticCutleryButton)">Add Cart</button>
          </tr>

          <!-- Napkins-->
          <tr>
            <td>{{napkins.object}}</td>
            <td>{{napkins.description}}</td>
            <br><select v-model="napkinButton">
               <option v-for="(c, pos) in napkins.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(napkins.object, napkins.description, napkinButton)">Add Cart</button>
          </tr>

          <!--Drinkware-->
          <tr>
            <td>{{drinkware.object}}</td>
            <td>{{drinkware.description}}</td>
            <br><select v-model="drinkwareButton">
               <option v-for="(c, pos) in drinkware.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(drinkware.object, drinkware.description, drinkwareButton)">Add Cart</button>
          </tr>  

          <!--Serveware-->
          <tr>
            <td>{{serveware.object}}</td>
            <td>{{serveware.description}}</td>
           <br><select v-model="servewareButton">
               <option v-for="(c, pos) in serveware.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(serveware.object, serveware.description, servewareButton)">Add Cart</button>
          </tr> 
          </table>
         </div>  
        </section>

      <section>
      <!-- Decorations Table -->
        <h2>Decorations</h2>
        <div id = "decorations">
        <table >
          <tr> 
            <th>Item</th>
            <th>Description</th>
            <th>Price</th>
          </tr>

          <!--Balloons-->
          <tr>
            <td>{{balloon.object}}</td>
            <td>{{balloon.description}}</td>
            <br><select v-model="balloonButton">
               <option v-for="(c, pos) in balloon.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(balloon.object, balloon.description, balloonButton)">Add Cart</button>
          </tr> 

          <!--Doorway Curtains-->            
          <tr>
            <td>{{curtains.object}}</td>
            <td>{{curtains.description}}</td>
            <br><select v-model="curtainsButton">
               <option v-for="(c, pos) in curtains.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(curtains.object, curtains.description, currtainsButton)">Add Cart</button>
          </tr> 

          <!--Yard Decorations -->            
          <tr>
            <td>{{yard.object}}</td>
            <td>{{yard.description}}</td>
            <br><select v-model="yardButton">
               <option v-for="(c, pos) in yard.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(yard.object, yard.description, yardButton)">Add Cart</button>
          </tr> 

          <!--Photobooth Props-->            
          <tr>
            <td>{{photobooth.object}}</td>
            <td>{{photobooth.description}}</td>
            <br><select v-model="photoboothButton">
               <option v-for="(c, pos) in photobooth.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(photobooth.object, photobooth.description, photoboothButton)">Add Cart</button>
          </tr> 

          <!--Party Lights-->            
          <tr>
            <td>{{lights.object}}</td>
            <td>{{lights.description}}</td>
            <br><select v-model="lightsButton">
               <option v-for="(c, pos) in lights.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(lights.object, lights.description, lightsButton)">Add Cart</button>
          </tr> 
        </table> 
        </div>
      </section>

      <section>
      <!-- Party Favors Table -->
        <h2>Party Favors </h2>
        <div id ="partyFavors">
        <table>
          <tr> 
            <th>Item</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          <!--Noise Makers-->  
          <tr>
            <td>{{noiseMakers.object}}</td>
            <td>{{noiseMakers.description}}</td>
            <br><select v-model="noiseMakersButton">
               <option v-for="(c, pos) in noiseMakers.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(noiseMakers.object, noiseMakers.description, noiseMakersButton)">Add Cart</button>
          </tr> 
         

          <!--Party Hats-->            
          <tr>
            <td>{{partyHats.object}}</td>
            <td>{{partyHats.description}}</td>
           <br><select v-model="partyHatsButton">
               <option v-for="(c, pos) in partyHats.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(partyHats.object, partyHats.description, partyHatsButton)">Add Cart</button>
          </tr> 

          <!--Awards and Medals -->            
          <tr>
            <td>{{awards.object}}</td>
            <td>{{awards.description}}</td>
            <br><select v-model="awardsButton">
               <option v-for="(c, pos) in awards.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(awards.object, awards.description, awardsButton)">Add Cart</button>
          </tr> 


          <!--Glow Sticks -->            
          <tr>
            <td>{{glowSticks.object}}</td>
            <td>{{glowSticks.description}}</td>
            <br><select v-model="glowSticksButton">
               <option v-for="(c, pos) in glowSticks.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
            <button class ="button" @click="addCart(glowSticks.object, glowSticks.description, glowSticksButton)">Add Cart</button>
          </tr> 

          <!--keychains -->            
          <tr>
            <td>{{keychains.object}}</td>
            <td>{{keychains.description}}</td>
            <br><select v-model="keychainsButton">
               <option v-for="(c, pos) in keychains.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
           <button class ="button" @click="addCart(keychains.object, keychains.description, keychainsButton)">Add Cart</button>
          </tr> 

          <!--stickers-->            
          <tr>
            <td>{{stickers.object}}</td>
            <td>{{stickers.description}}</td>
            <br><select v-model="stickersButton">
               <option v-for="(c, pos) in stickers.quantity" :value="c[pos]" :key="pos">{{c}}</option>
            </select><br>
           <button class ="button" @click="addCart(stickers.object, stickers.description, stickersButton)">Add Cart</button>
          </tr> 
        </table>
        </div>
      </section>
    </div>
</div>
</template>

<script lang ="ts"> 
import { Component, Vue } from 'vue-property-decorator';
import {FirebaseFirestore} from "@firebase/firestore-types";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {FirebaseAuth, UserCredential} from "@firebase/auth-types"; 

@Component 
export default class MainPage extends Vue {
  readonly $appDB!: FirebaseFirestore
  
  private tablecoversButton = "";
  private plateButton="";
  private cutleryButton="";
  private napkinButton="";
  private drinkwareButton="";
  private servewareButton="";
  private balloonButton="";
  private curtainsButton="";
  private yardButton=""; 
  private photoboothButton="";
  private lightsButton="";
  private noiseMakersButton="";
  private partyHatsButton="";
  private awardsButton="";
  private glowSticksButton="";
  private keychainsButton="";
  private stickersButton=""; 

  //Table Covers Function 
  readonly tableCovers = {
    object: "Table Covers",
    description: "Red Plastic Table Covers          ",
    quantity: [
       "54in x 108in ($1.49)",
       "89in Round ($1.99)",
       "40in x 100ft ($9.99)",
    ],
  };

  //Plastic Plate Function
  readonly plasticPlate = {
    object: "Plastic Plates",
    description: "Plastic Round Disposable Plates",
    quantity: [
      "7in 20ct ($2.99)",
       "7in 50ct ($4.99)",
       "10.25in ($7.99)",
    ],
  };

  //Plastic Cutlery Function
  readonly plasticCutlery = {
    object: "Plastic Cutlery",
    description: "Plastic Premium Forks",
    quantity: [
       "20ct ($2.99)",
       "48ct ($4.99)",
       "100ct ($7.99)",
    ],
  };

  //Plastic Cutlery Function
  readonly napkins = {
    object: "Napkins",
    description: "Plain Paper Napkins",
    quantity: [
       "50ct ($1.99)",
       "100ct ($2.99)",
       "150ct ($3.99)",
    ],
  };
  //Drinkware Function
  readonly drinkware = {
    object: "Drinkware",
    description: "Red Plastic Cups- 12oz",
    quantity: [
       "50ct ($4.99)",
       "72ct ($5.99)",
       "100ct ($6.99)",
    ],
  };

  //Serveware Function
  readonly serveware = {
    object: "Serveware",
    description: "Metalic Silver Rectangular Plastic Platter",
    quantity: [
       "1ct ($3.99)",
       "3ct ($4.99)",
       "5ct ($5.99)",
    ],
  };

  //Balloon Function
  readonly balloon = {
    object: "Balloon",
    description: "20 Foil Multi-Colored Balloons",
    quantity: [
       "Shape Balloons ($4.99)",
       "Number Balloons ($7.99)",
       "Letter Balloons ($24.99)",
    ],
  };

  //Doorway Curtians Function
  readonly curtains = {
    object: "Doorway Curtains",
    description: "Doorway Curtians",
    quantity: [
       "Red 4ft Long ($5.99)",
       "Silver 5ft Long ($6.99)",
       "Blue 5ft Long ($6.99)",
    ],
  };

  //Yard Decorations Function
  readonly yard = {
    object: "Yard Decorations",
    description: "Giant Corrugated Plastic Letters and Numbers",
    quantity: [
       "10ct ($15.99)",
       "15ct ($17.99)",
       "20ct ($20.99)",
    ],
  };

  //Photobooth Props Function
  readonly photobooth = {
    object: "Photobooth Props",
    description: "Photobooth Props",
    quantity: [
       "Jumbo Feista Props ($12.99)",
       "Gaint Scene Setter ($5.99)",
       "Fringe Banners 9ct ($14.99)",
    ],
  };

  //Party Lights Function
  readonly lights = {
    object: "Party Lights",
    description: "Stringed White Lights",
    quantity: [
       "50in ($6.99)",
       "120in ($12.99)",
       "250in ($21.99)",
    ],
  };

  //Noise Makers Function
  readonly noiseMakers= {
    object: "Noise Makers ",
    description: "Deluxe Metalic Noise Makers",
    quantity: [
       "24ct ($11.99)",
       "50ct ($23.99)",
       "75ct ($39.99)",
    ],
  };

  //Party Hats Function
  readonly partyHats= {
    object: "Party Hats",
    description: "Multi-colored Metalic Polka Dot Party Hats",
    quantity: [
       "50ct ($5.99)",
       "120ct (10.99)",
       "250ct ($15.99)",
    ],
  };

  //Awards and Medals Function
  readonly awards= {
    object: "Awards and Medals",
    description: "Trophies and Medal Combo Pack",
    quantity: [
       "7ct ($9.99)",
       "10ct ($13.99)",
       "18ct ($19.99)",
    ],
  };

  //  Glow Sticks Function
  readonly glowSticks= {
    object: "Glow Sticks",
    description: "Multi-Colored Bright Glow Sticks",
    quantity: [
       "50ct ($5.99)",
       "120ct ($10.99)",
       "250ct ($20.99)",
    ],
  };

  //Keychains Function
  readonly keychains= {
    object: "Keychains",
    description: "Keychain Party Favors",
    quantity: [
       "15ct ($5.99)",
       "20ct ($10.99)",
       "25ct ($15.99)",
    ],
  };

  //Stickers Function
  readonly stickers= {
    object: "Stickers",
    description: "Combo Sticker Pack" ,
    quantity: [
       "50ct ($3.99)",
       "100ct ($5.99)",
       "250ct ($10.99)",
    ],
  };

 addCart(objectName: string, objectDescription: string, priceandquantity: string) {
   console.log("stop");
  }
}


</script> 

<style scoped>

#body{
  display: inline-block;
  text-align: center;
  font-family:  Georgia, serif;
  border: 4px solid hsl(120, 22%, 63%);
  border-radius: 1em;
  padding: 1em;
  display: grid;
  display: grid center;
 
  grid-template-areas: "tableware" "decoartions" "partyFavors";
}

table {
  border:3px solid cornflowerblue;
  border-radius: 1em;
  align-content: center;
  margin: auto;
  padding:1em;
}


h2{
  color: rgb(161, 161, 245);
  font-weight: 900;
  font-size: 30px;
  text-align:center;

}

th
 {
  text-decoration: underline;
  font-size: 20px;
  text-align: center;
  color: rgb(161, 161, 245);
  font-weight: 300;
}

td{
  text-align: center;
  font-size: 18px;
  padding: 30px;
}

.button {
  background-color: hsl(120, 22%, 63%);
  border: none;
  color: white;
  padding: 1px 20px;
  text-align: center;
  text-decoration: bold;
  display: inline-block;
  font-size: 16px;
}

</style>
