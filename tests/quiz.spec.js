import { test, expect } from '@playwright/test';

const APP_URL = 'http://localhost:3000';

test.describe('Quiz App E2E', () => {

  test('Avab rakenduse ja kuvab küsimuse', async ({ page }) => {
    await page.goto(APP_URL);

    // Oota, kuni küsimus on nähtav
    const question = page.getByTestId('question');
    await expect(question).toBeVisible();
  });

  test('Õige vastus muudab punktisummat', async ({ page }) => {
    await page.goto(APP_URL);

    // Vali õige vastus (esimene küsimus, õige: index 0)
    const answerBtn = page.getByTestId('answer-0');
    await answerBtn.click();

    // Oota, kuni tagasiside ilmub
    const feedback = page.getByTestId('feedback');
    await feedback.waitFor({ state: 'visible' });

    await expect(feedback).toHaveText('Õige vastus!');
  });

  test('Vale vastus käitub õigesti', async ({ page }) => {
    await page.goto(APP_URL);

    // Vale vastus (esimene küsimus, index 1 või 2)
    const answerBtn = page.getByTestId('answer-1');
    await answerBtn.click();

    const feedback = page.getByTestId('feedback');
    await feedback.waitFor({ state: 'visible' });

    await expect(feedback).toHaveText('Vale vastus!');
  });

test('Lõpptulemuse kuvamine', async ({ page }) => {
  await page.goto(APP_URL);

  // 1. küsimus
  await page.getByTestId('answer-0').click();
  await page.waitForTimeout(1500);

  // 2. küsimus
  await page.getByTestId('answer-1').click();
  await page.waitForTimeout(1500);

  // 3. küsimus
  await page.getByTestId('answer-1').click();
  await page.waitForTimeout(1500);

  // kontrolli tulemuste tabelit
  const resultsTable = page.getByTestId('results-table');
  await expect(resultsTable).toBeVisible();

  // kontrolli lõppskoori
  const finalScore = page.getByTestId('final-score');
  await expect(finalScore).toBeVisible();
});

});