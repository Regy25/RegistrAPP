
export class Usuario {
    public nombreUsuario = '';
    public password = '';
    public User = 'Jose';
    public pass = '1234';
    public newPass = '';
    public confirmarPass = '';

    public ValidarNombreUsuario(): string {
        if (this.nombreUsuario.trim() === '') {
            return 'Debe ingresar un nombre de usuario';
        }
        if (this.nombreUsuario.length < 3 || this.nombreUsuario.length > 8) {
            return 'El nombre de usuario debe tener entre 3 y 8 caracteres';
        }
        if (this.nombreUsuario.trim() === this.User){
            return '';
        } else {
            return 'Usuario incorrecto';
        }
    }

    public validarPassword(): string {
        if (this.password.trim() === '') {
            return 'Para entrar al sistema debe ingresar la contraseña.';
        }
        for(let i = 0; i < this.password.length; i++) {
            if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
                return 'La contraseña debe ser numérica.';
        }
        }
        if (this.password.length !== 4) {
            return 'La contraseña debe ser numérica de 4 dígitos.';
        }
        if (this.password.trim() === this.pass) {
            return '';
        } else {
        return 'Contraseña Incorrecta';
        }
    }

    public validarNewPass(): string {
        if (this.newPass===this.confirmarPass) {
            this.pass=this.newPass;
            return '';
        } else {
            return 'Contraseñas no coinciden';
        }
    }

    public validarCambioPass(): string {
        return this.ValidarNombreUsuario() || this.validarNewPass();
    }

    public validarUsuario(): string {
        return this.ValidarNombreUsuario() || this.validarPassword();
    }
}
