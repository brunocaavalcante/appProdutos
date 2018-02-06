import { ProdutoService } from './../produto/produto.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';



@Component({
  selector: 'page-produtoform',
  templateUrl: 'produtoform.html',
})
export class ProdutoformPage {

  produto : any;


  constructor(
    public navCtrl: NavController,
    public produtoService: ProdutoService,
    public toastCrtl: ToastController, 
    public navParams: NavParams) {

    this.produto = ({ id:'', nome:'', tipo:''});


    let produtoParam = this.navParams.get("produto");
    console.log(produtoParam);

    if(produtoParam != null){

      this.produto = produtoParam;
    }
  }

  showMessagem(msg){
    this.toastCrtl.create({
      message : msg,
      duration:4000
    }).present();

  }

  save(){

      if(this.produto.id){

        this.produtoService.update(this.produto).subscribe( item =>{

         this.showMessagem("Produto foi Atualizado com Sucesso");

          this.navCtrl.pop();
  
        },   erro =>{

          this.showMessagem("Erro ao Atualizar Produto");
        })

      }else{

      this.produtoService.save(this.produto).subscribe( item =>{
        
        this.showMessagem( "Produto foi Salvo com sucesso");
        
        this.navCtrl.pop();

      },   erro =>{

        this.showMessagem("Erro ao salvar produto");

      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoformPage');
  }

}
