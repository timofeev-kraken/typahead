import { ScTypeaheadChipInputPage } from './app.po';

describe('sc-typeahead-chip-input App', function() {
  let page: ScTypeaheadChipInputPage;

  beforeEach(() => {
    page = new ScTypeaheadChipInputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
