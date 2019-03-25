// Import the `mount()` method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils';
import Log from './Log.vue';

describe('Log', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Log, {
    propsData: {
      propMessage: 'World!',
    },
  });
  const logMessage = 'Hello, World!';

  it('renders "Hello, World!"', () => {
    expect(wrapper.html()).toContain(logMessage);
  });
});
