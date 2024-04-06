import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  totalPrice: 0,
  totalCount: 0,
};

const getCardsFromStorage = () => {
  if (localStorage.getItem("cards")) {
    return JSON.parse(localStorage.getItem("cards"));
  }
  return [];
};

const addCardsFromStorage = (card) => {
  let cards = getCardsFromStorage();
  cards.push(card);
  localStorage.setItem("cards", JSON.stringify(cards));
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addBasketCard: (state, action) => {
      const isHaveCard = getCardsFromStorage().find(
        (card) => card.id == action.payload.id
      );

      if (isHaveCard) {
        //storage da gelen ürün kaydı vardır
        getCardsFromStorage().map((card) => {
          if (card.id == action.payload.id) {
            let targetCard = card;
            targetCard.count += action.payload.count;

            let extractedCards = getCardsFromStorage().filter(
              (card) => card.id != action.payload.id
            );
            extractedCards.push(targetCard);

            state.cards = extractedCards;
            localStorage.setItem("cards", JSON.stringify(extractedCards));
          }
        });
      } else {
        //storage 'da yoktur.
        addCardsFromStorage(action.payload);
        state.cards = [...state.cards, action.payload];
        state.totalCount = state.cards.length;
      }
    },

    removeBasketCard: (state, action) => {
      const extractedCards = state.cards.filter(
        (card) => card.id != action.payload
      );
      state.cards = extractedCards;
      state.totalCount = state.cards.length;
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },
    fillProductsToState: (state) => {
      state.cards = getCardsFromStorage();
      state.totalCount = state.cards.length;
    },
    calculateTotalPrice: (state) => {
      if (state.cards.length > 0) {
        let totalPrice = 0;
        state.cards.map((card) => {
          totalPrice += card.price * card.count;
        });
        state.totalPrice = totalPrice;
      }
    },
  },
});

export const {
  fillProductsToState,
  addBasketCard,
  removeBasketCard,
  getBasketProductCount,
  calculateTotalPrice,
} = cardSlice.actions;

export default cardSlice.reducer;
