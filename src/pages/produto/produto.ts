import { ProdutoformPage } from './../produtoform/produtoform';
import { ProdutoService } from './produto.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


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

  list(){

    this.produtoService.list().subscribe( dados =>{
      this.produtos = dados;
    } 
    )
  }

  goToForm(){
    this.navCtrl.push(ProdutoformPage);
  }
  goToEdit(produto){

    this.navCtrl.push(ProdutoformPage, {produto: produto });

  }

  deleteProduto(produto, $event){

    $event.preventDefault(),
    event.stopImmediatePropagation(), 
    $event.stopPropagation();

    let prompt = this.alertCtrl.create({

      title: 'Delete',
      message: 'Deseja excluir este item?',

      buttons:[
          {
            text: 'Cancelar',
            handler: data=>{

              console.log("Cancelar");
            }
          },
          {
            text: 'OK',
            handler: data=>{

              console.log("Deletar");

              this.produtoService.delete(produto).subscribe( dados =>{

                    this.list();
              } 
              )

            }
          }

      ]

    });
    prompt.present();

  }

  ionViewWillEnter() {
    
    console.log('ionViewWillEnter');

    this.list();
  }

}
