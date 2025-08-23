import { generateCards, shuffleArray, formatTime, getDifficultyName } from './gameUtils';

describe('Game Utils', () => {
  describe('generateCards', () => {
    test('generates correct number of cards for given pairs', () => {
      const cards = generateCards(4);
      expect(cards).toHaveLength(8);
    });

    test('generates cards with unique IDs', () => {
      const cards = generateCards(3);
      const ids = cards.map(card => card.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(6);
    });

    test('generates cards with matching values', () => {
      const cards = generateCards(2);
      const values = cards.map(card => card.value);
      
    
      const valueCounts = {};
      values.forEach(value => {
        valueCounts[value] = (valueCounts[value] || 0) + 1;
      });
      
      Object.values(valueCounts).forEach(count => {
        expect(count).toBe(2);
      });
    });
  });

  describe('shuffleArray', () => {
    test('returns array with same length', () => {
      const original = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray(original);
      expect(shuffled).toHaveLength(5);
    });

    test('returns array with same elements', () => {
      const original = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray(original);
      expect(shuffled.sort()).toEqual(original.sort());
    });

    test('does not modify original array', () => {
      const original = [1, 2, 3, 4, 5];
      const originalCopy = [...original];
      shuffleArray(original);
      expect(original).toEqual(originalCopy);
    });

    test('handles empty array', () => {
      const shuffled = shuffleArray([]);
      expect(shuffled).toEqual([]);
    });

    test('handles single element array', () => {
      const shuffled = shuffleArray([1]);
      expect(shuffled).toEqual([1]);
    });
  });

  describe('formatTime', () => {
    test('formats zero seconds correctly', () => {
      expect(formatTime(0)).toBe('00:00');
    });

    test('formats seconds less than 60', () => {
      expect(formatTime(30)).toBe('00:30');
      expect(formatTime(59)).toBe('00:59');
    });

    test('formats minutes and seconds', () => {
      expect(formatTime(60)).toBe('01:00');
      expect(formatTime(125)).toBe('02:05');
      expect(formatTime(3661)).toBe('61:01');
    });

    test('pads single digits with zeros', () => {
      expect(formatTime(65)).toBe('01:05');
      expect(formatTime(305)).toBe('05:05');
    });
  });

  describe('getDifficultyName', () => {
    test('returns correct names for known difficulties', () => {
      expect(getDifficultyName('easy')).toBe('Easy (4×4)');
      expect(getDifficultyName('medium')).toBe('Medium (6×6)');
    });

    test('returns difficulty name for unknown difficulties', () => {
      expect(getDifficultyName('hard')).toBe('hard');
      expect(getDifficultyName('expert')).toBe('expert');
    });
  });
});
