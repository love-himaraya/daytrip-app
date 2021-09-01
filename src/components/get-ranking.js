export const getRecipeRanking = async (categoryId) => {
  const res = await fetch(
    `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=${categoryId}`
  )
  const data = (await res).json()
  return data
}

export const getRecipeCategory = async (categoryId) => {
  const res = await fetch(
    `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=${categoryId}`
  )
  const data = (await res).json()
  return data
}
