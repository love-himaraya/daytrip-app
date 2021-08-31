export const timeToCook = fetch(
  "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=10"
)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    let recipeIndication = []
    for (let i = 0; i < data.result.length; i++) {
      recipeIndication.push(data.result[i].recipeIndication)
    }
    return recipeIndication
  })

export const dishName = function () {
  fetch(
    "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=10"
  )
    .then((rea) => {
      return rea.json()
    })
    .then((data) => {
      let dishDescription = []
      for (let i = 0; i < data.result.length; i++) {
        dishDescription.push(data.result[i].recipeDescription)
      }
      return dishDescription
    })
}

// Vue ファイルで読み込む時は、
// import { timeToCook,dishName } from '@/components/rakuten_category-api.js'
// として読み込んで
// timeToCook().then((recipeIndication) => {
//  console.log(recipeIndication)
// }))
// という風に使える。
