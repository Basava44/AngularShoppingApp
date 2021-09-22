import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingrediants } from '../shared/ingrediants.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingrediants: Ingrediants[];
  private idChangedSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingrediants = this.shoppingListService.getIngrediants();
    this.idChangedSub = this.shoppingListService.ingrediantsChanged.subscribe(
      (ingrediants: Ingrediants[]) => {
        this.ingrediants = ingrediants;
      }
    );
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.idChangedSub.unsubscribe();
  }
}
