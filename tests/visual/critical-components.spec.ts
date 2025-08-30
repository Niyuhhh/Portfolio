import { test, expect } from '@playwright/test';

const viewports = [375, 768, 1080, 1920];

test.describe('Portfolio pages', () => {
  for (const width of viewports) {
    test(`should match at width ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await page.goto('/visual/portfolio');
      await expect(page).toHaveScreenshot(`portfolio-${width}.png`);
    });
  }
});

test.describe('Magazine viewer', () => {
  for (const width of viewports) {
    test(`should match at width ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await page.goto('/visual/magazine');
      await expect(page).toHaveScreenshot(`magazine-${width}.png`);
    });
  }
});
