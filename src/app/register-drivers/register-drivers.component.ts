import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-drivers',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './register-drivers.component.html',
  styleUrl: './register-drivers.component.css'
})
export class RegisterDriversComponent {

  cities: string[] = []; // Lista de cidades
  newCity: string = ''; // Cidade digitada

  /**
   * Adiciona uma nova cidade à lista.
   */
  addCity(): void {
    const trimmedCity = this.newCity.trim();
    if (trimmedCity && !this.cities.includes(trimmedCity)) {
      this.cities.push(trimmedCity);
      this.newCity = ''; // Limpa o campo de entrada
    }
  }

  /**
   * Remove uma cidade específica da lista.
   * @param city Cidade a ser removida
   */
  removeCity(city: string): void {
    this.cities = this.cities.filter((c) => c !== city);
  }

}
