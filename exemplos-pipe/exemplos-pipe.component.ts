import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-exemplos-pipe',
  templateUrl: './exemplos-pipe.component.html',
  styleUrls: ['./exemplos-pipe.component.scss']
})
export class ExemplosPipeComponent implements OnInit {

  livro: any = {
    titulo:'Guia Prático de TypeScript',
    rating:4.9786,
    numeroPaginas:178,
    preco:59.90,
    dataLancamento: new Date(2021, 7, 27),  //Erro com a data declarado Julho - renderizado Agosto.
    url:'https://www.casadocodigo.com.br/products/livro-typescript'
  };

  livros: string[] = ['Java', 'Angular 2']

  filtro!: string;

  addCurso(valor: string){
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos(){

    if (this.livros.length === 0 || this.filtro ===undefined
      || this.filtro.trim() ===''){

      }
  }


  valoAsync = new Promise((resolve, rejects) =>{
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));


  constructor() { }

  ngOnInit(): void {
  }

}
