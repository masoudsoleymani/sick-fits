import ProtoTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>I am the page commponrnt</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: ProtoTypes.any,
};
