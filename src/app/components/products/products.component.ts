import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Products } from '../../interfaces/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  product: any = {};
  products: Products[] = [];
  productsAux: Products[] = [];
  subscription: any;
  isImage() {}
  ngOnInit(): void {
    this.productsService.fetchAllProducts().subscribe((data) => {
      this.products = data.slice(0, 500);
      this.productsAux = data.slice(0, 500);
    });

    this.subscription = this.productsService
      .getSearchTerm()
      .subscribe((term) => {
        this.filterProducts(term);
      });
  }

  openModal(id: number) {
    this.product = this.products.find((item) => item.id === id);
  }

  filterProducts(term: any) {
    console.log('clicked', term.propiedad);

    switch (term.propiedad) {
      case 'category':
        this.products = this.productsAux.filter(
          (item) => item.category === term.termino
        );
        break;
      case 'brand':
        this.products = this.productsAux.filter(
          (item) => item.brand === term.termino
        );
        break;
      case 'product_type':
        this.products = this.productsAux.filter(
          (item) => item.product_type === term.termino
        );
        break;

      default:
        break;
    }
  }
}
