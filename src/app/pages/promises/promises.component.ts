import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css'
})
export class PromisesComponent implements OnInit {


  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log('listado de usuarios ' + usuarios)
    })



  }




  getUsuarios() {

    const promesa = new Promise(resolve => {

      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => console.log(body.data))


    })

    return promesa


    /*
          */

  }


}
