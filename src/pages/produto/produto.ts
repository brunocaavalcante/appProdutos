import { ProdutoformPage } from './../produtoform/produtoform';
import { ProdutoService } from './produto.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  produtos=[];

  constructor(
    public navCtrl: NavController,
    public produtoService: ProdutoService,
    public alertCtrl: AlertController, 
    public navParams: NavParams) {

   
  }

  goToForm(){
    this.navCtrl.push(ProdutoformPage);
  }
  goToEdit(produto){

    this.navCtrl.push(ProdutoformPage, {produto: produto });

  }

  deleteProduto(produto){

    alert

  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');

    this.produtoService.list().subscribe( dados =>{
      this.produtos = dados;
    } 
    )
  }

}
