import { HealthController } from './health.controller';

describe('HealthController', () => {
  let victim: HealthController;
  let healthServiceMock = {isHealthy: jest.fn()};

  beforeEach(async () => {
    victim = new HealthController(healthServiceMock);
  });

  describe('isHealthy', () => {
    it('should return true if the service is healthy', async () => {
      // Arrange
      healthServiceMock.isHealthy.mockResolvedValue(true);

      // Act
      const result = await victim.check();

      // Assert
      expect(result).toBe(true);
    });

    it('should return false if the service is not healthy', async () => {
      // Arrange
      healthServiceMock.isHealthy.mockResolvedValue(false);

      // Act
      const result = await victim.check();

      // Assert
      expect(result).toBe(false);
    });
  });
});
