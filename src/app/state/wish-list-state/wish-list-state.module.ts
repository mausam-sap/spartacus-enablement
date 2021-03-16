import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { WishListEffects } from './wish-list.effects';
import { reducer } from './wish-list.reducer';
import { WISH_LIST_FEATURE } from './wish-list.state';

@NgModule({
  imports: [
    CommonModule,
    // Use StoreModule.forFeature() abd EffectsModule.forFeature()
    // to register your custom feature state and effects
    StoreModule.forFeature(WISH_LIST_FEATURE, reducer),
    EffectsModule.forFeature([WishListEffects]),
  ],
})
export class WishListStateModule {}
