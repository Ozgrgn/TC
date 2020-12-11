import { Injectable, OnInit } from "@angular/core";
import { Category } from './category.model';
import { RestService } from './rest.service';

@Injectable()
export class CategoryRepository implements OnInit {
    private categories: Category[] = [];

    constructor(private restService: RestService) {
   this.getData()
     }

     getData (){
         this.restService
         .getCategories()
         .subscribe(categories => this.categories = categories);
         console.log(this.categories);
     }



    ngOnInit() {
    }
        
 
    getCategory(_id: String): Category {
        return this.categories.find(i => i._id == _id);
    }

            
    getCategories():Category[] {
        return this.categories;
}
    saveCategory(category:Category) {
        if (!category._id) {
            this.restService.addCategory (category)
            .subscribe (c=> {
                this.getData()
            });
        } else {
            this.restService.updateCategory(category)
            .subscribe (c => {
                this.getData()
            })
        }
    }
    deleteCategory(categoryId: String) {
        this.restService.deleteCategory(categoryId)
        .subscribe (c=> {
            this.getData()
        })
    }
}
