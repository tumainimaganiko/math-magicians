import renderer from 'react-test-renderer';
import Nopage from 'components/Nopage';

it('Rendere no page', () => {
  const tree = renderer.create(<Nopage />).toJSON();
  expect(tree).toMatchSnapshot();
});
