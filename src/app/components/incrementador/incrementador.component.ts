import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
})
export class IncrementadorComponent {


  @Input() progressbar: number = 50
  @Input() btnClas: string = 'btn btn-primary'
  @Output() valorAlPadre: EventEmitter<number> = new EventEmitter()


  updateValue(value: number, isAbosulute = false) {

    if (!isAbosulute) {

      if (this.progressbar >= 100 && value >= 0) {

        this.progressbar = 100
        this.valorAlPadre.emit(100)

      }

      if (this.progressbar <= 0 && value < 0) {
        this.progressbar = 0
        this.valorAlPadre.emit(0)

      }

      this.progressbar = this.progressbar + value
      this.valorAlPadre.emit(this.progressbar)

    } else {


      if (this.progressbar >= 100 && value >= 0) {

        this.progressbar = 100

      }

      if (this.progressbar <= 0 && value < 0) {
        this.progressbar = 0


      }

      this.valorAlPadre.emit(this.progressbar)

    }


  }

}



