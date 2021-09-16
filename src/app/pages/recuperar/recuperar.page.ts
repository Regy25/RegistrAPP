import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  public usuario: Usuario;

  constructor(private router: Router, private toastController:ToastController) {
    this.usuario = new Usuario();
    this.usuario.nombreUsuario = '';
    this.usuario.password = '';
    this.usuario.newPass = '';
    this.usuario.confirmarPass = '';
  }

  ngOnInit(): void {
  }

  public cambiarPass(): void {
    if(!this.validarNewPass(this.usuario)) {
      return;
    }
    this.mostrarMensaje('Contraseña Cambiada!');
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.usuario
      }
    };
    this.router.navigate(['/login'], navigationExtras);
  }

  public validarNewPass(usuario: Usuario): boolean {
    const mensajeError = usuario.validarCambioPass();
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
