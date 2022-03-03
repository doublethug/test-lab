/* eslint-disable */
import PageHeader from './PageHeader';

export default {
  title: "PageHeader",
  text: "Test"
};

export const Default = (text) => <PageHeader text = {text} />;

Default.story = {
  name: 'default',
};
