import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductInfo} from '../../models/productInfo';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit, AfterContentChecked {
  product = new ProductInfo();

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  productId: string;

  isEdit = false;

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.isEdit = true;
      this.productService.getDetail(this.productId).subscribe(prod => this.product = prod);
    }

  }
  add() {
    this.productService.create(this.product).subscribe(prod => {
        if (!prod) throw new Error;
        this.router.navigate(['/']);
      },
      e => {
      });
  }

  ngAfterContentChecked(): void {
    console.log(this.product);
  }

}
