import { ProjectCoursePage } from './app.po';

describe('project-course App', () => {
  let page: ProjectCoursePage;

  beforeEach(() => {
    page = new ProjectCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
