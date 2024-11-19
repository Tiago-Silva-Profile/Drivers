import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css'
})
export class DriversComponent implements OnInit{

  ngOnInit(): void {

  }

  vehicles = ['Carro', 'Moto', 'Carreta', 'Toco'];
  ufs = ['Pernambuco - PE', 'São Paulo - SP', 'Paraíba - PB', 'Rio Grande do Norte - RN'];
  citys = ['Recife', 'São Paulo', 'João Pessoal', 'Natal'];

  cards = [
    {
      imageUrl: 'assets/driverOne.jpeg',
      title: 'Tiago Silva - Fretado',
      description: 'Trabalho neste ramo a mais de 15 anos, transportando de norte a sul do País viagem atualmente nacionais',
      link: 'https://example.com/link1'
    },{
      imageUrl: 'assets/driverOne.jpeg',
      title: 'Tiago Silva - Fretado',
      description: 'Trabalho neste ramo a mais de 15 anos, transportando de norte a sul do País viagem atualmente nacionais',
      link: 'https://example.com/link1'
    },{
      imageUrl: 'assets/driverOne.jpeg',
      title: 'Tiago Silva - Fretado',
      description: 'Trabalho neste ramo a mais de 15 anos, transportando de norte a sul do País viagem atualmente nacionais',
      link: 'https://example.com/link1'
    },{
      imageUrl: 'assets/driverOne.jpeg',
      title: 'Tiago Silva - Fretado',
      description: 'Trabalho neste ramo a mais de 15 anos, transportando de norte a sul do País viagem atualmente nacionais',
      link: 'https://example.com/link1'
    },{
      imageUrl: 'assets/driverOne.jpeg',
      title: 'Tiago Silva - Fretado',
      description: 'Trabalho neste ramo a mais de 15 anos, transportando de norte a sul do País viagem atualmente nacionais',
      link: 'https://example.com/link1'
    },

  ];


}
