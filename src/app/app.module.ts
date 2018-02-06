import { ProdutoformPage } from './../pages/produtoform/produtoform';
import { ProdutoService } from './../pages/produto/produto.service';
import { ProdutoPageModule } from './../pages/produto/produto.module';
import { ProdutoPage } from './../pages/produto/produto';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    ProdutoformPage,
    ProdutoPage
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProdutoPage,
    ProdutoformPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProdutoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
