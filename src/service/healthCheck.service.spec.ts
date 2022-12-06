import { HealthCheckService } from './healthCheck.service';

describe('HealthCheckService', () => {
  let victim: HealthCheckService;

  beforeEach(() => {
    victim = new HealthCheckService();
  });

  describe('isHealthy', () => {
    it('should return true', async () => {
      const result = await victim.isHealthy();
      expect(result).toBe(true);
    });
  });
});
