import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit, OnDestroy{

    vehicles = ['Carro', 'Moto', 'Carreta', 'Toco'];
    ufs = ['Pernambuco - PE', 'São Paulo - SP', 'Paraíba - PB', 'Rio Grande do Norte - RN'];
    citys = ['Recife', 'São Paulo', 'João Pessoal', 'Natal'];
    textoBusca = '';
    veiculosFiltrados: string[] = [];

    ngOnInit(): void {
      this.veiculosFiltrados = this.vehicles;
    }

    ngOnDestroy(): void {
      // Unsubscribe from Observables or clean up other resources
    }

    toggleDropdown() {
      // You can use NgClass to toggle the 'show' class directly in the template
    }

    calcularTotalVeiculos() {
      return this.vehicles.length;
    }

    adicionarVeiculo(novoVeiculo: string) {
      this.vehicles.push(novoVeiculo);
      this.filtrarVeiculos();
    }

    removerVeiculo(indice: number) {
      this.vehicles.splice(indice, 1);
      this.filtrarVeiculos();
    }

    editarVeiculo(indice: number, novoNome: string) {
      this.vehicles[indice] = novoNome;
      this.filtrarVeiculos();
    }

    ordenarVeiculosPorNome() {
      this.vehicles.sort();
      this.filtrarVeiculos();
    }

    filtrarVeiculos() {
      this.veiculosFiltrados = this.vehicles.filter(vehicle =>
        vehicle.toLowerCase().includes(this.textoBusca.toLowerCase())
      );
    }
}
