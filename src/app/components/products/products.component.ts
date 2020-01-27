import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from "../../services/products/products.service"
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
    public products: Array<any>
    constructor(private productsService: ProductsService) { }

    ngOnInit() {
        this.productsService.getProducts().subscribe((products: Array<any>) => {
            console.log("data arrived!")
            this.products = products
        }, (err) => { console.log(err) },
            () => { console.log("complete!") })

    }

    ngOnDestroy() {

    }

}
