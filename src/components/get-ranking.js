export const getRecipeRanking = async (categoryId) => {
  const res = fetch(
    `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=${categoryId}`
  )
  const data = (await res).json()
  return data
}

export const getFrenchRecipeRanking = async () => {
  const res = fetch(
    `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=44`
  )
  const data = (await res).json()
  return data
}

export const getChineseRecipeRanking = async () => {
  const res = fetch(
    `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=41`
  )
  const data = (await res).json()
  return data
}

export const getKoreaRecipeRanking = async () => {
  const res = fetch(
    `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=42`
  )
  const data = (await res).json()
  return data
}

export const getItariRecipeRanking = async () => {
  const res = fetch(
    `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=43`
  )
  const data = (await res).json()
  return data
}

export const getOKinawaRecipeRanking = async () => {
  const res = fetch(
    `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=47`
  )
  const data = (await res).json()
  return data
}

export const getJapanRecipeRanking = async () => {
  const res = fetch(
    `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=48`
  )
  const data = (await res).json()
  return data
}
