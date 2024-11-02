import { SafeurlPipe } from './safeurl.pipe';

describe('SafePipe', () => {
  it('create an instance', () => {
    const pipe = new SafeurlPipe();
    expect(pipe).toBeTruthy();
  });
});
