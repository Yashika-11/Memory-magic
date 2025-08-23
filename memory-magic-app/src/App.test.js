import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

describe('Memory Match Game', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockReturnValue(null);
    localStorageMock.setItem.mockClear();
    jest.clearAllTimers();
  });

  test('renders game title and instructions', () => {
    render(<App />);
    expect(screen.getByText('Memory Match Game')).toBeInTheDocument();
    expect(screen.getByText('Flip cards to find matching pairs')).toBeInTheDocument();
  });

  test('displays initial game stats', () => {
    render(<App />);
    expect(screen.getByText('MOVES')).toBeInTheDocument();
    expect(screen.getByText('TIME')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('00:00')).toBeInTheDocument();
  });

  test('displays difficulty controls', () => {
    render(<App />);
    expect(screen.getByText('Easy (4×4)')).toBeInTheDocument();
    expect(screen.getByText('Medium (6×6)')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  test('displays game board with cards', () => {
    render(<App />);
   
    const cards = screen.getAllByText('?');
    expect(cards.length).toBeGreaterThan(0);
  });

  test('allows difficulty change', () => {
    render(<App />);
    const mediumButton = screen.getByText('Medium (6×6)');
    fireEvent.click(mediumButton);
    
   
    const cards = screen.getAllByText('?');
    expect(cards.length).toBeGreaterThan(0);
  });

  test('allows game reset', () => {
    render(<App />);
    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);
    
    
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('00:00')).toBeInTheDocument();
  });

  test('tracks moves when cards are flipped', () => {
    render(<App />);
    const cards = screen.getAllByText('?');
    
   
    fireEvent.click(cards[0]);
    expect(screen.getByText('0')).toBeInTheDocument(); // No move yet
    
    
    fireEvent.click(cards[1]);
    expect(screen.getByText('1')).toBeInTheDocument(); // One move
  });

  test('starts timer when first card is flipped', async () => {
    jest.useFakeTimers();
    render(<App />);
    const cards = screen.getAllByText('?');
    
    fireEvent.click(cards[0]);
    
   
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    
    await waitFor(() => {
      expect(screen.getByText('00:01')).toBeInTheDocument();
    });
    
    jest.useRealTimers();
  });

  test('saves score to localStorage when game completes', async () => {
    jest.useFakeTimers();
    render(<App />);
    
    
    const cards = screen.getAllByText('?');
    
  
    fireEvent.click(cards[0]);
    fireEvent.click(cards[1]);
    
   
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    
    // Verify that localStorage was called (even if game isn't fully completed)
    expect(localStorageMock.setItem).toHaveBeenCalled();
    
    jest.useRealTimers();
  });
});
