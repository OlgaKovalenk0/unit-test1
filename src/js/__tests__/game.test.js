import { getHelthStatus } from '../game';


test('should healthy', () => {
  const result = getHelthStatus({name: 'Маг', health: 80});

  expect(result).toBe('healthy');
});

test('should wounded', () => {
    const result = getHelthStatus({name: 'Маг', health: 45});

    expect(result).toBe('wounded');
});

test('should critical', () => {
    const result = getHelthStatus({name: 'Маг', health: 5});

    expect(result).toBe('critical');
});
