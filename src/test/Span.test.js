import renderer from 'react-test-renderer';
import Span from 'components/Span';

it('Be a button', () => {
    const obj = {
        total: null,
        next: null,
        operation: null,
    }
    const tree = renderer.create(<Span obj={obj} setObj={() => obj} text="AC" color="white" />).toJSON();
    expect(tree).toMatchSnapshot();
})