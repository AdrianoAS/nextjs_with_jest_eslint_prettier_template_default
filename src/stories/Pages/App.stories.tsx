import { ComponentStory } from '@storybook/react'

import App from '../../../src/pages/index'

export default {
  title: 'App',
  component: App,
  args: {
    children: 'children'
  },
  argTypes: {
    children: { type: 'string' }
  }
}

export const AppComponent: ComponentStory<typeof App> = () => <App />
