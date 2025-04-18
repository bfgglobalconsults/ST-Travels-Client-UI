import { CurrencyData } from "@/layouts/header/header-right/header-right";

export const mapId = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147718689!2d-74.11976358820196!3d40.69740344169578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1568001991098!5m2!1sen!2sin";
export const DubaiMapId = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.947083307639!2d55.27078201501061!3d25.204849083890014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4347708bc8e1%3A0x8ef7b7eaff0f2c2b!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1692608808284!5m2!1sen!2sin";

export const currencyData: Record<string, CurrencyData> = {
  USD: {
    name: "dollar",
    symbol: "$",
    currencyValue: 1,
  },
  EUR: {
    name: "euro",
    symbol: "€",
    currencyValue: 0.88,
  },
  INR: {
    name: "inr",
    symbol: "₹",
    currencyValue: 85.40,
  },
  AUD: {
    name: "aud",
    symbol: "$",
    currencyValue: 1.57,
  },
  GBP: {
    name: "pound",
    symbol: "£",
    currencyValue: 0.76,
  },
  JPY: {
    name: "yen",
    symbol: "¥",
    currencyValue: 144.50,
  },
  CAD: {
    name: "canadian dollar",
    symbol: "$",
    currencyValue: 1.36,
  },
    NGN: {
      name: "nigerian naira",
      symbol: "₦",
      currencyValue: 1603.58 ,
    }
};
