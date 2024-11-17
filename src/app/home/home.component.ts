import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

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

  ngOnInit(): void {

  }

}
