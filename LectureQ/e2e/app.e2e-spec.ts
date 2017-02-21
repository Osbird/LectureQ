import { LectureQPage } from './app.po';

describe('lecture-q App', () => {
  let page: LectureQPage;

  beforeEach(() => {
    page = new LectureQPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
