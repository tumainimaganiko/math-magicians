import renderer from 'react-test-renderer';
import Navbar from 'components/NavBar';
import { MemoryRouter } from 'react-router-dom';


it('Renders a Navigation Bar', () => {
    const tree = renderer.create(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})