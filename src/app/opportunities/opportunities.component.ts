import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opportunities',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './opportunities.component.html',
  styleUrl: './opportunities.component.css'
})
export class OpportunitiesComponent implements OnInit {

  cards = [
    {
      imageUrl: 'assets/vagasOne.jpeg',
      title: 'Loja do Mecanico',
      description: 'Temos mais das diversas ferramentas para ajudar na manutenção do seu veículo.',
      lastUpdated: 'Last updated 10 mins ago'
    },
    {
      imageUrl: 'assets/vagasOne.jpeg',
      title: 'Loja do Mecanico',
      description: 'Temos mais das diversas ferramentas para ajudar na manutenção do seu veículo.',
      lastUpdated: 'Last updated 10 mins ago'
    },
    {
      imageUrl: 'assets/vagasOne.jpeg',
      title: 'Loja do Mecanico',
      description: 'Temos mais das diversas ferramentas para ajudar na manutenção do seu veículo.',
      lastUpdated: 'Last updated 10 mins ago'
    },
    {
      imageUrl: 'assets/vagasOne.jpeg',
      title: 'Loja do Mecanico',
      description: 'Temos mais das diversas ferramentas para ajudar na manutenção do seu veículo.',
      lastUpdated: 'Last updated 10 mins ago'
    },
    {
      imageUrl: 'assets/vagasOne.jpeg',
      title: 'Loja do Mecanico',
      description: 'Temos mais das diversas ferramentas para ajudar na manutenção do seu veículo.',
      lastUpdated: 'Last updated 10 mins ago'
    },
    {
      imageUrl: 'assets/vagasOne.jpeg',
      title: 'Loja do Mecanico',
      description: 'Temos mais das diversas ferramentas para ajudar na manutenção do seu veículo.',
      lastUpdated: 'Last updated 10 mins ago'
    }
  ];


  ngOnInit(): void {

  }




}
