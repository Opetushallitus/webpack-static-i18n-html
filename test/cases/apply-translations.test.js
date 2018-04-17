import processTemplates from '../cases.setup';
import { join, dirname } from 'path';

describe('apply-localizations', () => {
  beforeAll(() => {
    const baseDir = join(__dirname, '..');
    const options = {
      locale: 'fi',
      locales: ['fi', 'sv', 'en'],
      baseDir: baseDir,
      outputDir: join(baseDir, 'html/'),
      outputDefault: '__lng__/__file__',
      localesPath: join(baseDir, 'locales/'),
      files: 'templates/*.html'
    };

    return processTemplates(options);
  });

  it('Localize files', () => {
    expect(true);
  });

});
