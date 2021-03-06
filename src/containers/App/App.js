import { connect } from 'react-redux';
import { showHideMobNav } from '../../redux/modules/Nav';

import App from '../../components/App/App';

const mapStateToProps = (state) => ({
	showMobNav: state.nav.showMobNav
});

const mapActionCreators = {
	showHideMobNav
};

export default connect(mapStateToProps, mapActionCreators)(App);
