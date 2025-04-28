// Simple local storage service for card data
export interface CardData {
  id: string | number;
  accountHolder: string;
  cardType: string;
  cardNumber: string;
  cvv: string;
  country: string;
  transPerWeek: number | string;
  address: string;
  price: number | string;
  bank?: string;
  exp?: string;
  balance?: string;
  transactionLimit?: string;
}

class CardStorageService {
  private storageKey = 'selected_card_data';

  // Store card data in localStorage
  saveCardData(cardData: CardData): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cardData));
  }

  // Retrieve card data from localStorage
  getCardData(): CardData | null {
    const data = localStorage.getItem(this.storageKey);
    if (!data) return null;
    
    try {
      return JSON.parse(data) as CardData;
    } catch (error) {
      console.error('Error parsing card data:', error);
      return null;
    }
  }

  // Clear card data from localStorage
  clearCardData(): void {
    localStorage.removeItem(this.storageKey);
  }
}

export const cardStorage = new CardStorageService();