export const getProductMainImage = (productId: string) => {
  const path = `/product-img/${productId}/1.jpg`;
  return path;
}; 

export const getProductImages = (productId: string) => {
  const imageNames = [];

  for (let i = 1; i <= 5; i++) {
    const path = `/product-img/${productId}/${i}.jpg`;
    imageNames.push(path);
  }

  return imageNames;
};
