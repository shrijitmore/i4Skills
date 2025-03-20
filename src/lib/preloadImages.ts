/**
 * Utility to preload images to prevent layout shifts and flickering
 * @param urls Array of image URLs to preload
 * @returns Promise that resolves when all images are loaded
 */
export const preloadImages = (urls: string[]): Promise<boolean[]> => {
  const imagePromises = urls.map((url) => {
    return new Promise<boolean>((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  });

  return Promise.all(imagePromises);
};

/**
 * Preload a single image
 * @param url Image URL to preload
 * @returns Promise that resolves when the image is loaded
 */
export const preloadImage = (url: string): Promise<boolean> => {
  return new Promise<boolean>((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};
