import renderer from 'react-test-renderer';
import Quotes from 'components/Quotes';

it('Render quotes', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
