const CARD_VALUES = [
    '🍎', '🍌', '🍊', '🍇', '🍓', '🍑', '🍍', '🥝', '🥭', '🍒', '🍆', '🍅', '🥑', '🥦', '🥬', '🥒', '🥕', '🍠',
   
  ];
  
  // Generate cards for the game
  export const generateCards = (pairs) => {
    const selectedValues = CARD_VALUES.slice(0, pairs);
    const cards = [];
    
    // Create pairs of cards
    selectedValues.forEach((value, index) => {
      cards.push(
        { id: `card-${index}-1`, value },
        { id: `card-${index}-2`, value }
      );
    });
    
    return shuffleArray(cards);
  };

  export const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };