// Define TypeScript interfaces
export interface FAQItem {
    question: string;
    answer: string;
  }
  
  export interface FAQItemsMap {
    [key: string]: FAQItem[];
  }
  
  // FAQ items organized by category
  export const faqItems: FAQItemsMap = {
    'Ordering & Payment': [
      {
        question: 'How do I place an order?',
        answer: 'You can place an order by browsing our products, selecting your desired items, adding them to your cart, and following the checkout process. Make sure you\'re logged into your account or check out as a guest.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are securely processed and encrypted.'
      },
      {
        question: 'Can I modify or cancel my order after it\'s been placed?',
        answer: 'We process orders quickly to ensure fast shipping. If you need to modify or cancel your order, please contact our customer service team immediately at support@gymtechgear.com. We\'ll do our best to accommodate your request, but we cannot guarantee changes once the order has been processed.'
      },
      {
        question: 'Do you offer discounts for bulk orders?',
        answer: 'Yes, we offer special pricing for bulk orders for teams, gyms, and fitness centers. Please contact our sales team at sales@gymtechgear.com for more information and a custom quote.'
      },
      {
        question: 'Is it safe to use my credit card on your website?',
        answer: 'Absolutely. Our website uses SSL encryption to protect your personal and payment information. We also comply with PCI DSS (Payment Card Industry Data Security Standard) to ensure the highest level of security for your transactions.'
      }
    ],
    'Shipping & Delivery': [
      {
        question: 'How long will it take to receive my order?',
        answer: 'Standard shipping typically takes 3-5 business days within the continental United States. Express shipping (1-2 business days) is available for an additional fee. International shipping times vary by destination, generally taking 7-14 business days.'
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination. Import duties and taxes may apply and are the responsibility of the recipient.'
      },
      {
        question: 'How can I track my order?',
        answer: 'Once your order ships, you\'ll receive a confirmation email with tracking information. You can also track your order by logging into your account on our website and viewing your order history.'
      },
      {
        question: 'Do you offer free shipping?',
        answer: 'We offer free standard shipping on all domestic orders over $75. Orders under $75 incur a flat shipping fee of $7.95. International shipping rates are calculated based on destination and package weight.'
      },
      {
        question: 'What if my package is lost or damaged during shipping?',
        answer: 'If your package is lost or arrives damaged, please contact our customer service team within 48 hours of the delivery date. We\'ll work with the shipping carrier to resolve the issue and ensure you receive your items in perfect condition.'
      }
    ],
    'Returns & Exchanges': [
      {
        question: 'What is your return policy?',
        answer: 'We accept returns of unworn, unwashed items with original tags attached within 30 days of purchase. Returns must be in the original packaging. Sale items and intimates are final sale and cannot be returned.'
      },
      {
        question: 'How do I initiate a return or exchange?',
        answer: 'To initiate a return or exchange, log into your account, go to your order history, and select the "Return" option next to the relevant order. Follow the instructions to generate a return label and complete the process. Alternatively, contact our customer service team for assistance.'
      },
      {
        question: 'Who pays for return shipping?',
        answer: 'The customer is responsible for return shipping costs unless the return is due to our error (incorrect item shipped, defective product, etc.). In those cases, we will provide a prepaid return label.'
      },
      {
        question: 'How long does it take to process a return?',
        answer: 'Once we receive your returned items, it typically takes 3-5 business days to process the return. Refunds are issued to the original payment method and may take an additional 3-7 business days to appear on your statement, depending on your financial institution.'
      },
      {
        question: 'Can I exchange an item for a different size or color?',
        answer: 'Yes, you can exchange items for a different size or color, subject to availability. The exchange process is the same as returns – initiate through your account or contact customer service. We\'ll ship the new item once we receive the returned product.'
      }
    ],
    'Product Information': [
      {
        question: 'How do I find the right size?',
        answer: 'We provide detailed size guides for all our products. To find your perfect fit, measure yourself according to our guidelines and compare with our size charts. If you\'re between sizes, we generally recommend sizing up for a more comfortable fit.'
      },
      {
        question: 'What materials are used in your products?',
        answer: 'We use high-quality technical fabrics designed for performance and comfort. Most of our products feature moisture-wicking, quick-drying materials with four-way stretch capabilities. Specific material information is listed on each product page.'
      },
      {
        question: 'How should I care for my gymtechgear products?',
        answer: 'To maintain the quality and performance of your gymtechgear products, we recommend machine washing in cold water with similar colors and mild detergent. Avoid using fabric softeners or bleach. Air dry or tumble dry on low heat. Detailed care instructions are included on the product tags.'
      },
      {
        question: 'Are your products suitable for all types of workouts?',
        answer: 'We design our products for versatility across multiple workout types. However, we do have specialized lines optimized for specific activities like running, weightlifting, yoga, and HIIT. Check the product descriptions for activity recommendations.'
      },
      {
        question: 'Do you offer sustainable or eco-friendly products?',
        answer: 'Yes, we are committed to sustainability. Our Eco-Performance line features products made from recycled materials and sustainable fabrics. We\'re continuously expanding our sustainable offerings and improving our manufacturing processes to reduce environmental impact.'
      }
    ],
    'Account & Membership': [
      {
        question: 'How do I create an account?',
        answer: 'You can create an account by clicking the "Account" icon in the top navigation bar and selecting "Sign Up." Fill in your details, create a password, and you\'re all set. Creating an account allows you to track orders, save payment information, and collect loyalty points.'
      },
      {
        question: 'What are the benefits of creating an account?',
        answer: 'Account holders enjoy benefits such as faster checkout, order tracking, access to order history, exclusive promotions, early access to new products, and participation in our loyalty program where you earn points with every purchase.'
      },
      {
        question: 'How does your loyalty program work?',
        answer: 'Our Performance Rewards program lets you earn 1 point for every $1 spent. Points can be redeemed for discounts, free shipping, exclusive products, and more. You automatically join the program when you create an account.'
      },
      {
        question: 'I forgot my password. How can I reset it?',
        answer: 'If you\'ve forgotten your password, click "Login," then "Forgot Password." Enter your email address, and we\'ll send you a link to reset your password. For security reasons, the link is valid for 24 hours.'
      },
      {
        question: 'How can I update my account information?',
        answer: 'You can update your account information by logging in, clicking on "My Account," and selecting "Account Settings." Here you can edit your profile information, change your password, update payment methods, and manage your address book.'
      }
    ]
  };
  
  // FAQ categories
  export const categories: string[] = [
    'Ordering & Payment',
    'Shipping & Delivery',
    'Returns & Exchanges',
    'Product Information',
    'Account & Membership'
  ];
  