import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css'
})
export class PartnerComponent implements OnInit{

  cards = [
    {
      imageUrl: 'assets/partnerone.jpeg',
      title: 'Loja do Mecanico',
      description: 'Temos mais das diversas ferramentas para ajudar na manutenção do seu veículo.',
      link: 'https://example.com/link1'
    }

  ];

  ngOnInit(): void {

  }






}
