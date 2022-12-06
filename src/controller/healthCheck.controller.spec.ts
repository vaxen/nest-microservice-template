import { HealthCheckController } from './healthCheck.controller';

describe('HealthCheckController', () => {
  let victim: HealthCheckController;
  let healthCheckServiceMock = {isHealthy: jest.fn()};

  beforeEach(async () => {
    victim = new HealthCheckController(healthCheckServiceMock);
  });

  describe('isHealthy', () => {
    it('should return true if the service is healthy', async () => {
      // Arrange
      healthCheckServiceMock.isHealthy.mockResolvedValue(true);

      // Act
      const result = await victim.check();

      // Assert
      expect(result).toBe(true);
    });

    it('should return false if the service is not healthy', async () => {
      // Arrange
      healthCheckServiceMock.isHealthy.mockResolvedValue(false);

      // Act
      const result = await victim.check();

      // Assert
      expect(result).toBe(false);
    });
  });
});
