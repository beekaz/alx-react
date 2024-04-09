import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

describe('Test App.js', () => {
  it('App without crashing', () => {
    expect(shallow(<App />).exists()).toBeTruthy();
  });

  it('div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBeTruthy();
  });

  it('div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBeTruthy();
  });

  it('div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBeTruthy();
  });
});