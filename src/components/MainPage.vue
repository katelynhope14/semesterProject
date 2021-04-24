<template>
<div>
  <h2><router-link to="/user" replace>View or Change Personal Details</router-link> </h2>
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
               <option>{{priceInfo[31].desc1}} - {{priceInfo[31].price1}}</option>
               <option>{{priceInfo[31].desc2}} - {{priceInfo[31].price2}}</option>
               <option>{{priceInfo[31].desc3}} - {{priceInfo[31].price3}}</option>
            </select><br>
            <button  :disabled="!tablecoversButton" class ="button" @click="addCart(tableCovers.object, tablecoversButton)">Add Cart</button>
          </tr>

          <!-- Plastic Plates -->
          <tr>
            <td>{{plasticPlate.object}}</td>
            <td>{{plasticPlate.description}}</td>
            <br><select v-model="plateButton">
               <option>{{priceInfo[25].desc1}} - {{priceInfo[25].price1}}</option>
               <option>{{priceInfo[25].desc2}} - {{priceInfo[25].price2}}</option>
               <option>{{priceInfo[25].desc3}} - {{priceInfo[25].price3}}</option>
            </select><br>
            <button :disabled="!plateButton" class ="button" @click="addCart(plasticPlate.object, plateButton)">Add Cart</button>
          </tr>

          <!-- Plastic Plates -->
          <tr>
            <td>{{plasticCutlery.object}}</td>
            <td>{{plasticCutlery.description}}</td>
            <br><select v-model="cutleryButton">
               <option>{{priceInfo[7].desc1}} - {{priceInfo[7].price1}}</option>
               <option>{{priceInfo[7].desc2}} - {{priceInfo[7].price2}}</option>
               <option>{{priceInfo[7].desc3}} - {{priceInfo[7].price3}}</option>
            </select><br>
            <button :disabled="!cutleryButton" class ="button" @click="addCart(plasticCutlery.object, cutleryButton)">Add Cart</button>
          </tr>

          <!-- Napkins-->
          <tr>
            <td>{{napkins.object}}</td>
            <td>{{napkins.description}}</td>
            <br><select v-model="napkinButton">
               <option>{{priceInfo[17].desc1}} - {{priceInfo[17].price1}}</option>
               <option>{{priceInfo[17].desc2}} - {{priceInfo[17].price2}}</option>
               <option>{{priceInfo[17].desc3}} - {{priceInfo[17].price3}}</option>
            </select><br>
            <button :disabled="!napkinButton" class ="button" @click="addCart(napkins.object, napkinButton)">Add Cart</button>
          </tr>

          <!--Drinkware-->
          <tr>
            <td>{{drinkware.object}}</td>
            <td>{{drinkware.description}}</td>
            <br><select v-model="drinkwareButton">
               <option>{{priceInfo[9].desc1}} - {{priceInfo[9].price1}}</option>
               <option>{{priceInfo[9].desc2}} - {{priceInfo[9].price2}}</option>
               <option>{{priceInfo[9].desc3}} - {{priceInfo[9].price3}}</option>
            </select><br>
            <button :disabled="!drinkwareButton" class ="button" @click="addCart(drinkware.object, drinkwareButton)">Add Cart</button>
          </tr>  

          <!--Serveware-->
          <tr>
            <td>{{serveware.object}}</td>
            <td>{{serveware.description}}</td>
           <br><select v-model="servewareButton">
               <option>{{priceInfo[27].desc1}} - {{priceInfo[27].price1}}</option>
               <option>{{priceInfo[27].desc2}} - {{priceInfo[27].price2}}</option>
               <option>{{priceInfo[27].desc3}} - {{priceInfo[27].price3}}</option>
            </select><br>
            <button :disabled="!servewareButton" class ="button" @click="addCart(serveware.object, servewareButton)">Add Cart</button>
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
               <option>{{priceInfo[3].desc1}} - {{priceInfo[3].price1}}</option>
               <option>{{priceInfo[3].desc2}} - {{priceInfo[3].price2}}</option>
               <option>{{priceInfo[3].desc3}} - {{priceInfo[3].price3}}</option>
            </select><br>
            <button :disabled="!balloonButton" class ="button" @click="addCart(balloon.object, balloonButton)">Add Cart</button>
          </tr> 

          <!--Doorway Curtains-->            
          <tr>
            <td>{{curtains.object}}</td>
            <td>{{curtains.description}}</td>
            <br><select v-model="curtainsButton">
               <option>{{priceInfo[5].desc1}} - {{priceInfo[5].price1}}</option>
               <option>{{priceInfo[5].desc2}} - {{priceInfo[5].price2}}</option>
               <option>{{priceInfo[5].desc3}} - {{priceInfo[5].price3}}</option>
            </select><br>
            <button :disabled="!curtainsButton" class ="button" @click="addCart(curtains.object, curtainsButton)">Add Cart</button>
          </tr> 

          <!--Yard Decorations -->            
          <tr>
            <td>{{yard.object}}</td>
            <td>{{yard.description}}</td>
            <br><select v-model="yardButton">
               <option>{{priceInfo[33].desc1}} - {{priceInfo[33].price1}}</option>
               <option>{{priceInfo[33].desc2}} - {{priceInfo[33].price2}}</option>
               <option>{{priceInfo[33].desc3}} - {{priceInfo[33].price3}}</option>
            </select><br>
            <button :disabled="!yardButton" class ="button" @click="addCart(yard.object, yardButton)">Add Cart</button>
          </tr> 

          <!--Photobooth Props-->            
          <tr>
            <td>{{photobooth.object}}</td>
            <td>{{photobooth.description}}</td>
            <br><select v-model="photoboothButton">
               <option>{{priceInfo[23].desc1}} - {{priceInfo[23].price1}}</option>
               <option>{{priceInfo[23].desc2}} - {{priceInfo[23].price2}}</option>
               <option>{{priceInfo[23].desc3}} - {{priceInfo[23].price3}}</option>
            </select><br>
            <button :disabled="!photoboothButton" class ="button" @click="addCart(photobooth.object, photoboothButton)">Add Cart</button>
          </tr> 

          <!--Party Lights-->            
          <tr>
            <td>{{lights.object}}</td>
            <td>{{lights.description}}</td>
            <br><select v-model="lightsButton">
               <option>{{priceInfo[15].desc1}} - {{priceInfo[15].price1}}</option>
               <option>{{priceInfo[15].desc2}} - {{priceInfo[15].price2}}</option>
               <option>{{priceInfo[15].desc3}} - {{priceInfo[15].price3}}</option>
            </select><br>
            <button :disabled="!lightsButton" class ="button" @click="addCart(lights.object, lightsButton)">Add Cart</button>
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
               <option>{{priceInfo[19].desc1}} - {{priceInfo[19].price1}}</option>
               <option>{{priceInfo[19].desc2}} - {{priceInfo[19].price2}}</option>
               <option>{{priceInfo[19].desc3}} - {{priceInfo[19].price3}}</option>
            </select><br>
            <button :disabled="!noiseMakersButton" class ="button" @click="addCart(noiseMakers.object, noiseMakersButton)">Add Cart</button>
          </tr> 
         

          <!--Party Hats-->            
          <tr>
            <td>{{partyHats.object}}</td>
            <td>{{partyHats.description}}</td>
           <br><select v-model="partyHatsButton">
               <option>{{priceInfo[21].desc1}} - {{priceInfo[21].price1}}</option>
               <option>{{priceInfo[21].desc2}} - {{priceInfo[21].price2}}</option>
               <option>{{priceInfo[21].desc3}} - {{priceInfo[21].price3}}</option>
            </select><br>
            <button :disabled="!partyHatsButton" class ="button" @click="addCart(partyHats.object, partyHatsButton)">Add Cart</button>
          </tr> 

          <!--Awards and Medals -->            
          <tr>
            <td>{{awards.object}}</td>
            <td>{{awards.description}}</td>
            <br><select v-model="awardsButton">
               <option>{{priceInfo[1].desc1}} - {{priceInfo[1].price1}}</option>
               <option>{{priceInfo[1].desc2}} - {{priceInfo[1].price2}}</option>
               <option>{{priceInfo[1].desc3}} - {{priceInfo[1].price3}}</option>
            </select><br>
            <button :disabled="!awardsButton" class ="button" @click="addCart(awards.object, awardsButton)">Add Cart</button>
          </tr> 


          <!--Glow Sticks -->            
          <tr>
            <td>{{glowSticks.object}}</td>
            <td>{{glowSticks.description}}</td>
            <br><select v-model="glowSticksButton">
               <option>{{priceInfo[11].desc1}} - {{priceInfo[11].price1}}</option>
               <option>{{priceInfo[11].desc2}} - {{priceInfo[11].price2}}</option>
               <option>{{priceInfo[11].desc3}} - {{priceInfo[11].price3}}</option>
            </select><br>
            <button :disabled="!glowSticksButton" class ="button" @click="addCart(glowSticks.object, glowSticksButton)">Add Cart</button>
          </tr> 

          <!--keychains -->            
          <tr>
            <td>{{keychains.object}}</td>
            <td>{{keychains.description}}</td>
            <br><select v-model="keychainsButton">
               <option>{{priceInfo[13].desc1}} - {{priceInfo[13].price1}}</option>
               <option>{{priceInfo[13].desc2}} - {{priceInfo[13].price2}}</option>
               <option>{{priceInfo[13].desc3}} - {{priceInfo[13].price3}}</option>
            </select><br>
           <button :disabled="!keychainsButton" class ="button" @click="addCart(keychains.object, keychainsButton)">Add Cart</button>
          </tr> 

          <!--stickers-->            
          <tr>
            <td>{{stickers.object}}</td>
            <td>{{stickers.description}}</td>
            <br><select v-model="stickersButton">
               <option>{{priceInfo[29].desc1}} - {{priceInfo[29].price1}}</option>
               <option>{{priceInfo[29].desc2}} - {{priceInfo[29].price2}}</option>
               <option>{{priceInfo[29].desc3}} - {{priceInfo[29].price3}}</option>
            </select><br>
           <button :disabled="!stickersButton" class ="button" @click="addCart(stickers.object, stickersButton)">Add Cart</button>
          </tr> 
        </table>
        <section id="summary">
        <h2>Order Summary</h2>
        <table class="center-of-page">
          <thead>
            <th>Item Name</th>
            <th>Description</th>
            <th>Tax</th>
            <th>Price</th>
          </thead>
          <tbody>
            <tr v-for="(z, pos) in cart" :key="pos">
              <td>{{ z.itemName }}</td>
              <td>{{ z.itemDesc }}</td>
              <td>${{ (z.itemPrice * 0.06).toFixed(2) }}</td>
              <td>${{ z.itemPrice }}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total: ${{total.toFixed(2)}}</td>
            </tr>
          </tbody>
        </table>
      </section>
        <button @click="checkout">Check Out</button>
        </div>
      </section>
    </div>
