import renderer from 'react-test-renderer';
import Home from 'components/Home';

it('renders home page', () => {
  const tree = renderer
    .create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
