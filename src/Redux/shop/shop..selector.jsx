import {createSelector} from 'reselect';

     
  const selectShop= state=> state.shop;


  export const selectShopItems = createSelector(
     [selectShop],
     shop=>shop.collections
  )


  export const CollectionArray=createSelector(
      [selectShopItems],
      collections=>Object.keys(collections).map(key => collections[key])

  ) 

  export const selectShopItem = UrlParam => createSelector(
   [selectShopItems],
          collections => collections[UrlParam]
  )