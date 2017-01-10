import { DebttrackerPage } from './app.po';

describe('debttracker App', function() {
  let page: DebttrackerPage;

  beforeEach(() => {
    page = new DebttrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
