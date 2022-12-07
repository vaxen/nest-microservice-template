import { HealthService } from './health.service';

describe('HealthService', () => {
  let victim: HealthService;

  beforeEach(() => {
    victim = new HealthService();
  });

  describe('isHealthy', () => {
    it('should return true', async () => {
      const expected = {isHealthy: true, statusCode: 200};

      const result = await victim.isHealthy();

      expect(result).toEqual(expected);
    });
  });
});
