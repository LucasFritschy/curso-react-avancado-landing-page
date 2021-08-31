const getImageUrl = (url: string) =>
  `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`

export default getImageUrl
