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


describe("When ctrl + h is pressed", () => {
  it("calls logOut function", () => {
    const mocked = jest.fn();
    const wrapper = mount(<App logOut={mocked} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(mocked).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  document.alert = jest.fn();
  it("checks that alert function is called", () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('checks that the alert is "Logging you out"', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith("Logging you out");
    jest.restoreAllMocks();
    wrapper.unmount();
  });
  document.alert.mockClear();
});