import { ProdutoformPage } from './../produtoform/produtoform';
import { ProdutoService } from './produto.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    public navParams: NavParams) {

   
  }

  goToForm(){
    this.navCtrl.push(ProdutoformPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoPage');

    this.produtoService.list().subscribe( dados =>{
      this.produtos = dados;
    } 
    )
  }

}
