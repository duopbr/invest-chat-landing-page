
declare global {
  interface Window {
    dataLayer: any[];
  }
}

if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

export const trackCheckoutInitiation = (planData: any, email: string, phone: string, paymentType: 'card' | 'pix') => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'InitiateCheckout',
      value: planData.price,
      currency: 'BRL',
      payment_type: paymentType,
      user_data: {
          em: email,
          ph: phone
      },
      ecommerce: {
        currency: 'BRL',
        value: planData.price,
        items: [{
          item_name: planData.title,
          item_category: 'Plano de Assinatura',
          price: planData.price,
          quantity: 1
        }]
      }
    });
  }
};

export const trackPurchaseComplete = (planData: any, paymentType: 'card' | 'pix') => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'Purchase',
      value: planData.price,
      currency: 'BRL',
      payment_type: paymentType,
      ecommerce: {
        currency: 'BRL',
        value: planData.price,
        items: [{
          item_name: planData.title,
          item_category: 'Plano de Assinatura',
          price: planData.price,
          quantity: 1
        }]
      }
    });
  }
};
