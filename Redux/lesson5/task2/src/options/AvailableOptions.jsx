import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors';
import Options from './Options.jsx';
import { toggleOption } from './options.actions';

const mapStateToProps = state => ({
  options: availableOptionsSelector(state),
});

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapStateToProps, mapDispatch)(Options);
