import { Component, inject, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions(): void;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {


  ngOnInit(): void {

    customInitFunctions()


  }

  settingService = inject(SettingsService)



}
