import { ProdutoService } from './../produto/produto.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProdutoformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-produtoform',
  templateUrl: 'produtoform.html',
})
export class ProdutoformPage {

  produto : any;

  constructor(
    public navCtrl: NavController,
    public produtoService: ProdutoService, 
    public navParams: NavParams) {
    this.produto = [];
  }
  save(){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoformPage');
  }

}
