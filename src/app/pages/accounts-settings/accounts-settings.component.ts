import { Component } from '@angular/core';

@Component({
  selector: 'app-accounts-settings',
  templateUrl: './accounts-settings.component.html',
})
export class AccountsSettingsComponent {

  changueTheme(theme: string) {


    const linkTheme = document.querySelector('#theme');
    const url = `./assets/css/colors/${theme}.css`

    linkTheme?.setAttribute('href', url)

  }

}