</div>
</template>

<script lang ="ts"> 
import { Component, Vue } from 'vue-property-decorator';
import {FirebaseFirestore} from "@firebase/firestore-types";
import {FirebaseAuth, UserCredential} from "@firebase/auth-types";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { QuerySnapshot } from "@firebase/firestore-types";
import "firebase/auth";

@Component 
export default class MainPage extends Vue {
  readonly $appDB!: FirebaseFirestore
  readonly $appAuth!: FirebaseAuth;
  
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
  private uid = "none"
  private priceInfo: any[] = [];
  private cart: any[] = [];
  private total = 0;


  noInput(input): boolean{
    return input.length == 0;
  }

  checkout(): void {
    this.uid = this.$appAuth.currentUser?.uid ?? "none";
    this.cart.forEach((item) => {
      this.$appDB
        .collection(`users/${this.uid}/cart`)
        .add({
          name: item.itemName,
          desc: item.itemDesc,
          price: parseFloat(item.itemPrice)})

    });
    this.cart.splice(0);
    this.$router.push("/checkout");
  }

  mounted(): void {
        this.uid = this.$appAuth.currentUser?.uid ?? "none";

        this.$appDB
        .collection(`prices`)
        .onSnapshot((qs: QuerySnapshot) => {
        this.priceInfo.splice(0);  // remove old data
        qs.forEach((qds: QueryDocumentSnapshot) => {
            const data = qds.data();
            if (qds.exists)
                this.priceInfo.push(qds.id,{
                desc1: data.desc1,
                desc2: data.desc2,
                desc3: data.desc3,
                price1: data.price1,
                price2: data.price2,
                price3: data.price3
            });
        });
        console.log(this.priceInfo);
        console.log(this.priceInfo[0].toString());
    });
    }

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

 addCart(name, desc) {
   var fields = desc.split("-");
   this.cart.push({
     itemName: name,
     itemDesc: fields[0],
     itemPrice: parseFloat(fields[1])
   });
   this.total = this.total + parseFloat(fields[1]) + parseFloat(fields[1]) * 0.06 ;
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
 button[disabled] { 
      pointer-events: none;

    }
button:hover { 
  background-color: #45a049;
}
 
.price{
  padding-left:20px;
}

</style>
