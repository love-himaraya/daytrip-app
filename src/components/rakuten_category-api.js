const timeToCook = fetch(
  "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=10"
)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    for (let i = 0; i < data.result.length; i++) {
      let recipeIndication = data.result[i].recipeIndication
    }
  })

const dishName = function () {
  fetch(
    "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=10"
  )
    .then((rea) => {
      return rea.json()
    })
    .then((datas) => {
      for (let i = 0; i < datas.result.length; i++) {
        let dishDescription = datas.result[i].recipeDescription
      }
    })
}
