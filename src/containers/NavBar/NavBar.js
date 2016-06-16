import { connect } from 'react-redux';
import { showHideMobNav } from '../../redux/modules/Nav';

import NavBar from '../../components/NavBar/NavBar';

const mapStateToProps = (state) => ({
	showMobNav: state.nav.showMobNav
});

const mapActionCreators = {
	showHideMobNav
};

export default connect(mapStateToProps, mapActionCreators)(NavBar);
