
export type StoreImage={
    "banner": string,
    "logo": string,
    "icon": string
}
export type StoresRecord={
    "storeID": string,
    "storeName": string,
    "isActive": number,
    "images": StoreImage
}

export type DealsRecord={
    "internalName": string,
    "title": string,
    "metacriticLink": string,
    "dealID": string,
    "storeID": string,
    "gameID": string,
    "salePrice": string,
    "normalPrice": string,
    "isOnSale": string,
    "savings": string,
    "metacriticScore": string,
    "steamRatingText": string,
    "steamRatingPercent": string,
    "steamRatingCount": string,
    "steamAppID": string,
    "releaseDate": number,
    "lastChange": number,
    "dealRating": string,
    "thumb": string
}

/*
{
    "internalName": "DEUSEXHUMANREVOLUTIONDIRECTORSCUT",
    "title": "Deus Ex: Human Revolution - Director's Cut",
    "metacriticLink": "/game/pc/deus-ex-human-revolution---directors-cut",
    "dealID": "HhzMJAgQYGZ%2B%2BFPpBG%2BRFcuUQZJO3KXvlnyYYGwGUfU%3D",
    "storeID": "1",
    "gameID": "102249",
    "salePrice": "2.99",
    "normalPrice": "19.99",
    "isOnSale": "1",
    "savings": "85.042521",
    "metacriticScore": "91",
    "steamRatingText": "Very Positive",
    "steamRatingPercent": "92",
    "steamRatingCount": "17993",
    "steamAppID": "238010",
    "releaseDate": 1382400000,
    "lastChange": 1621536418,
    "dealRating": "9.6",
    "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/238010/capsule_sm_120.jpg?t=1619788192"
  }
 */