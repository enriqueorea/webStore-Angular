import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  category: any = [];
  brands: any = [];
  productType: any = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.fetchAllProducts().subscribe((data) => {
      data.map((item) => {
        if (this.category.includes(item.category)) {
          this.category = this.category;
        } else {
          this.category.push(item.category);
        }
        if (this.brands.includes(item.brand)) {
          this.brands = this.brands;
        } else {
          this.brands.push(item.brand);
        }
        if (this.productType.includes(item.product_type)) {
          this.productType = this.productType;
        } else {
          this.productType.push(item.product_type);
        }
      });
    });
  }

  sendTerm(term: any, prop: any) {
    this.productService.sendSearchTerm(term, prop);
  }
}
