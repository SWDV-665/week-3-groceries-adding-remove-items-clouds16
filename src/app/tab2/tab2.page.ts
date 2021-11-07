import { Component } from '@angular/core';

import { ToastController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],

})
export class Tab2Page {
  constructor(public toastController: ToastController, public alertController: AlertController ) {}


  title = 'Grocery Items';
  //list that will be read to create items from , added a few items to start the list
  items = [
    {
      name:'Bread',
      quantity: 2,
    },
    {
      name:'Orange Juice',
      quantity:1,
    },
  ];

  

  async removeItem(item,index){
    const toast = await this.toastController.create({
      message: `Removing the item: ${item.name}`,
      duration: 2000
    });
    toast.present();
    this.items.splice(index,1);
  }

  async addItem( data ){
    const toast = await this.toastController.create({
      message: `Adding Item: ${data.name}`,
      duration: 2000
    });
    toast.present();
    this.items.push(data)
  }

  //alert pop up
  async addItemPopUp() {
    const alert = await this.alertController.create({
      cssClass: 'my-class',
      header: 'Please Enter an Item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          id : 'item-name',
          placeholder: 'Item'
        },

        //second input
        {
          name: 'quantity',
          type: 'text',
          id: 'item-id',
          placeholder: 'Quantity'
        },
      ],

      //button
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: data=> {
            console.log('Cancel');
          }
        }, 

        {
          text: 'save',
          handler: data => {
            console.log('Confirm Ok');
            //add item to the list of items
            this.addItem(data);
          }
        }
      ]
    });

    await alert.present();
  }
};