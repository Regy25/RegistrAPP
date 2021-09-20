import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';

// importacion permisos camara
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

// importacion animaciones
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public usuario: Usuario;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private qrScanner: QRScanner,
    private activeroute: ActivatedRoute,
    private animationCtrl: AnimationController) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.usuario);
      } else {
        this.usuario = new Usuario();
        this.usuario.nombreUsuario = '';
        this.usuario.password = '';
      }
    });
  }

  ngOnInit() {
    // this.usuario.nombreUsuario = 'Jose';
    // this.usuario.password = '1234';
    // this.ingresar();
    this.animationCtrl.create()
      .addElement(document.querySelector('.titulo'))
      .duration(2000)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(300px)')
      .fromTo('opacity', '1', '0.2')
      .play();
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => status.authorized);
  }

  public ingresar(): void {

    if(!this.validarUsuario(this.usuario)) {
      this.usuario.nombreUsuario='';
      this.usuario.password='';
      this.animationCtrl.create()
      .addElement(document.querySelector('.contraseña'))
      .addElement(document.querySelector('.usuario'))
      .duration(1000)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'translateX(0px)'},
        { offset: 1, transform: 'translateX(300px)'},
        { offset: 1, transform: 'translateX(0px)'},
      ])
      .play();
      return;
    }
    this.mostrarMensaje('Bienvenido!');
    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    this.router.navigate(['/home'], navigationExtras);
  }

  public validarUsuario(usuario: Usuario): boolean {
    const mensajeError = usuario.validarUsuario();
    if (mensajeError) {
      this.mostrarMensaje(mensajeError);
      return false;
    }
    return true;
  }

  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }

}
