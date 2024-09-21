const FB_PIXEL = "734507692124662"

export const trackFbPurchase = async (id: string, price: any, ) => {
  const { default: ReactPixel } = await import('react-facebook-pixel');
  ReactPixel.init(FB_PIXEL) 
  ReactPixel.track('Purchase', {content_ids: [id], value: price, content_type: 'product', currency: 'USD', })
}